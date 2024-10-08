import { IoPersonCircleSharp } from "react-icons/io5";


export default function BackgroundCard() {
    return (
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 shadow-xl hover:shadow-2xl border bg-secondary-50 p-8 rounded-lg flex flex-col gap-1 items-center lg:items-start animate-fadeIn lg:animate-slow lg:animate-fadeInLeft">
            <div className="flex flex-row-reverse items-center gap-2">
            <IoPersonCircleSharp className="text-3xl text-text-900"/>
            <h1 className="text-3xl font-semibold text-text-900 text-end">Background</h1>
            </div>
            <p className="text-text-900 text-justify">I grew up in Paris and have been living in London for the past 5 years. I pursued an interdisciplinary degree for my Bachelor's, 
                which gave me my first introduction to programming through Java and Python. I quickly realised that I was passionate and had aptitudes, and continued to deepen my knowledge with online courses alongside my usual classes. In 2023, I decided to dedicate myself fully to the discipline, and began my Computer Science MSc at UCL.</p>
        </div>
    )
}