// 운영 예시 데이터 (실 데이터 연동 전 목업)
export const LAST_UPDATED = '2026-07-02 09:15';

export const filters = {
  promotion: ['전체', '중국 하계', '동남아 Q속성', '하포데이'],
  division:  ['전체', '패키지사업부', '항공사업부', '자유여행사업부'],
  salesDept: ['전체', '국내영업1부', '국내영업2부', '온라인영업부'],
  salesTeam: ['전체', '1팀', '2팀', '3팀', '4팀'],
  period:    ['최근 7일', '최근 30일', '2026 상반기', '사용자 지정'],
};

// Executive 카드
export const promoCards = {
  china:   { label: '중국 하계',    target: 12000, current: 10380, unit: '명' },
  sea:     { label: '동남아 Q속성', payouts: 4820, unit: '건' },
  hapoday: { label: '하포데이',     target: 8000,  current: 6112,  unit: '명' },
};

// 추이 (월별)
export const trendMonths = ['1월','2월','3월','4월','5월','6월'];
export const headcountTrend = [
  { m:'1월', china: 980,  sea: 620,  hapoday: 540 },
  { m:'2월', china: 1420, sea: 710,  hapoday: 690 },
  { m:'3월', china: 1810, sea: 880,  hapoday: 910 },
  { m:'4월', china: 2260, sea: 1040, hapoday: 1180 },
  { m:'5월', china: 2140, sea: 1180, hapoday: 1360 },
  { m:'6월', china: 1770, sea: 1390, hapoday: 1432 },
];
export const revenueTrend = [ // 단위 백만원
  { m:'1월', china: 1180, sea: 640,  hapoday: 520 },
  { m:'2월', china: 1720, sea: 760,  hapoday: 680 },
  { m:'3월', china: 2240, sea: 980,  hapoday: 940 },
  { m:'4월', china: 2810, sea: 1180, hapoday: 1260 },
  { m:'5월', china: 2660, sea: 1360, hapoday: 1470 },
  { m:'6월', china: 2210, sea: 1620, hapoday: 1540 },
];

// Executive 팀 순위 (프로모션별)
export const execRanking = {
  china: [
    { rank:1, team:'국내영업1부 2팀', head:2140, rev:4820 },
    { rank:2, team:'국내영업2부 1팀', head:1980, rev:4310 },
    { rank:3, team:'온라인영업부 3팀', head:1620, rev:3560 },
    { rank:4, team:'국내영업1부 4팀', head:1410, rev:3120 },
    { rank:5, team:'국내영업2부 3팀', head:1180, rev:2640 },
  ],
  sea: [
    { rank:1, team:'온라인영업부 1팀', payouts:1120 },
    { rank:2, team:'국내영업1부 3팀', payouts:940 },
    { rank:3, team:'국내영업2부 2팀', payouts:810 },
    { rank:4, team:'국내영업1부 1팀', payouts:690 },
    { rank:5, team:'온라인영업부 4팀', payouts:540 },
  ],
  hapoday: [
    { rank:1, team:'국내영업2부 1팀', head:1360, rev:3210 },
    { rank:2, team:'국내영업1부 2팀', head:1180, rev:2740 },
    { rank:3, team:'온라인영업부 2팀', head:1020, rev:2380 },
    { rank:4, team:'국내영업1부 3팀', head:880,  rev:1990 },
    { rank:5, team:'국내영업2부 4팀', head:672,  rev:1540 },
  ],
};

export const alerts = [
  { level:'critical', title:'실적 급감',        desc:'동남아 Q속성 · 온라인영업부 4팀 지급건수 전주 대비 -38%', time:'08:40' },
  { level:'critical', title:'목표 달성률 저조', desc:'하포데이 · 국내영업2부 4팀 달성률 52% (기준 60% 미달)', time:'08:12' },
  { level:'warning',  title:'예산 사용률 경고', desc:'중국 하계 · 프로모션 예산 88% 소진 (잔여 12%)', time:'07:55' },
  { level:'warning',  title:'전환율 하락',      desc:'하포데이 · 상세→결제 전환율 3주 연속 하락', time:'어제' },
  { level:'info',     title:'목표 조기 달성',   desc:'중국 하계 · 국내영업1부 2팀 목표 인원 108% 달성', time:'어제' },
];

// ---- 상세 페이지 공통 생성기 ----
function teamRows(base, promo) {
  return base;
}

