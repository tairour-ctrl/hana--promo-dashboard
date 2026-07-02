import React from 'react'
import { NavLink } from 'react-router-dom'
import { filters, LAST_UPDATED } from '../data/mockData.js'

const TABS = [
  { to:'/', label:'Executive Dashboard', end:true },
  { to:'/china', label:'중국 하계 상세' },
  { to:'/sea', label:'동남아 Q속성 상세' },
  { to:'/hapoday', label:'하포데이 상세' },
]

function Field({ label, options }){
  return (
    <div className="field">
      <label>{label}</label>
      <select defaultValue={options[0]}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}

export function FilterBar(){
  return (
    <div className="filterbar">
      <Field label="프로모션" options={filters.promotion}/>
      <Field label="사업부"  options={filters.division}/>
      <Field label="영업부"  options={filters.salesDept}/>
      <Field label="영업팀"  options={filters.salesTeam}/>
      <Field label="기간"    options={filters.period}/>
      <button className="filter-reset">초기화</button>
      <button className="filter-apply">적용</button>
    </div>
  )
}

export function Layout({ children }){
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="dot">H</span>
          <div>하나투어 프로모션 통합 운영 Dashboard<br/>
            <small>영업전략팀 · 운영 모니터링</small>
          </div>
        </div>
        <div className="spacer"/>
        <div className="updated">데이터 기준 <b>{LAST_UPDATED}</b> · 10분 주기 갱신</div>
      </header>
      <nav className="tabs">
        {TABS.map(t => (
          <NavLink key={t.to} to={t.to} end={t.end}
            className={({isActive}) => 'tab' + (isActive?' active':'')}>
            {t.label}
          </NavLink>
        ))}
      </nav>
      <FilterBar/>
      {children}
    </div>
  )
}
