"use client"
import DashboardStats from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import { FileText, Users, XCircle, Zap } from 'lucide-react';
import React from 'react';
import RecentApplications from "@/components/dashboard/RecentApplications";
import TopCompanies from "@/components/dashboard/TopCompanies";

const recruiterStats = [
  { icon: FileText, title: "Total Job Posts", value: 48 },
  { icon: Users, title: "Total Applicants", value: 1284 },
  { icon: Zap, title: "Active Jobs", value: 18 },
  { icon: XCircle, title: "Jobs Closed", value: 32 },
];

const RecruiterDashboardHomePage = () => {
    const {data: session, isPending} = useSession();

    if (isPending) return <div>loading...</div>;

    const user = session?.user;

    return (
        <div>
            <h2 className='text-2xl font-bold'>Welcome back, {user?.name}</h2>
            <DashboardStats stats={recruiterStats} />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6">
            <RecentApplications />
             <TopCompanies />
            </div>
            {/* <button className="fixed bottom-6 right-6 w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-full flex items-center justify-center text-white text-2xl transition-colors">
  +
</button> */}
<div className="flex justify-end mt-6">
  <button className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-full flex items-center justify-center text-white text-2xl transition-colors">
    +
  </button>
</div>
        </div>
        
    );
};

export default RecruiterDashboardHomePage;