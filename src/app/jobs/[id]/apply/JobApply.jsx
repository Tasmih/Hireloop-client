'use client';

import { toast } from 'react-toastify';
import { Form, Button, TextField, Label, Input, Description, FieldError } from '@heroui/react';
import { ArrowRight, Link, FileText, LayoutHeaderCells } from '@gravity-ui/icons';
import { useState } from 'react';
import { submitApplication } from '@/lib/actions/applications';


const JobApply = ({job, applicant}) => {

    const [formData, setFormData] = useState({
        resumeLink: '',
        portfolioLink: '',
        additionalNotes: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionData = {
            jobId: job?._id,
            jobTitle: job?.Title,
            companyName: job?.companyName,
            applicantId: applicant?.id,
            applicantName: applicant?.name,
            applicantEmail: applicant?.email,
            status:'applied',
            ...formData
        };

        console.log('Submitting Application:', submissionData);

        const res = await submitApplication(submissionData);

        if (res.insertedId) {
           toast.success('Application submitted successfully!');
            setFormData({
                resumeLink: '',
                portfolioLink: '',
                additionalNotes: ''
            });
        }
    };


    return (
      <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">

            <div className="mb-6">

                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Application Form
                </span>

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
                    Apply for {job?.title || 'this position'}
                </h2>


                {applicant?.name && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        Applying as:
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {applicant.name}
                        </span>
                        ({applicant.email})
                    </p>
                )}

            </div>


            <hr className="border-zinc-200 dark:border-zinc-800 mb-6" />


            <Form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">


                <TextField isRequired name="resumeLink" className="w-full">

                    <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">

                        <FileText className="w-4 h-4 text-zinc-400" />

                        Resume Link

                    </Label>


                    <Input
                        type="url"
                        placeholder="https://drive.google.com/... or dropbox.com/..."
                        value={formData.resumeLink}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />


                    <Description className="text-xs text-zinc-400 mt-1">
                        Provide a public link to your resume
                    </Description>

                </TextField>




                <TextField name="portfolioLink" className="w-full">

                    <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">

                        <Link className="w-4 h-4 text-zinc-400" />

                        Portfolio / Website

                    </Label>


                    <Input
                        type="url"
                        placeholder="https://yourportfolio.com"
                        value={formData.portfolioLink}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                </TextField>





                <TextField name="additionalNotes" className="w-full">


                    <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">

                        <LayoutHeaderCells className="w-4 h-4 text-zinc-400" />

                        Short Message / Notes

                    </Label>



                    <textarea
                        name="additionalNotes"
                        rows={4}
                        placeholder="Anything else you'd like to share with the hiring team..."
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                    />


                </TextField>





                <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t">


                    <Button
                        type="reset"
                        onClick={() => setFormData({
                            resumeLink:'',
                            portfolioLink:'',
                            additionalNotes:''
                        })}
                        className="px-4 py-2"
                    >
                        Clear Form
                    </Button>



                    <Button
                        type="submit"
                        className="px-5 py-2 text-white bg-blue-600 rounded-lg flex items-center gap-2"
                    >

                        Submit Application

                        <ArrowRight className="w-4 h-4"/>

                    </Button>


                </div>



            </Form>


        </div>
    );
};


export default JobApply;