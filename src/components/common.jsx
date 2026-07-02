import React from 'react'
import { COLORS } from '../theme.js'

export function Card({ title, hint, right, children, style }){
  return (
    <div className="card" style={style}>
      {(title || right) && (
        <div className="card-head">
          <h3>{title}</h3>
          {right ? right : (hint && <span className="hint">{hint}</span>)}
        </div>
      )}
      {children}
    </div>
  )
}

export function Kpi({ label, value, sub, tone }){
  return (
    <div className={'kpi ' + (tone||'')}>
      <div className="k-label">{label}</div>
      <div className="k-value">{value}</div>
      <div className="k-sub">{sub}</div>
    </div>
  )
}

export function Legend({ items }){
  return (
    <div className="legend">
      {items.map(it => (
        <span key={it.label}><i style={{background:it.color}}></i>{it.label}</span>
      ))}
    </div>
  )
}

const fmt = n => (typeof n === 'number' ? n.toLocaleString() : n)

export function ChartTooltip({ active, payload, label, unit }){
  if(!active || !payload || !payload.length) return null
  return (
    <div className="tt">
      <div style={{fontWeight:700,marginBottom:4}}>{label}</div>
      {payload.map(p => (
        <div className="tt-row" key={p.dataKey}>
          <span style={{color:p.color}}>{p.name}</span>
          <b>{fmt(p.value)}{unit||''}</b>
        </div>
      ))}
    </div>
  )
}

export function RankBadge({ rank }){
  return <span className={'rankbadge r'+rank}>{rank}</span>
}

// 순위 테이블: columns = [{key,label,num,fmt}]
export function RankTable({ rows, columns }){
  return (
    <table className="rank">
      <thead>
        <tr>
          <th style={{width:34}}>#</th>
          {columns.map(c => <th key={c.key} className={c.num?'num':''}>{c.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.rank}>
            <td><RankBadge rank={r.rank}/></td>
            {columns.map(c => (
              <td key={c.key} className={c.num?'num':''}>
                {c.fmt ? c.fmt(r[c.key]) : r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
