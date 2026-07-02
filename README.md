# 하나투어 프로모션 통합 운영 Dashboard

영업전략팀 운영용 BI Dashboard (React + Vite + Recharts)

## 실행
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 프로덕션 빌드
```

## 페이지
- `/`         Executive Dashboard (프로모션 카드 · 추이 · 팀순위 · Alert)
- `/china`    중국 하계 상세
- `/sea`      동남아 Q속성 상세
- `/hapoday`  하포데이 상세

## 구조
```
src/
  theme.js              브랜드 컬러 토큰
  styles.css            전역 스타일 (Power BI 스타일)
  data/mockData.js      운영 예시 데이터 (실 연동 전)
  components/
    Layout.jsx          헤더 · 탭 · 필터바
    common.jsx          Card / Kpi / RankTable / Tooltip
    charts.jsx          TrendLines / DeptCombo / PayoutBars (Recharts)
    panels.jsx          PromoCard / AlertPanel / TeamRateBars
  pages/                4개 페이지
```

## 브랜드 컬러
- Purple #6B3FA0 (메인) · Mint #00B3A4 (보조) · Red #E84040 (경고) · Amber #E0A020 (주의)

## 데이터 연동
`src/data/mockData.js` 를 실제 API 응답으로 교체하면 됩니다.
필터바(`Layout.jsx`)의 select 값을 상태로 끌어올려 API 쿼리 파라미터로 전달하세요.
