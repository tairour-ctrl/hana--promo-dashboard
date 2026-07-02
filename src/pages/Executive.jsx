import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, RankTable } from '../components/common.jsx'
import { TrendLines } from '../components/charts.jsx'
import { PromoCard, AlertPanel } from '../components/panels.jsx'
import { COLORS } from '../theme.js'
import { promoCards, headcountTrend, revenueTrend, execRanking, alerts } from '../data/mockData.js'

const won = n => n.toLocaleString()
const rate = (c,t) => Math.round(c/t*1000)/10

export default function Executive(){
  const nav = useNavigate()
  const [seg, setSeg] = useState('china')

  const c = promoCards.china, s = promoCards.sea, h = promoCards.hapoday

  const rankCols = seg === 'sea'
    ? [{key:'team',label:'팀'},{key:'payouts',label:'지급건수',num:true,fmt:v=>v.toLocaleString()+'건'}]
    : [{key:'team',label:'팀'},
       {key:'head',label:'인원',num:true,fmt:v=>v.toLocaleString()+'명'},
       {key:'rev',label:'매출(백만)',num:true,fmt:v=>v.toLocaleString()}]

  const lineSeries = [
    {key:'china',name:'중국 하계',color:COLORS.purple},
    {key:'sea',name:'동남아 Q속성',color:COLORS.mint},
    {key:'hapoday',name:'하포데이',color:COLORS.amber},
  ]

  return (
    <div className="page">
      {/* 1영역: 프로모션 카드 */}
      <div className="section-title"><span className="bar"/>프로모션 현황</div>
      <div className="row" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
        <PromoCard name="중국 하계" color={COLORS.purple}
          metrics={[
            {label:'목표 인원',value:won(c.target)+'명'},
            {label:'현재 인원',value:won(c.current)+'명',accent:true},
          ]}
          rate={rate(c.current,c.target)} onClick={()=>nav('/china')}/>
        <PromoCard name="동남아 Q속성" color={COLORS.mint}
          metrics={[
            {label:'혜택 지급 대상 건수',value:won(s.payouts)+'건',accent:true},
          ]}
          payout={won(s.payouts)+'건'} onClick={()=>nav('/sea')}/>
        <PromoCard name="하포데이" color={COLORS.amber}
          metrics={[
            {label:'목표 인원',value:won(h.target)+'명'},
            {label:'현재 인원',value:won(h.current)+'명',accent:true},
          ]}
          rate={rate(h.current,h.target)} onClick={()=>nav('/hapoday')}/>
      </div>

      {/* 2영역: 추이 */}
      <div className="row" style={{gridTemplateColumns:'1fr 1fr'}}>
        <Card title="프로모션별 인원 추이" hint="단위: 명">
          <TrendLines data={headcountTrend} series={lineSeries} unit="명"/>
        </Card>
        <Card title="프로모션별 매출 추이" hint="단위: 백만원">
          <TrendLines data={revenueTrend} series={lineSeries} unit=""/>
        </Card>
      </div>

      {/* 3영역: 순위 + 알림 */}
      <div className="row" style={{gridTemplateColumns:'1.4fr 1fr'}}>
        <Card title="프로모션별 팀 순위"
          right={
            <div className="rank-seg">
              {[['china','중국'],['sea','동남아'],['hapoday','하포데이']].map(([k,l])=>(
                <button key={k} className={seg===k?'active':''} onClick={()=>setSeg(k)}>{l}</button>
              ))}
            </div>}>
          <RankTable rows={execRanking[seg]} columns={rankCols}/>
        </Card>
        <Card title="운영 알림" hint="Alert Panel">
          <AlertPanel alerts={alerts}/>
        </Card>
      </div>
    </div>
  )
}
