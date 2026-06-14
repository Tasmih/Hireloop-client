const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <DashboardSidebar />
            <main className='flex-1 p-6'>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;