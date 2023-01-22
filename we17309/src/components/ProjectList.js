
import ProjectItem from "./ProjectItem";

export default function ProjectList({project}) {
    return (`
    <div>  
    
    ${project?.map(item => `${ProjectItem({ projectItem: item })}`).join("")}    
    </div>`
    )
}
