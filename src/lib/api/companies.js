import { protectedFetch,serverFetch } from "../core/server";
import { getUserSession } from "../core/session";


export const getCompanies = async () => {
    return protectedFetch(`/api/companies`);
}


export const getRecruiterCompany = async (recruiterId) => {
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}

export const getLoggedInRecruiterCompany = async () => {
    const user = await getUserSession();
     console.log("user session:", user);
    return getRecruiterCompany(user?.id);
  console.log("company result:", result); 
    return result;
}


