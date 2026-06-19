import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, StyleSheet,
  StatusBar, Alert, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { CHAPTER_CONFIG, generateExam } from '../data/questions';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

export default function ExamScreen({ navigation }) {
  const [questions] = useState(() => generateExam());
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const intervalRef = useRef(null);

  // Timer
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          finishExam();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const currentQ = questions[currentIdx];
  const isMulti = currentQ?.multiSelect;
  const currentAnswer = answers[currentIdx];
  const isRevealed = revealed[currentIdx];
  const urgent = timeLeft < 600;

  const isCorrect = useCallback((q, ans) => {
    if (!q) return false;
    if (q.multiSelect) {
      if (!Array.isArray(ans)) return false;
      const correct = Array.isArray(q.correct) ? [...q.correct].sort() : [q.correct];
      return JSON.stringify([...ans].sort()) === JSON.stringify(correct);
    }
    return ans === q.correct;
  }, []);

  const handleSelect = useCallback((optIdx) => {
    if (isRevealed) return;
    if (isMulti) {
      const prev = Array.isArray(currentAnswer) ? currentAnswer : [];
      const next = prev.includes(optIdx)
        ? prev.filter(x => x !== optIdx)
        : [...prev, optIdx];
      setAnswers(a => ({ ...a, [currentIdx]: next }));
    } else {
      setAnswers(a => ({ ...a, [currentIdx]: optIdx }));
    }
  }, [isRevealed, isMulti, currentAnswer, currentIdx]);

  const confirmAnswer = useCallback(() => {
    const ans = answers[currentIdx];
    if (ans === undefined || ans === null) return;
    if (isMulti && (!Array.isArray(ans) || ans.length === 0)) return;
    setRevealed(r => ({ ...r, [currentIdx]: true }));
  }, [answers, currentIdx, isMulti]);

  const finishExam = useCallback(() => {
    clearInterval(intervalRef.current);
    navigation.replace('Results', { questions, answers, revealed });
  }, [questions, answers, revealed]);

  const handleFinishPress = () => {
    const unanswered = questions.filter((_, i) => answers[i] === undefined).length;
    if (unanswered > 0) {
      Alert.alert(
        'Finalizar examen',
        `Tienes ${unanswered} pregunta(s) sin responder. ¿Quieres terminar de todas formas?`,
        [
          { text: 'Continuar', style: 'cancel' },
          { text: 'Finalizar', style: 'destructive', onPress: finishExam },
        ]
      );
    } else {
      finishExam();
    }
  };

  const getOptState = useCallback((optIdx) => {
    if (!isRevealed) {
      if (isMulti) return Array.isArray(currentAnswer) && currentAnswer.includes(optIdx) ? 'selected' : 'normal';
      return currentAnswer === optIdx ? 'selected' : 'normal';
    }
    const ca = Array.isArray(currentQ.correct) ? currentQ.correct : [currentQ.correct];
    const isC = ca.includes(optIdx);
    if (isMulti) {
      const chosen = Array.isArray(currentAnswer) && currentAnswer.includes(optIdx);
      if (isC) return 'correct';
      if (chosen) return 'wrong';
      return 'disabled';
    }
    if (isC) return 'correct';
    if (currentAnswer === optIdx) return 'wrong';
    return 'disabled';
  }, [isRevealed, isMulti, currentAnswer, currentQ]);

  const optStyle = (state) => {
    const base = styles.optionBtn;
    if (state === 'correct') return [base, styles.optCorrect];
    if (state === 'wrong') return [base, styles.optWrong];
    if (state === 'selected') return [base, styles.optSelected];
    if (state === 'disabled') return [base, styles.optDisabled];
    return [base, styles.optNormal];
  };

  const optTextStyle = (state) => {
    if (state === 'correct') return styles.optTextCorrect;
    if (state === 'wrong') return styles.optTextWrong;
    if (state === 'disabled') return styles.optTextDisabled;
    return styles.optTextNormal;
  };

  const canConfirm = currentAnswer !== undefined && currentAnswer !== null &&
    (!isMulti || (Array.isArray(currentAnswer) && currentAnswer.length > 0));

  const progressPct = ((currentIdx + 1) / questions.length) * 100;
  const chColor = CHAPTER_CONFIG[currentQ?.chapter]?.color || COLORS.primary;

  if (!currentQ) return null;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerProgress}>
          {currentIdx + 1} / {questions.length}
        </Text>
        <View style={[styles.timerBadge, urgent && styles.timerUrgent]}>
          <Text style={[styles.timerText, urgent && styles.timerTextUrgent]}>
            ⏱ {fmtTime(timeLeft)}
          </Text>
        </View>
        <TouchableOpacity onPress={handleFinishPress} style={styles.finishBtn}>
          <Text style={styles.finishBtnText}>Finalizar</Text>
        </TouchableOpacity>
      </View>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progressPct}%` }]} />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

        {/* Chapter tag */}
        <View style={[styles.chapterTag, { backgroundColor: chColor + '22', borderColor: chColor + '55' }]}>
          <Text style={[styles.chapterTagText, { color: chColor }]}>
            Cap. {currentQ.chapter} · {CHAPTER_CONFIG[currentQ.chapter]?.name} · {currentQ.lo} · K{currentQ.klevel}
          </Text>
        </View>

        {/* Multi select notice */}
        {isMulti && (
          <View style={styles.multiNotice}>
            <Text style={styles.multiNoticeText}>⚠ Selecciona DOS opciones</Text>
          </View>
        )}

        {/* Question */}
        <Text style={styles.questionText}>{currentQ.question}</Text>

        {/* Options */}
        {currentQ.options.map((opt, i) => {
          const state = getOptState(i);
          return (
            <TouchableOpacity
              key={i}
              style={optStyle(state)}
              onPress={() => handleSelect(i)}
              disabled={isRevealed && state === 'disabled'}
              activeOpacity={0.8}
            >
              <Text style={[styles.optLetter, optTextStyle(state)]}>
                {String.fromCharCode(65 + i)}.{'  '}
              </Text>
              <Text style={[styles.optText, optTextStyle(state)]}>{opt}</Text>
            </TouchableOpacity>
          );
        })}

        {/* Confirm button */}
        {!isRevealed && (
          <TouchableOpacity
            style={[styles.confirmBtn, !canConfirm && styles.confirmBtnDisabled]}
            onPress={confirmAnswer}
            disabled={!canConfirm}
            activeOpacity={0.85}
          >
            <Text style={styles.confirmBtnText}>Verificar respuesta</Text>
          </TouchableOpacity>
        )}

        {/* Explanation */}
        {isRevealed && (
          <View style={styles.explanation}>
            <Text style={[
              styles.explanationTitle,
              isCorrect(currentQ, currentAnswer) ? styles.explCorrect : styles.explWrong
            ]}>
              {isCorrect(currentQ, currentAnswer) ? '✓ ¡Correcto!' : '✗ Incorrecto'}
            </Text>
            <Text style={styles.explanationText}>{currentQ.explanation}</Text>
          </View>
        )}

        {/* Navigation */}
        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navBtn, currentIdx === 0 && styles.navBtnDisabled]}
            onPress={() => setCurrentIdx(i => Math.max(0, i - 1))}
            disabled={currentIdx === 0}
          >
            <Text style={styles.navBtnText}>← Anterior</Text>
          </TouchableOpacity>

          {currentIdx < questions.length - 1 ? (
            <TouchableOpacity
              style={styles.navBtnPrimary}
              onPress={() => setCurrentIdx(i => i + 1)}
            >
              <Text style={styles.navBtnPrimaryText}>Siguiente →</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.navBtnPrimary} onPress={handleFinishPress}>
              <Text style={styles.navBtnPrimaryText}>Ver Resultados</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Question map */}
        <View style={styles.mapCard}>
          <Text style={styles.mapTitle}>MAPA DE PREGUNTAS</Text>
          <View style={styles.mapGrid}>
            {questions.map((q, i) => {
              const isAns = answers[i] !== undefined;
              const isRev = revealed[i];
              const correct = isRev && isCorrect(q, answers[i]);
              const wrong = isRev && !isCorrect(q, answers[i]);
              const isCurrent = i === currentIdx;
              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.mapBtn,
                    isCurrent && styles.mapBtnCurrent,
                    correct && styles.mapBtnCorrect,
                    wrong && styles.mapBtnWrong,
                    isAns && !isRev && styles.mapBtnAnswered,
                  ]}
                  onPress={() => setCurrentIdx(i)}
                >
                  <Text style={[
                    styles.mapBtnText,
                    isCurrent && styles.mapBtnTextCurrent,
                    correct && styles.mapBtnTextCorrect,
                    wrong && styles.mapBtnTextWrong,
                  ]}>
                    {i + 1}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.mapLegend}>
            <Text style={styles.mapLegendText}>🟢 Correcto</Text>
            <Text style={styles.mapLegendText}>🔴 Incorrecto</Text>
            <Text style={styles.mapLegendText}>⬜ Sin responder</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },

  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md, paddingVertical: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1, borderBottomColor: 'rgba(0,203,117,0.2)',
  },
  headerProgress: { color: COLORS.textSecondary, fontWeight: '600', fontSize: 14, flex: 1 },
  timerBadge: {
    backgroundColor: COLORS.primaryBg,
    borderWidth: 1, borderColor: 'rgba(0,203,117,0.4)',
    borderRadius: RADIUS.sm, paddingHorizontal: 12, paddingVertical: 5,
  },
  timerUrgent: { backgroundColor: 'rgba(255,107,107,0.1)', borderColor: 'rgba(255,107,107,0.4)' },
  timerText: { fontFamily: 'Courier', fontWeight: '700', fontSize: 18, color: COLORS.primary },
  timerTextUrgent: { color: COLORS.urgent },
  finishBtn: {
    backgroundColor: 'rgba(255,80,80,0.15)',
    borderWidth: 1, borderColor: 'rgba(255,80,80,0.3)',
    borderRadius: RADIUS.sm, paddingHorizontal: 12, paddingVertical: 6, marginLeft: 8,
  },
  finishBtnText: { color: COLORS.wrong, fontWeight: '600', fontSize: 12 },

  progressBar: { height: 5, backgroundColor: 'rgba(255,255,255,0.06)' },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },

  scroll: { flex: 1 },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: 40,
    maxWidth: isTablet ? 700 : undefined,
    alignSelf: isTablet ? 'center' : undefined,
    width: isTablet ? '100%' : undefined,
  },

  chapterTag: {
    alignSelf: 'flex-start',
    borderWidth: 1, borderRadius: 20,
    paddingHorizontal: 10, paddingVertical: 4,
    marginBottom: 10,
  },
  chapterTagText: { fontSize: 11, fontWeight: '700' },

  multiNotice: {
    backgroundColor: 'rgba(0,203,117,0.06)',
    borderRadius: RADIUS.sm, paddingHorizontal: 12, paddingVertical: 6,
    marginBottom: 10, alignSelf: 'flex-start',
  },
  multiNoticeText: { color: COLORS.textMuted, fontSize: 12 },

  questionText: {
    fontSize: isTablet ? 17 : 15,
    lineHeight: isTablet ? 27 : 23,
    color: '#d4eee6',
    marginBottom: SPACING.md,
  },

  optionBtn: {
    flexDirection: 'row',
    borderWidth: 1, borderRadius: RADIUS.md,
    padding: 14, marginBottom: 10,
  },
  optNormal: { backgroundColor: COLORS.optionNormal, borderColor: COLORS.cardBorder },
  optSelected: { backgroundColor: COLORS.optionSelected, borderColor: 'rgba(0,203,117,0.5)' },
  optCorrect: { backgroundColor: COLORS.correctBg, borderColor: COLORS.correctBorder },
  optWrong: { backgroundColor: COLORS.wrongBg, borderColor: COLORS.wrongBorder },
  optDisabled: { backgroundColor: COLORS.optionDisabled, borderColor: 'rgba(255,255,255,0.05)' },

  optLetter: { fontWeight: '700', fontSize: 14, opacity: 0.7 },
  optText: { flex: 1, fontSize: 14, lineHeight: 20 },
  optTextNormal: { color: '#c8dfd8' },
  optTextCorrect: { color: COLORS.correct },
  optTextWrong: { color: COLORS.wrong },
  optTextDisabled: { color: COLORS.textMuted },

  confirmBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 14, alignItems: 'center',
    marginTop: 6,
  },
  confirmBtnDisabled: { opacity: 0.4 },
  confirmBtnText: { color: COLORS.textDark, fontWeight: '700', fontSize: 15 },

  explanation: {
    backgroundColor: 'rgba(0,203,117,0.06)',
    borderWidth: 1, borderColor: COLORS.primaryBorder,
    borderRadius: RADIUS.md, padding: SPACING.md,
    marginTop: SPACING.md,
  },
  explanationTitle: { fontWeight: '700', marginBottom: 8, fontSize: 15 },
  explCorrect: { color: COLORS.correct },
  explWrong: { color: COLORS.wrong },
  explanationText: { color: COLORS.textSecondary, lineHeight: 20, fontSize: 13 },

  navRow: {
    flexDirection: 'row', gap: 10,
    marginTop: SPACING.md, marginBottom: SPACING.md,
  },
  navBtn: {
    flex: 1, backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: RADIUS.sm, paddingVertical: 12, alignItems: 'center',
  },
  navBtnDisabled: { opacity: 0.3 },
  navBtnText: { color: COLORS.textSecondary, fontWeight: '600' },
  navBtnPrimary: {
    flex: 1, backgroundColor: COLORS.primary,
    borderRadius: RADIUS.sm, paddingVertical: 12, alignItems: 'center',
  },
  navBtnPrimaryText: { color: COLORS.textDark, fontWeight: '700' },

  mapCard: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1, borderColor: COLORS.cardBorder,
    borderRadius: RADIUS.lg, padding: SPACING.md,
  },
  mapTitle: {
    fontSize: 11, color: COLORS.textMuted, fontWeight: '700',
    marginBottom: 12, letterSpacing: 0.5,
  },
  mapGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  mapBtn: {
    width: 34, height: 34, borderRadius: RADIUS.sm,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'center', alignItems: 'center',
  },
  mapBtnCurrent: { borderColor: COLORS.primary, backgroundColor: 'rgba(0,203,117,0.2)' },
  mapBtnCorrect: { borderColor: 'rgba(0,203,117,0.5)', backgroundColor: 'rgba(0,203,117,0.15)' },
  mapBtnWrong: { borderColor: 'rgba(255,80,80,0.5)', backgroundColor: 'rgba(255,80,80,0.15)' },
  mapBtnAnswered: { borderColor: 'rgba(0,203,117,0.3)', backgroundColor: 'rgba(0,203,117,0.06)' },
  mapBtnText: { fontSize: 11, fontWeight: '700', color: COLORS.textMuted },
  mapBtnTextCurrent: { color: COLORS.primary },
  mapBtnTextCorrect: { color: COLORS.correct },
  mapBtnTextWrong: { color: COLORS.wrong },

  mapLegend: {
    flexDirection: 'row', gap: 16, marginTop: 12, flexWrap: 'wrap',
  },
  mapLegendText: { fontSize: 11, color: COLORS.textMuted },
});
