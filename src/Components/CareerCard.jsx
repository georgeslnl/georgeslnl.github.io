import { IoBriefcase } from "react-icons/io5";


export default function CareerCard() {
    return (
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-3 hover:shadow-md m-auto bg-primary-200 p-8 rounded-2xl flex flex-col gap-1 items-start">
            <div className="flex flex-row-reverse items-center gap-2">
            <IoBriefcase className="text-2xl text-text-900"/>
            <h1 className="text-3xl font-semibold text-text-900 text-end">Career</h1>
            </div>
            <p className="text-text-900 text-justify">Following my Bachelor's, I worked for 1 year in a healthcare communications agency as Senior Digital Campaigns Executive.
                The company was a small agency, and I promptly adapted to the fast-paced environment and learned how to balance delivering high-quality projects with meeting
                tight, ever-changing deadlines. As part of my role, I held weekly meetings with clients from Europe and Asia, which helped me improve my presentation skills and cultivate true professionalism.</p>
        </div>
    )
}