export const chinaDetail = {
  kpi: [
    { label:'목표 인원', value:'12,000명', sub:'상반기 목표' },
    { label:'현재 인원', value:'10,380명', sub:'+1,240 전월비', tone:'purple' },
    { label:'인원 달성률', value:'86.5%', sub:'기준 90% 근접', tone:'purple' },
    { label:'누적 매출', value:'132.2억', sub:'+9.4% 전월비', tone:'mint' },
  ],
  teamRate: [
    { team:'1부 1팀', rate:94 }, { team:'1부 2팀', rate:108 },
    { team:'1부 4팀', rate:81 }, { team:'2부 1팀', rate:97 },
    { team:'2부 3팀', rate:72 }, { team:'온라인 3팀', rate:88 },
    { team:'온라인 4팀', rate:54 },
  ],
  headTrend: [
    { m:'1월', t1:210,t2:180,t3:140 },{ m:'2월', t1:320,t2:260,t3:210 },
    { m:'3월', t1:410,t2:360,t3:280 },{ m:'4월', t1:520,t2:470,t3:360 },
    { m:'5월', t1:560,t2:520,t3:420 },{ m:'6월', t1:610,t2:580,t3:470 },
  ],
  revTrend: [
    { m:'1월', t1:260,t2:220,t3:170 },{ m:'2월', t1:410,t2:330,t3:260 },
    { m:'3월', t1:540,t2:460,t3:360 },{ m:'4월', t1:680,t2:600,t3:470 },
    { m:'5월', t1:720,t2:660,t3:540 },{ m:'6월', t1:790,t2:720,t3:610 },
  ],
  deptMix: [
    { dept:'패키지사업부', head:5820, rev:7240 },
    { dept:'항공사업부',   head:2610, rev:3180 },
    { dept:'자유여행사업부', head:1950, rev:2800 },
  ],
  teamRank: [
    { rank:1, name:'국내영업1부 2팀', head:2140, rev:4820 },
    { rank:2, name:'국내영업2부 1팀', head:1980, rev:4310 },
    { rank:3, name:'온라인영업부 3팀', head:1620, rev:3560 },
    { rank:4, name:'국내영업1부 4팀', head:1410, rev:3120 },
    { rank:5, name:'국내영업2부 3팀', head:1180, rev:2640 },
  ],
  agencyRank: [
    { rank:1, name:'강남센터점', head:1240, rev:2810 },
    { rank:2, name:'분당정자점', head:1080, rev:2440 },
    { rank:3, name:'해운대점',   head:920,  rev:2110 },
    { rank:4, name:'광화문점',   head:810,  rev:1870 },
    { rank:5, name:'대전둔산점', head:690,  rev:1560 },
  ],
  salesRank: [
    { rank:1, name:'김도현', head:412, rev:980 },
    { rank:2, name:'이서연', head:388, rev:910 },
    { rank:3, name:'박준영', head:356, rev:840 },
    { rank:4, name:'최민지', head:321, rev:770 },
    { rank:5, name:'정하늘', head:298, rev:710 },
  ],
};

