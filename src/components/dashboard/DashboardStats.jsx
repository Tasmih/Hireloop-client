"use client";

import { StatCard } from "./StatCard";

export default function DashboardStats({ stats }) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
    </div>
  );
}