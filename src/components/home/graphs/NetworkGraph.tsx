import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useNetworkData } from '../../../hooks/useNetworkData';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-800/95 border border-gold-500/20 rounded-lg p-2 shadow-lg backdrop-blur-sm">
        <p className="text-gold-500 text-sm font-medium">
          {payload[0].payload.network}
        </p>
      </div>
    );
  }
  return null;
};

export function NetworkGraph() {
  const { networkData } = useNetworkData();

  return (
    <div className="w-full h-[280px] flex flex-col p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gold-500 text-sm font-medium">
          Cards Per Network
        </h3>
        <span className="text-xs text-gold-500/40">
          *Relative distribution
        </span>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={networkData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            barGap={8}
          >
            <XAxis
              dataKey="network"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#D4B788', fontSize: 12, opacity: 0.8 }}
            />
            <Tooltip
              content={CustomTooltip}
              cursor={{ fill: 'rgba(212, 183, 136, 0.1)' }}
            />
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
              animationDuration={1500}
              animationBegin={200}
            />
            <defs>
              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#D4B788"
                  stopOpacity={0.9}
                />
                <stop
                  offset="100%"
                  stopColor="#B69B74"
                  stopOpacity={0.7}
                />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}