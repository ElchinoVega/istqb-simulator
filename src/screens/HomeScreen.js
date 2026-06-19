import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { ALL_QUESTIONS, CHAPTER_CONFIG } from '../data/questions';
import { loadHistory } from '../utils/storage';

export default function HomeScreen({ navigation }) {
  const totalQuestions = ALL_QUESTIONS.length;
  const [lastAttempts, setLastAttempts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadHistory().then(data => {
        setLastAttempts(data.slice(-3).reverse());
      });
    }, [])
  );

  const poolByChapter = Object.entries(CHAPTER_CONFIG).map(([ch, cfg]) => ({
    ch: parseInt(ch),
    name: cfg.name,
    color: cfg.color,
    inBank: ALL_QUESTIONS.filter(q => q.chapter === parseInt(ch)).length,
    perExam: cfg.count,
  }));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>

        {/* Header badge */}
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>CTFL 4.0 · Exámenes A·B·C·D Oficiales</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Simulador de Examen ISTQB®</Text>
        <Text style={styles.subtitle}>Certified Tester Foundation Level</Text>
        <Text style={styles.subtitleSm}>
          {totalQuestions} preguntas únicas en español · Exámenes A, B, C y D traducidos
        </Text>

        {/* Stats row */}
        <View style={styles.statsRow}>
          {[
            ['40', 'Preguntas'],
            ['60 min', 'Por examen'],
            ['65%', 'Para aprobar'],
            [`${totalQuestions}`, 'En el banco'],
          ].map(([val, label]) => (
            <View key={label} style={styles.statCard}>
              <Text style={styles.statVal}>{val}</Text>
              <Text style={styles.statLabel}>{label}</Text>
            </View>
          ))}
        </View>

        {/* Chapter cards */}
        <Text style={styles.sectionTitle}>Distribución por capítulo</Text>
        {poolByChapter.map(item => (
          <View key={item.ch} style={styles.chapterCard}>
            <View style={[styles.chapterBadge, { backgroundColor: item.color + '22', borderColor: item.color + '55' }]}>
              <Text style={[styles.chapterBadgeText, { color: item.color }]}>Cap. {item.ch}</Text>
            </View>
            <View style={styles.chapterInfo}>
              <Text style={styles.chapterName}>{item.name}</Text>
              <Text style={styles.chapterMeta}>{item.perExam} por examen · {item.inBank} en banco</Text>
            </View>
            <View style={styles.chapterCount}>
              <Text style={[styles.chapterCountNum, { color: item.color }]}>{item.inBank}</Text>
            </View>
          </View>
        ))}

        {/* Start button */}
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => navigation.navigate('Exam')}
          activeOpacity={0.85}
        >
          <Text style={styles.startBtnText}>🚀  Iniciar Examen</Text>
        </TouchableOpacity>

        {/* History section */}
        {lastAttempts.length > 0 && (
          <View style={styles.historySection}>
            <View style={styles.historyHeader}>
              <Text style={styles.sectionTitle}>Últimos exámenes</Text>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Text style={styles.viewAllLink}>Ver todo →</Text>
              </TouchableOpacity>
            </View>
            {lastAttempts.map((a, i) => (
              <TouchableOpacity
                key={a.id}
                style={styles.historyCard}
                onPress={() => navigation.navigate('History')}
                activeOpacity={0.7}
              >
                <View style={styles.historyCardLeft}>
                  <Text style={styles.historyDate}>
                    {new Date(a.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </Text>
                  <Text style={styles.historyTime}>
                    {new Date(a.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                  </Text>
                </View>
                <View style={styles.historyCardCenter}>
                  <View style={[styles.historyBadge, a.passed ? styles.historyBadgePass : styles.historyBadgeFail]}>
                    <Text style={[styles.historyBadgeText, { color: a.passed ? COLORS.correct : COLORS.wrong }]}>
                      {a.passed ? 'APROBADO' : 'REPASO'}
                    </Text>
                  </View>
                </View>
                <View style={styles.historyCardRight}>
                  <Text style={[styles.historyScore, { color: a.passed ? COLORS.primary : COLORS.wrong }]}>
                    {a.percentage}%
                  </Text>
                  <Text style={styles.historyCorrect}>
                    {a.score}/{a.answeredCount} correctas
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.historyBtn}
              onPress={() => navigation.navigate('History')}
              activeOpacity={0.8}
            >
              <Text style={styles.historyBtnText}>📊  Ver Historial Completo</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.footer}>
          Basado en los exámenes de muestra oficiales ISTQB® CTFL v4.0{'\n'}
          Para uso de estudio no comercial · istqb.org
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1 },
  content: { padding: SPACING.lg, paddingBottom: 48 },

  badgeRow: { alignItems: 'center', marginBottom: SPACING.md },
  badge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14, paddingVertical: 5,
    borderRadius: 20,
  },
  badgeText: { color: COLORS.badgeText, fontWeight: '800', fontSize: 11, letterSpacing: 0.5 },

  title: {
    fontSize: 28, fontWeight: '800', color: '#fff',
    textAlign: 'center', marginBottom: 6, letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16, color: COLORS.primary,
    textAlign: 'center', marginBottom: 4,
  },
  subtitleSm: {
    fontSize: 12, color: COLORS.textMuted,
    textAlign: 'center', marginBottom: SPACING.xl,
  },

  statsRow: {
    flexDirection: 'row', flexWrap: 'wrap',
    gap: 10, marginBottom: SPACING.xl, justifyContent: 'center',
  },
  statCard: {
    backgroundColor: COLORS.primaryBg,
    borderWidth: 1, borderColor: COLORS.primaryBorder,
    borderRadius: RADIUS.md,
    paddingHorizontal: 16, paddingVertical: 12,
    alignItems: 'center', minWidth: '44%', flex: 1,
  },
  statVal: { fontSize: 20, fontWeight: '700', color: COLORS.primary },
  statLabel: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },

  sectionTitle: {
    fontSize: 13, fontWeight: '700', color: COLORS.textSecondary,
    marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5,
  },

  chapterCard: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1, borderColor: COLORS.cardBorder,
    borderRadius: RADIUS.md,
    padding: 14, marginBottom: 8,
    flexDirection: 'row', alignItems: 'center', gap: 12,
  },
  chapterBadge: {
    borderWidth: 1, borderRadius: 20,
    paddingHorizontal: 10, paddingVertical: 3,
  },
  chapterBadgeText: { fontSize: 11, fontWeight: '700' },
  chapterInfo: { flex: 1 },
  chapterName: { fontSize: 13, color: COLORS.textPrimary, fontWeight: '600' },
  chapterMeta: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  chapterCount: { alignItems: 'flex-end' },
  chapterCountNum: { fontSize: 22, fontWeight: '800' },

  startBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: SPACING.xl, marginBottom: SPACING.md,
  },
  startBtnText: { color: COLORS.textDark, fontWeight: '800', fontSize: 17 },

  historySection: { marginTop: SPACING.md },
  historyHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12,
  },
  viewAllLink: { color: COLORS.primary, fontWeight: '600', fontSize: 12 },
  historyCard: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1, borderColor: COLORS.cardBorder,
    borderRadius: RADIUS.md,
    padding: 14, marginBottom: 8,
    flexDirection: 'row', alignItems: 'center',
  },
  historyCardLeft: { marginRight: 10 },
  historyDate: { color: COLORS.textSecondary, fontSize: 12, fontWeight: '500' },
  historyTime: { color: COLORS.textMuted, fontSize: 11, marginTop: 1 },
  historyCardCenter: { flex: 1, alignItems: 'center' },
  historyBadge: {
    borderRadius: 12, paddingHorizontal: 10, paddingVertical: 3,
  },
  historyBadgePass: {
    backgroundColor: 'rgba(0,203,117,0.15)',
    borderWidth: 1, borderColor: 'rgba(0,203,117,0.3)',
  },
  historyBadgeFail: {
    backgroundColor: 'rgba(255,80,80,0.12)',
    borderWidth: 1, borderColor: 'rgba(255,80,80,0.3)',
  },
  historyBadgeText: { fontSize: 11, fontWeight: '700' },
  historyCardRight: { alignItems: 'flex-end', marginLeft: 10 },
  historyScore: { fontSize: 20, fontWeight: '800' },
  historyCorrect: { fontSize: 10, color: COLORS.textMuted, marginTop: 1 },
  historyBtn: {
    backgroundColor: 'rgba(0,203,117,0.08)',
    borderWidth: 1, borderColor: 'rgba(0,203,117,0.2)',
    borderRadius: RADIUS.md,
    paddingVertical: 13, alignItems: 'center',
    marginTop: 4, marginBottom: SPACING.sm,
  },
  historyBtnText: { color: COLORS.primary, fontWeight: '700', fontSize: 14 },

  footer: {
    fontSize: 11, color: COLORS.textMuted,
    textAlign: 'center', lineHeight: 17,
  },
});
