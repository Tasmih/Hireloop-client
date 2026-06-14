"use client";

import { Card } from "@heroui/react";

export const StatCard = ({ title, value, icon: Icon, className = "" }) => {
  return (
    <Card
      className={`bg-[#18181b] border border-zinc-800 rounded-2xl p-2 ${className}`}
    >
      <Card.Content className="flex flex-col gap-6 justify-between p-4">

        {/* Icon Wrapper */}
        {Icon && (
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800">
            <Icon width={20} height={20} className="text-zinc-300" />
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-zinc-500">{title}</span>
          <span className="text-2xl font-bold text-white">{value.toLocaleString()}</span>
        </div>

      </Card.Content>
    </Card>
  );
};