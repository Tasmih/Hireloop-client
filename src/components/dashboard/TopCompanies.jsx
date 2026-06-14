// components/dashboard/TopCompanies.jsx
"use client";

import { Card } from "@heroui/react";

const companies = [
  { name: "Google Inc.", category: "Technology", location: "Mountain View", activeJobs: 24 },
  { name: "Meta Platforms", category: "Social Media", location: "Menlo Park", activeJobs: 18 },
  { name: "Stripe", category: "Fintech", location: "San Francisco", activeJobs: 12 },
  { name: "Tesla", category: "Automotive", location: "Austin", activeJobs: 31 },
];

export default function TopCompanies() {
  return (
    <Card variant="secondary" className="rounded-2xl">
      <Card.Content className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">My Top Companies</h3>
          <button className="text-xs text-zinc-400 hover:text-white transition-colors">View all</button>
        </div>

        <div className="flex flex-col gap-3">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-700 shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-white font-medium">{company.name}</p>
                <p className="text-xs text-zinc-500">{company.category} • {company.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white font-bold">{company.activeJobs}</p>
                <p className="text-xs text-zinc-500">ACTIVE JOBS</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full border border-white/10 rounded-xl py-2.5 text-sm text-zinc-300 hover:bg-white/5 transition-colors">
          View All Companies
        </button>
      </Card.Content>
    </Card>
  );
}