import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/lib/core/session';
import { getRecruiterCompany } from '@/lib/api/companies';

const CompanyPage = async () => {vxzzxcx

    const user = await ge tUserSession();
    const company = await getRecruiterCompany(user?.id);

    return (
        <div>
            <CompanyProfile       recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default CompanyPage;