// 브랜드 디자인 토큰 (Power BI / SAP Analytics Cloud 스타일)
export const COLORS = {
  purple:  '#6B3FA0', // 메인 강조
  purpleSoft: '#EDE7F5',
  mint:    '#00B3A4', // 보조
  mintSoft:'#E0F5F3',
  red:     '#E84040', // 경고
  redSoft: '#FCE7E7',
  amber:   '#E0A020', // 주의
  amberSoft:'#FBF1DD',
  bg:      '#FFFFFF',
  text:    '#1E1E2E',
  textSub: '#6B6B7B',
  divider: '#F4F5F8',
  border:  '#E3E4EA',
  grid:    '#EEF0F4',
};

export const promoTheme = {
  china:   { key: 'china',   label: '중국 하계',      color: COLORS.purple },
  sea:     { key: 'sea',     label: '동남아 Q속성',   color: COLORS.mint },
  hapoday: { key: 'hapoday', label: '하포데이',       color: COLORS.amber },
};

export function statusColor(rate) {
  if (rate >= 90) return COLORS.mint;
  if (rate >= 60) return COLORS.purple;
  return COLORS.red;
}
