import React from 'react'
import { Card, Kpi, RankTable } from '../components/common.jsx'
import { TrendLines, DeptCombo } from '../components/charts.jsx'
import { TeamRateBars } from '../components/panels.jsx'
import { COLORS } from '../theme.js'
import { chinaDetail as d } from '../data/mockData.js'

const t3 = [
  {key:'t1',name:'1부 2팀',color:COLORS.purple},
  {key:'t2',name:'2부 1팀',color:COLORS.mint},
  {key:'t3',name:'온라인 3팀',color:COLORS.amber},
]
const teamCols=[{key:'name',label:'팀'},{key:'head',label:'인원',num:true,fmt:v=>v.toLocaleString()+'명'},{key:'rev',label:'매출(백만)',num:true,fmt:v=>v.toLocaleString()}]
const agyCols =[{key:'name',label:'대리점'},{key:'head',label:'인원',num:true,fmt:v=>v.toLocaleString()+'명'},{key:'rev',label:'매출(백만)',num:true,fmt:v=>v.toLocaleString()}]
const salCols =[{key:'name',label:'세일즈'},{key:'head',label:'인원',num:true,fmt:v=>v.toLocaleString()+'명'},{key:'rev',label:'매출(백만)',num:true,fmt:v=>v.toLocaleString()}]

export default function ChinaDetail(){
  return (
    <div className="page">
      <div className="section-title"><span className="bar"/>중국 하계 · 핵심 지표</div>
      <div className="row" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
        {d.kpi.map(k=><Kpi key={k.label} {...k}/>)}
      </div>

      <div className="row" style={{gridTemplateColumns:'1.1fr 1fr'}}>
        <Card title="팀별 목표 달성률" hint="기준 60%"><TeamRateBars data={d.teamRate}/></Card>
        <Card title="부서별 인원·매출" hint="막대: 인원 / 선: 매출"><DeptCombo data={d.deptMix}/></Card>
      </div>

      <div className="row" style={{gridTemplateColumns:'1fr 1fr'}}>
        <Card title="팀별 인원 추이" hint="단위: 명"><TrendLines data={d.headTrend} series={t3} unit="명"/></Card>
        <Card title="팀별 매출 추이" hint="단위: 백만원"><TrendLines data={d.revTrend} series={t3}/></Card>
      </div>

      <div className="section-title"><span className="bar"/>순위</div>
      <div className="row" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
        <Card title="팀 순위"><RankTable rows={d.teamRank} columns={teamCols}/></Card>
        <Card title="대리점 순위"><RankTable rows={d.agencyRank} columns={agyCols}/></Card>
        <Card title="세일즈 순위"><RankTable rows={d.salesRank} columns={salCols}/></Card>
      </div>
    </div>
  )
}
