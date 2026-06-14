import React from 'react';

import { Button, Link } from '@heroui/react';
import { MapPin, Briefcase, CircleDollar, Calendar, ArrowUpRight } from '@gravity-ui/icons';
import { getJobById } from '@/lib/api/jobs';

const Page = async ({ params }) => {
    const { id } = await params;
    const job = await getJobById(id);

    if (!job) {
        return (
            <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
                <p className="text-zinc-400 text-lg">Job position could not be found or is no longer active.</p>
            </div>
        );
    }

    const formatSalary = (amount) => {
        if (!amount) return "0";
        const num = parseInt(amount, 10);
        return num >= 1000 ? `${(num / 1000).toLocaleString()}k` : amount;
    };

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    const location = job.remote ? "Remote" : `${job.city || ""}${job.city && job.country ? ", " : ""}${job.country || ""}`;

    return (
        <main className="w-full min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            {job.companyLogo && (
                                <img
                                    src={job.companyLogo}
                                    alt={`${job.companyName} logo`}
                                    className="w-14 h-14 object-contain bg-zinc-900 border border-zinc-800 p-2 rounded-xl"
                                />
                            )}
                            <div>
                                <h2 className="text-xl font-medium text-zinc-300">{job.companyName}</h2>
                                <p className="text-sm text-zinc-500 capitalize">{job.category} Role</p>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            {job.title}
                        </h1>
                    </div>

                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">Core Responsibilities</h3>
                        <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line">
                            {job.responsibilities || "No responsibilities specified."}
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">Requirements & Credentials</h3>
                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5">
                            <p className="text-zinc-300 text-base leading-relaxed">
                                {job.requirements || "Standard industry standards apply."}
                            </p>
                        </div>
                    </section>

                    {job.benefits && (
                        <section className="space-y-3">
                            <h3 className="text-xl font-semibold text-white">Benefits & Perks</h3>
                            <p className="text-zinc-300 text-base leading-relaxed">{job.benefits}</p>
                        </section>
                    )}
                </div>

                <aside className="bg-zinc-900 border border-zinc-800/80 rounded-[32px] p-6 lg:sticky lg:top-8 space-y-6 shadow-xl">
                    <h3 className="text-lg font-semibold text-white">Job Overview</h3>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Location</span>
                                <span className="text-sm font-medium text-zinc-200">
                                    {location}
                                    {job.remote && <span className="text-purple-400 text-xs ml-1">(Remote)</span>}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Briefcase className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Job Type</span>
                                <span className="text-sm font-medium text-zinc-200 capitalize">{job.type}</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <CircleDollar className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Salary Range</span>
                                <span className="text-sm font-medium text-zinc-200">
                                    {job.salaryMin && job.salaryMax
                                        ? `${job.currency || "$"}${formatSalary(job.salaryMin)} – ${formatSalary(job.salaryMax)} / year`
                                        : "Competitive Salary"}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Calendar className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Application Deadline</span>
                                <span className="text-sm font-medium text-zinc-200">{formatDate(job.deadline)}</span>
                            </div>
                        </div>
                    </div>

                    <Link href={`/jobs/${id}/apply`} className="w-full">
    <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
        Apply For This Job
        <ArrowUpRight className="w-4 h-4" />
    </Button>
</Link>
                </aside>
            </div>
        </main>
    );
};

export default Page;