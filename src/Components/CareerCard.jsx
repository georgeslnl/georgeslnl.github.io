import { IoBriefcase } from "react-icons/io5";


export default function CareerCard() {
    return (
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-3 shadow-xl hover:shadow-2xl border bg-secondary-50 p-8 rounded-lg flex flex-col gap-10 items-center lg:items-start animate-fadeIn lg:animate-slow lg:animate-fadeInLeft">
            <div className="flex flex-row-reverse items-center gap-2">
            <IoBriefcase className="text-2xl text-text-900"/>
            <h1 className="text-3xl font-semibold text-text-900 lg:text-end">Career</h1>
            </div>
            <p className="text-text-900 text-justify">Following my Bachelor's degree, I worked for 1 year in a healthcare communications agency as Senior Digital Campaigns Executive.
                The company was a small agency, and I promptly adapted to the fast-paced environment and learned how to balance delivering high-quality projects with meeting
                tight, ever-changing deadlines. As part of my role, I held weekly meetings with clients from Europe and Asia, which helped me improve my presentation skills and cultivate true professionalism.</p>
        </div>
    )
}