export const seaDetail = {
  kpi: [
    { label:'혜택 지급 대상', value:'4,820건', sub:'누적 지급건수', tone:'mint' },
    { label:'금주 지급', value:'640건', sub:'+82 전주비', tone:'mint' },
    { label:'평균 처리일', value:'1.8일', sub:'-0.3일 개선' },
    { label:'지급 예산 소진', value:'71%', sub:'잔여 29%' },
  ],
  teamPayout: [
    { team:'온라인 1팀', payouts:1120 },{ team:'1부 3팀', payouts:940 },
    { team:'2부 2팀', payouts:810 },{ team:'1부 1팀', payouts:690 },
    { team:'온라인 4팀', payouts:540 },{ team:'2부 4팀', payouts:420 },
    { team:'1부 2팀', payouts:300 },
  ],
  headTrend: [
    { m:'1월', t1:120,t2:90,t3:70 },{ m:'2월', t1:180,t2:140,t3:110 },
    { m:'3월', t1:240,t2:190,t3:150 },{ m:'4월', t1:310,t2:250,t3:200 },
    { m:'5월', t1:360,t2:300,t3:250 },{ m:'6월', t1:420,t2:360,t3:300 },
  ],
  revTrend: [
    { m:'1월', t1:140,t2:100,t3:80 },{ m:'2월', t1:210,t2:160,t3:120 },
    { m:'3월', t1:280,t2:220,t3:170 },{ m:'4월', t1:360,t2:290,t3:230 },
    { m:'5월', t1:430,t2:350,t3:290 },{ m:'6월', t1:510,t2:420,t3:350 },
  ],
  deptMix: [
    { dept:'자유여행사업부', head:2140, rev:2680 },
    { dept:'패키지사업부',   head:1580, rev:1940 },
    { dept:'항공사업부',     head:1100, rev:1360 },
  ],
  teamRank: [
    { rank:1, name:'온라인영업부 1팀', payouts:1120, rev:2680 },
    { rank:2, name:'국내영업1부 3팀', payouts:940, rev:2210 },
    { rank:3, name:'국내영업2부 2팀', payouts:810, rev:1890 },
    { rank:4, name:'국내영업1부 1팀', payouts:690, rev:1610 },
    { rank:5, name:'온라인영업부 4팀', payouts:540, rev:1260 },
  ],
  agencyRank: [
    { rank:1, name:'온라인 다이렉트', payouts:980, rev:2310 },
    { rank:2, name:'강남센터점', payouts:720, rev:1690 },
    { rank:3, name:'판교테크노점', payouts:610, rev:1440 },
    { rank:4, name:'서면점', payouts:520, rev:1220 },
    { rank:5, name:'일산라페스타점', payouts:440, rev:1030 },
  ],
  salesRank: [
    { rank:1, name:'한지우', payouts:312, rev:730 },
    { rank:2, name:'오세훈', payouts:288, rev:670 },
    { rank:3, name:'윤아름', payouts:264, rev:620 },
    { rank:4, name:'배성우', payouts:241, rev:560 },
    { rank:5, name:'문가영', payouts:218, rev:510 },
  ],
};

export const hapoDetail = {
  kpi: [
    { label:'목표 인원', value:'8,000명', sub:'캠페인 목표' },
    { label:'현재 인원', value:'6,112명', sub:'+820 전주비', tone:'purple' },
    { label:'인원 달성률', value:'76.4%', sub:'기준 90% 미달', tone:'amber' },
    { label:'누적 매출', value:'74.0억', sub:'+6.1% 전주비', tone:'mint' },
  ],
  headTrend: [
    { m:'1월', t1:180,t2:150,t3:120 },{ m:'2월', t1:240,t2:210,t3:170 },
    { m:'3월', t1:320,t2:280,t3:230 },{ m:'4월', t1:410,t2:360,t3:300 },
    { m:'5월', t1:470,t2:420,t3:360 },{ m:'6월', t1:520,t2:470,t3:410 },
  ],
  revTrend: [
    { m:'1월', t1:200,t2:170,t3:130 },{ m:'2월', t1:280,t2:240,t3:190 },
    { m:'3월', t1:380,t2:320,t3:260 },{ m:'4월', t1:480,t2:420,t3:340 },
    { m:'5월', t1:560,t2:490,t3:420 },{ m:'6월', t1:620,t2:550,t3:480 },
  ],
  deptMix: [
    { dept:'패키지사업부', head:3120, rev:3840 },
    { dept:'자유여행사업부', head:1780, rev:2210 },
    { dept:'항공사업부', head:1212, rev:1350 },
  ],
  teamRank: [
    { rank:1, name:'국내영업2부 1팀', head:1360, rev:3210 },
    { rank:2, name:'국내영업1부 2팀', head:1180, rev:2740 },
    { rank:3, name:'온라인영업부 2팀', head:1020, rev:2380 },
    { rank:4, name:'국내영업1부 3팀', head:880, rev:1990 },
    { rank:5, name:'국내영업2부 4팀', head:672, rev:1540 },
  ],
  agencyRank: [
    { rank:1, name:'분당정자점', head:940, rev:2210 },
    { rank:2, name:'강남센터점', head:820, rev:1940 },
    { rank:3, name:'광화문점', head:710, rev:1670 },
    { rank:4, name:'센텀시티점', head:620, rev:1450 },
    { rank:5, name:'대구동성로점', head:540, rev:1260 },
  ],
  salesRank: [
    { rank:1, name:'강태오', head:298, rev:700 },
    { rank:2, name:'서지안', head:274, rev:640 },
    { rank:3, name:'신유라', head:251, rev:590 },
    { rank:4, name:'홍은채', head:228, rev:540 },
    { rank:5, name:'권도윤', head:206, rev:490 },
  ],
};
