export default function EducationCard() {
    return (
        <div className="lg:col-span-2 lg:col-start-3 lg:row-start-2 hover:shadow-md m-auto bg-accent-200 p-8 rounded-2xl flex flex-col gap-1 items-end">
            <h1 className="text-3xl font-semibold text-text-900 text-end">Education</h1>
            <p className="text-text-900 text-justify">UCL's <a href="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/computer-science-msc text-secondary-400">Computer Science MSc</a> is an intensive one year conversion program. This degree equipped me with foundational knowledge of algorithms, data structures, computer architecture, and databases. Additionally, I had the opportunity to partake in hands-on projects, such as my final year dissertation project – an industry exchange project with Microsoft.</p>
        </div>
    )
}