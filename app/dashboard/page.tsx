
//dashboard will contain projects to select from
import { title } from "process"
import ProjectCard from "../components/ProjectCard"
export default function Dashboard(){

    //mock data for project fornt end
    const mockProjects =[
        {title:"project 1", selectedColors:["Red","Blue","Green"], cost:30.45, started:"12/2/24"},
        {title:"project 2", selectedColors:["Red","Blue","Green"], cost:50.15, started:"12/12/24"},
        {title:"project 3", selectedColors:["Red","Blue","Green"], cost:72.34, started:"12/13/24"},
        {title:"project 4", selectedColors:["Red","Blue","Green"], cost:15.20, started:"12/30/24"},
        {title:"project 5", selectedColors:["Red","Blue","Green"], cost:11.75, started:"1/2/25"}
    ]


    return(
        <div className="p-4">
            <h2>Jesse's Projects</h2>
            <button className=" btn btn-primary btn-sm mt-2 ">New Project</button>
            <section className="flex flex-col flex-wrap gap-4 md:flex-row mt-4">
                {mockProjects.map((project, index)=>{
                    return <div key={index}><ProjectCard title={project.title} selectedColors={project.selectedColors} cost={project.cost} started={project.started} /></div> 
                })}
            </section>
        </div>
    )
}