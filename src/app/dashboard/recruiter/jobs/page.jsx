import JobsTable from '@/components/dashboard/JobsTable';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';

const RecruiterJobs =async () => {
      const company = await getLoggedInRecruiterCompany();
    const jobs = await getCompanyJobs(company._id) || []; 

    // Helper to determine status chip coloring
    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'success';
            case 'inactive':
                return 'danger';
            default:
                return 'warning';
        }
    };
    console.log("jobs for company",jobs)
    return (
        <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white">Manage Jobs</h2>
      <JobsTable jobs={jobs} />
    </div>
    );
};

export default RecruiterJobs;