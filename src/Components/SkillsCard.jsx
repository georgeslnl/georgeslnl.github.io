import { AiFillTool } from "react-icons/ai";


export default function SkillsCard() {
    return (
        <div className="lg:col-span-2 lg:col-start-3 lg:row-start-4 shadow-lg m-auto bg-background-200 p-8 rounded-2xl flex flex-col gap-1 items-center lg:items-start">
            <div className="flex items-center gap-2">
            <AiFillTool className="text-3xl text-text-900"/>
            <h1 className="text-3xl font-semibold text-text-900 lg:text-end">Skills</h1>
            </div>
            <p className="text-text-900 text-justify">I am most familiar in Python and Javascript/Typescript. 
            I enjoy both frontend and backend development, and 
            have used React with various tools for projects.
                Python is one of the first programming languages I've learned, and have expanded on 
                this skill by using libraries such as TensorFlow and Pandas for ML & Data Science projects.</p>
        </div>
    )
}