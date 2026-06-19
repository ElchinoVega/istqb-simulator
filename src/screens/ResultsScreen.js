import React, { useCallback, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { CHAPTER_CONFIG } from '../data/questions';
import { saveAttempt } from '../utils/storage';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

export default function ResultsScreen({ navigation, route }) {
  const { questions, answers, revealed } = route.params;

  const isCorrect = useCallback((q, ans) => {
    if (!q) return false;
    if (q.multiSelect) {
      if (!Array.isArray(ans)) return false;
      const correct = Array.isArray(q.correct) ? [...q.correct].sort() : [q.correct];
      return JSON.stringify([...ans].sort()) === JSON.stringify(correct);
    }
    return ans === q.correct;
  }, []);

  const score = questions.reduce((acc, q, i) => {
    return acc + (revealed[i] && isCorrect(q, answers[i]) ? 1 : 0);
  }, 0);

  const answeredCount = Object.keys(revealed).length;
  const pct = Math.round((score / 40) * 100);
  const passed = pct >= 65;

  const chapterStats = Object.entries(CHAPTER_CONFIG).map(([ch, cfg]) => {
    const qs = questions.filter(q => q.chapter === parseInt(ch));
    const correct = qs.filter(q => {
      const idx = questions.indexOf(q);
      return revealed[idx] && isCorrect(q, answers[idx]);
    }).length;
    return { ch: parseInt(ch), ...cfg, total: qs.length, correct };
  });

  useEffect(() => {
    const attempt = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score,
      answeredCount,
      percentage: pct,
      passed,
      chapterStats,
    };
    saveAttempt(attempt);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.content}>

        {/* Result header */}
        <View style={styles.resultHeader}>
          <Text style={styles.resultEmoji}>{passed ? '🎉' : '📋'}</Text>
          <Text style={styles.resultTitle}>{passed ? '¡Aprobado!' : 'Resultado Final'}</Text>
        </View>

        {/* Score cards */}
        <View style={styles.scoreRow}>
          <View style={[styles.scoreCard, passed ? styles.scoreCardGood : styles.scoreCardBad]}>
            <Text style={[styles.scoreNum, { color: passed ? COLORS.primary : COLORS.wrong }]}>
              {pct}%
            </Text>
            <Text style={styles.scoreLabel}>Puntuación</Text>
          </View>
          <View style={[styles.scoreCard, styles.scoreCardGood]}>
            <Text style={[styles.scoreNum, { color: COLORS.primary }]}>
              {score}/{answeredCount}
            </Text>
            <Text style={styles.scoreLabel}>Correctas respondidas</Text>
          </View>
          <View style={[styles.scoreCard, passed ? styles.scoreCardGood : styles.scoreCardBad]}>
            <Text style={[styles.scoreStatus, { color: passed ? COLORS.primary : COLORS.wrong }]}>
              {passed ? 'APROBADO' : 'REPASO'}
            </Text>
            <Text style={styles.scoreLabel}>Mínimo: 65%</Text>
          </View>
        </View>

        {/* Chapter breakdown */}
        <Text style={styles.sectionTitle}>Desglose por capítulo</Text>
        {chapterStats.map(s => {
          const chPct = s.total > 0 ? (s.correct / s.total) : 0;
          const barColor = s.correct === s.total
            ? COLORS.primary
            : s.correct >= s.total * 0.5
            ? '#ffd080'
            : COLORS.wrong;
          return (
            <View key={s.ch} style={styles.chapterRow}>
              <View style={styles.chapterMeta}>
                <Text style={styles.chapterName}>Cap. {s.ch} — {s.name}</Text>
                <Text style={[styles.chapterScore, { color: barColor }]}>
                  {s.correct}/{s.total}
                </Text>
              </View>
              <View style={styles.barBg}>
                <View style={[styles.barFill, { width: `${chPct * 100}%`, backgroundColor: barColor }]} />
              </View>
            </View>
          );
        })}

        {/* Message */}
        <View style={styles.messageCard}>
          {passed ? (
            <Text style={styles.messageText}>
              ✅ Excelente preparación. Sigue practicando para consolidar los conceptos
              más débiles antes del examen oficial.
            </Text>
          ) : (
            <Text style={styles.messageText}>
              📚 Revisa los capítulos donde tuviste menos del 50% de aciertos.
              Cada examen generado usa preguntas diferentes del banco de 169 — ¡sigue practicando!
            </Text>
          )}
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigation.replace('Exam')}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryBtnText}>🔄  Nuevo Examen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.historyBtn}
          onPress={() => navigation.navigate('History')}
          activeOpacity={0.85}
        >
          <Text style={styles.historyBtnText}>📊  Ver Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.85}
        >
          <Text style={styles.secondaryBtnText}>🏠  Volver al inicio</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  content: {
    padding: SPACING.lg,
    paddingBottom: 48,
    maxWidth: isTablet ? 700 : undefined,
    alignSelf: isTablet ? 'center' : undefined,
    width: isTablet ? '100%' : undefined,
  },

  resultHeader: { alignItems: 'center', marginBottom: SPACING.xl },
  resultEmoji: { fontSize: 48, marginBottom: 8 },
  resultTitle: { fontSize: 28, fontWeight: '800', color: '#fff' },

  scoreRow: { flexDirection: 'row', gap: 10, marginBottom: SPACING.xl },
  scoreCard: {
    flex: 1, borderRadius: RADIUS.md,
    borderWidth: 1, padding: 16, alignItems: 'center',
  },
  scoreCardGood: {
    backgroundColor: 'rgba(0,203,117,0.08)',
    borderColor: 'rgba(0,203,117,0.3)',
  },
  scoreCardBad: {
    backgroundColor: 'rgba(255,80,80,0.08)',
    borderColor: 'rgba(255,80,80,0.3)',
  },
  scoreNum: { fontSize: 28, fontWeight: '800' },
  scoreStatus: { fontSize: 16, fontWeight: '800' },
  scoreLabel: { fontSize: 10, color: COLORS.textMuted, marginTop: 4, textAlign: 'center' },

  sectionTitle: {
    fontSize: 13, fontWeight: '700', color: COLORS.textSecondary,
    marginBottom: 14, textTransform: 'uppercase', letterSpacing: 0.5,
  },

  chapterRow: { marginBottom: 14 },
  chapterMeta: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginBottom: 4,
  },
  chapterName: { fontSize: 13, color: COLORS.textPrimary, flex: 1 },
  chapterScore: { fontSize: 13, fontWeight: '700', marginLeft: 8 },
  barBg: {
    height: 6, backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 3, overflow: 'hidden',
  },
  barFill: { height: '100%', borderRadius: 3 },

  messageCard: {
    backgroundColor: COLORS.primaryBg,
    borderWidth: 1, borderColor: COLORS.primaryBorder,
    borderRadius: RADIUS.md, padding: SPACING.md,
    marginTop: SPACING.md, marginBottom: SPACING.xl,
  },
  messageText: { color: COLORS.textSecondary, lineHeight: 20, fontSize: 13 },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md, paddingVertical: 16,
    alignItems: 'center', marginBottom: 12,
  },
  primaryBtnText: { color: COLORS.textDark, fontWeight: '800', fontSize: 16 },

  historyBtn: {
    backgroundColor: 'rgba(0,203,117,0.12)',
    borderWidth: 1, borderColor: 'rgba(0,203,117,0.3)',
    borderRadius: RADIUS.md, paddingVertical: 14,
    alignItems: 'center', marginBottom: 12,
  },
  historyBtnText: { color: COLORS.primary, fontWeight: '700', fontSize: 15 },

  secondaryBtn: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1, borderColor: COLORS.cardBorder,
    borderRadius: RADIUS.md, paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryBtnText: { color: COLORS.textSecondary, fontWeight: '600', fontSize: 15 },
});
