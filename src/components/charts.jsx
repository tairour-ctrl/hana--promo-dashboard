import React from 'react'
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar, ComposedChart,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend as RLegend
} from 'recharts'
import { COLORS } from '../theme.js'
import { ChartTooltip } from './common.jsx'

const axis = { fontSize:11, fill:COLORS.textSub }
const grid = { stroke:COLORS.grid, vertical:false }

export function TrendLines({ data, series, height=200, unit='' }){
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{top:6,right:12,left:-8,bottom:0}}>
        <CartesianGrid {...grid}/>
        <XAxis dataKey="m" tick={axis} axisLine={{stroke:COLORS.border}} tickLine={false}/>
        <YAxis tick={axis} axisLine={false} tickLine={false} width={44}/>
        <Tooltip content={<ChartTooltip unit={unit}/>}/>
        <RLegend wrapperStyle={{fontSize:11}} iconType="plainline"/>
        {series.map(s => (
          <Line key={s.key} type="monotone" dataKey={s.key} name={s.name}
                stroke={s.color} strokeWidth={2} dot={false} activeDot={{r:4}}/>
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

export function DeptCombo({ data, height=220 }){
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart data={data} margin={{top:8,right:12,left:-8,bottom:0}}>
        <CartesianGrid {...grid}/>
        <XAxis dataKey="dept" tick={axis} axisLine={{stroke:COLORS.border}} tickLine={false}/>
        <YAxis yAxisId="l" tick={axis} axisLine={false} tickLine={false} width={46}/>
        <YAxis yAxisId="r" orientation="right" tick={axis} axisLine={false} tickLine={false} width={46}/>
        <Tooltip content={<ChartTooltip/>}/>
        <RLegend wrapperStyle={{fontSize:11}}/>
        <Bar yAxisId="l" dataKey="head" name="인원(명)" fill={COLORS.purple} radius={[3,3,0,0]} barSize={30}/>
        <Line yAxisId="r" type="monotone" dataKey="rev" name="매출(백만원)" stroke={COLORS.mint} strokeWidth={2} dot={{r:3}}/>
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export function PayoutBars({ data, height=220 }){
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{top:8,right:12,left:-8,bottom:0}}>
        <CartesianGrid {...grid}/>
        <XAxis dataKey="team" tick={{...axis,fontSize:10}} axisLine={{stroke:COLORS.border}} tickLine={false} interval={0} angle={-12} dy={8} height={38}/>
        <YAxis tick={axis} axisLine={false} tickLine={false} width={44}/>
        <Tooltip content={<ChartTooltip unit="건"/>}/>
        <Bar dataKey="payouts" name="지급건수" fill={COLORS.mint} radius={[3,3,0,0]} barSize={26}/>
      </BarChart>
    </ResponsiveContainer>
  )
}
