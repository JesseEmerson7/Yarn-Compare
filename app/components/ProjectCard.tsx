//card displayed on the dahsboard page
import "./css/projectCard.css"
type ProjectCardprops ={
    title:string;
    selectedColors:string[];
    cost:number;
    started:string;
}
export default function ProjectCard({title, selectedColors, cost, started}: ProjectCardprops){

    return(
        <div className="border-2 border-gray-700 w-full md:max-w-52 max-h-52 rounded-lg">
            <div className=" border-gray-700 border-b-2">
            <p className="text-xl px-2 py-1">{title}</p>
            </div>
            
            <div className=" flex flex-col    p-1 m-2 mt-0 rounded-b-lg">
            
            <p>Total: ${cost}</p>
            <p>Started: {started}</p>
            <div className="flex flex-col">
                <p>{selectedColors.length} Selected Colors</p>
            </div>
            <button className="mt-3 btn-sm btn btn-primary">View</button>
        </div>
        </div>
        
    )
} 