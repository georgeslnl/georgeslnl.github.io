import { IoSchool } from "react-icons/io5";


export default function EducationCard() {
    return (
        <div className="lg:col-span-2 lg:col-start-3 lg:row-start-2 shadow-xl border hover:shadow-2xl bg-secondary-50 p-8 rounded-lg flex flex-col gap-1 items-center lg:items-start animate-fadeIn lg:animate-slow lg:animate-fadeInRight">
            <div className="flex items-center gap-2">
            <IoSchool className="text-3xl text-text-900"/>
            <h1 className="text-3xl font-semibold text-text-900 text-end">Education</h1>
            </div>
            <p className="text-text-900 text-justify">UCL's <a className="text-text-700 font-semibold hover:underline" href="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/computer-science-msc">Computer Science MSc</a> is an intensive one year conversion program. This degree equipped me with foundational knowledge of algorithms, data structures, computer architecture, and databases. Additionally, I had the opportunity to partake in hands-on projects, such as my final year dissertation project – an industry exchange project with Microsoft.</p>
        </div>
    )
}