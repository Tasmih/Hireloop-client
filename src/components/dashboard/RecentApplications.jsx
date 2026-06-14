
"use client";

import { Card } from "@heroui/react";

const applications = [
  { name: "Julianne Moore", role: "Senior Product Designer", date: "Oct 24, 2023", experience: "6 years", status: "Interviewing" },
  { name: "Robert Downey", role: "Backend Engineer", date: "Oct 23, 2023", experience: "4 years", status: "New" },
  { name: "Emma Stone", role: "Marketing Lead", date: "Oct 22, 2023", experience: "8 years", status: "Reviewing" },
  { name: "Chris Pratt", role: "Product Manager", date: "Oct 21, 2023", experience: "5 years", status: "Rejected" },
];

const statusStyles = {
  Interviewing: "bg-green-500/20 text-green-400",
  New: "bg-zinc-500/20 text-zinc-300",
  Reviewing: "bg-yellow-500/20 text-yellow-400",
  Rejected: "bg-red-500/20 text-red-400",
};

export default function RecentApplications() {
  return (
    <Card variant="secondary" className="rounded-2xl">
      <Card.Content className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Recent Applications</h3>
          <button className="text-xs text-zinc-400 hover:text-white transition-colors">View all</button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-xs text-zinc-500 border-b border-white/10">
              <th className="text-left pb-3 font-medium">Candidate Name</th>
              <th className="text-left pb-3 font-medium">Role</th>
              <th className="text-left pb-3 font-medium">Date Applied</th>
              <th className="text-left pb-3 font-medium">Experience</th>
              <th className="text-left pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.name} className="border-b border-white/5 last:border-0">
                <td className="py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 shrink-0" />
                  <span className="text-sm text-white font-medium">{app.name}</span>
                </td>
                <td className="py-3 text-sm text-zinc-400">{app.role}</td>
                <td className="py-3 text-sm text-zinc-400">{app.date}</td>
                <td className="py-3 text-sm text-zinc-400">{app.experience}</td>
                <td className="py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[app.status]}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Content>
    </Card>
  );
}