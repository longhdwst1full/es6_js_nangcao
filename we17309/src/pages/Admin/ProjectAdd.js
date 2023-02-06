// import { projectsFake } from "@/data/projectFake";
import { router, useEffect, useState } from "@/lib"


const ProjectAdd = () => {
   
    const projects= JSON.parse(localStorage.getItem("projects"))||[];
    
    useEffect(() => {
        
        const inputAdd = document.querySelector("#input_name");
        document.querySelector("#form")?.addEventListener("submit", (e) => {
            e.preventDefault();

            projects.push({
                id: projects.length + 1,
                name: inputAdd.value
            })
            localStorage.setItem("projects", JSON.stringify(projects))
            // console.log(projectsFake)
            router.navigate("/admin/project");
        })
    })
    return (
        `    <div class="text-center">
        <h1 class="text-center my-3 text-2xl">Thêm dự án tại đây </h1>
      <form id="form">
        <input type="text" class="border-[1px] p-2 rounded-lg" name="" id="input_name" placeholder="project name">
        <button class="rounded-lg text-lg border border-red-500 p-2"> Add</button >
      </form>
    </div>`
    )
}

export default ProjectAdd
