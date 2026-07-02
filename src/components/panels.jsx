import React from 'react'
import { COLORS, statusColor } from '../theme.js'

// 팀별 목표 달성률 바 (기준선 60% 표시)
export function TeamRateBars({ data, baseline=60 }){
  const max = Math.max(120, ...data.map(d=>d.rate))
  return (
    <div>
      {data.map(d => (
        <div className="rate-row" key={d.team}>
          <div className="rt-team">{d.team}</div>
          <div className="rt-bar">
            <span style={{width:(d.rate/max*100)+'%', background:statusColor(d.rate)}}/>
            <i className="baseline" style={{left:(baseline/max*100)+'%'}}/>
          </div>
          <div className="rt-val" style={{color:statusColor(d.rate)}}>{d.rate}%</div>
        </div>
      ))}
      <div style={{fontSize:10,color:COLORS.textSub,marginTop:6}}>
        <span style={{display:'inline-block',width:8,height:2,background:COLORS.red,verticalAlign:'middle',marginRight:5}}/>
        기준선 {baseline}% · 미달 팀은 적색 표시
      </div>
    </div>
  )
}

const levelLabel = { critical:'경고', warning:'주의', info:'정보' }

export function AlertPanel({ alerts }){
  return (
    <div>
      {alerts.map((a,i) => (
        <div className="alert-item" key={i}>
          <span className={'alert-dot '+a.level}/>
          <div className="alert-body">
            <div className="alert-title">
              <span>{a.title}</span>
              <span className={'abadge '+a.level}>{levelLabel[a.level]}</span>
            </div>
            <div className="alert-desc">{a.desc}</div>
            <div className="alert-time">{a.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Executive 프로모션 카드 (클릭 이동)
export function PromoCard({ name, color, metrics, rate, payout, onClick }){
  return (
    <div className="promo" onClick={onClick}>
      <div className="p-top">
        <span className="p-name">{name}</span>
        <span className="p-go">상세 보기 &rsaquo;</span>
      </div>
      <div className="p-metrics">
        {metrics.map(m => (
          <div className="metric" key={m.label}>
            <div className="m-label">{m.label}</div>
            <div className="m-value" style={m.accent?{color}:null}>{m.value}</div>
          </div>
        ))}
      </div>
      {typeof rate === 'number' ? (
        <>
          <div className="progress"><span style={{width:Math.min(rate,100)+'%',background:color}}/></div>
          <div className="p-rate"><span>인원 달성률</span><b style={{color}}>{rate}%</b></div>
        </>
      ) : (
        <div className="p-rate" style={{marginTop:2}}>
          <span>혜택 지급 대상</span><b style={{color}}>{payout}</b>
        </div>
      )}
    </div>
  )
}
