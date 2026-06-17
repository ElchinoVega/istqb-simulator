import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, FlatList,
  StyleSheet, StatusBar, SafeAreaView, Alert, Dimensions
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { loadHistory, clearHistory } from '../utils/storage';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

function formatDate(iso) {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const mins = String(d.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year}  ${hours}:${mins}`;
}

export default function HistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadHistory().then(data => {
        if (active) setHistory(data.reverse());
      });
      return () => { active = false; };
    }, [])
  );

  const handleClear = () => {
    Alert.alert(
      'Borrar historial',
      'Se eliminarán todos los intentos guardados. Esta acción no se puede deshacer.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Borrar',
          style: 'destructive',
          onPress: async () => {
            await clearHistory();
            setHistory([]);
          },
        },
      ]
    );
  };

  const avgScore = history.length > 0
    ? Math.round(history.reduce((a, h) => a + h.percentage, 0) / history.length)
    : 0;

  const bestScore = history.length > 0
    ? Math.max(...history.map(h => h.percentage))
    : 0;

  const passedCount = history.filter(h => h.passed).length;

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardDate}>{formatDate(item.date)}</Text>
        <View style={[styles.badge, item.passed ? styles.badgePassed : styles.badgeFailed]}>
          <Text style={[styles.badgeText, { color: item.passed ? COLORS.correct : COLORS.wrong }]}>
            {item.passed ? 'APROBADO' : 'REPASO'}
          </Text>
        </View>
      </View>

      <View style={styles.cardStats}>
        <View style={styles.cardStat}>
          <Text style={[styles.cardStatNum, { color: item.passed ? COLORS.primary : COLORS.wrong }]}>
            {item.percentage}%
          </Text>
          <Text style={styles.cardStatLabel}>Puntuación</Text>
        </View>
        <View style={styles.cardStat}>
          <Text style={styles.cardStatNumSecondary}>
            {item.score}/{item.answeredCount}
          </Text>
          <Text style={styles.cardStatLabel}>Correctas</Text>
        </View>
        <View style={styles.cardStat}>
          <Text style={styles.cardStatNumSecondary}>
            #{history.length - index}
          </Text>
          <Text style={styles.cardStatLabel}>Intento</Text>
        </View>
      </View>

      <View style={styles.chapterMini}>
        {item.chapterStats.map(ch => {
          const chPct = ch.total > 0 ? Math.round((ch.correct / ch.total) * 100) : 0;
          const barColor = ch.correct === ch.total
            ? COLORS.primary
            : ch.correct >= ch.total * 0.5
            ? '#ffd080'
            : COLORS.wrong;
          return (
            <View key={ch.ch} style={styles.chapterMiniRow}>
              <Text style={styles.chapterMiniName}>C{ch.ch}</Text>
              <View style={styles.chapterMiniBar}>
                <View style={[styles.chapterMiniFill, { width: `${chPct}%`, backgroundColor: barColor }]} />
              </View>
              <Text style={[styles.chapterMiniScore, { color: barColor }]}>
                {ch.correct}/{ch.total}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Historial de Exámenes</Text>
        {history.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearBtn}>
            <Text style={styles.clearBtnText}>Borrar todo</Text>
          </TouchableOpacity>
        )}
      </View>

      {history.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>📋</Text>
          <Text style={styles.emptyTitle}>Sin intentos aún</Text>
          <Text style={styles.emptyText}>
            Completa tu primer examen para ver tu historial de progreso aquí.
          </Text>
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => navigation.navigate('Exam')}
            activeOpacity={0.85}
          >
            <Text style={styles.startBtnText}>Iniciar Examen</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.summaryRow}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryNum}>{history.length}</Text>
              <Text style={styles.summaryLabel}>Exámenes</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={[styles.summaryNum, { color: COLORS.primary }]}>{avgScore}%</Text>
              <Text style={styles.summaryLabel}>Promedio</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={[styles.summaryNum, { color: COLORS.correct }]}>{bestScore}%</Text>
              <Text style={styles.summaryLabel}>Mejor</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={[styles.summaryNum, { color: passedCount > 0 ? COLORS.primary : COLORS.textMuted }]}>
                {passedCount}
              </Text>
              <Text style={styles.summaryLabel}>Aprobados</Text>
            </View>
          </View>

          <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: SPACING.md, paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  backBtn: { paddingRight: 8 },
  backBtnText: { color: COLORS.primary, fontWeight: '600', fontSize: 14 },
  headerTitle: { color: '#fff', fontWeight: '700', fontSize: 16, flex: 1, textAlign: 'center' },
  clearBtn: { paddingLeft: 8 },
  clearBtnText: { color: COLORS.wrong, fontWeight: '600', fontSize: 12 },

  summaryRow: {
    flexDirection: 'row', gap: 8,
    paddingHorizontal: SPACING.md, paddingVertical: 14,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    borderWidth: 1, borderColor: COLORS.cardBorder,
    borderRadius: RADIUS.md, padding: 12, alignItems: 'center',
  },
  summaryNum: { fontSize: 20, fontWeight: '800', color: '#fff' },
  summaryLabel: { fontSize: 10, color: COLORS.textMuted, marginTop: 3 },

  list: { paddingHorizontal: SPACING.md, paddingBottom: 40 },
  card: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1, borderColor: COLORS.cardBorder,
    borderRadius: RADIUS.md, padding: SPACING.md,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 10,
  },
  cardDate: { color: COLORS.textSecondary, fontSize: 12 },
  badge: {
    borderRadius: 12, paddingHorizontal: 10, paddingVertical: 3,
  },
  badgePassed: {
    backgroundColor: 'rgba(0,203,117,0.15)',
    borderWidth: 1, borderColor: 'rgba(0,203,117,0.3)',
  },
  badgeFailed: {
    backgroundColor: 'rgba(255,80,80,0.12)',
    borderWidth: 1, borderColor: 'rgba(255,80,80,0.3)',
  },
  badgeText: { fontSize: 11, fontWeight: '700' },

  cardStats: {
    flexDirection: 'row', gap: 8,
    marginBottom: 10,
  },
  cardStat: {
    flex: 1, alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: RADIUS.sm, paddingVertical: 8,
  },
  cardStatNum: { fontSize: 18, fontWeight: '800' },
  cardStatNumSecondary: { fontSize: 18, fontWeight: '800', color: '#fff' },
  cardStatLabel: { fontSize: 10, color: COLORS.textMuted, marginTop: 2 },

  chapterMini: {
    borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)',
    paddingTop: 10, gap: 6,
  },
  chapterMiniRow: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
  },
  chapterMiniName: { fontSize: 11, color: COLORS.textMuted, width: 24, fontWeight: '600' },
  chapterMiniBar: {
    flex: 1, height: 5, backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 3, overflow: 'hidden',
  },
  chapterMiniFill: { height: '100%', borderRadius: 3 },
  chapterMiniScore: { fontSize: 11, fontWeight: '700', width: 30, textAlign: 'right' },

  empty: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },
  emptyEmoji: { fontSize: 56, marginBottom: 12 },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: '#fff', marginBottom: 8 },
  emptyText: { color: COLORS.textMuted, textAlign: 'center', lineHeight: 20, fontSize: 13, marginBottom: 24 },
  startBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md, paddingVertical: 14, paddingHorizontal: 32,
  },
  startBtnText: { color: COLORS.textDark, fontWeight: '800', fontSize: 15 },
});
