
import { router, useEffect } from "@/lib";

const ProjectEdit = (data) => {
    // console.log(data);
    const { id } = data

    const projects = JSON.parse(localStorage.getItem('projects'))

    const currentProject = projects.find(item => item.id == id);

    useEffect(() => {

        document.querySelector("#form").addEventListener("submit", (event) => {
            event.preventDefault()
            const nameValue = document.querySelector("#input_name").value;
            const newProject = {
                id: currentProject.id,
                name: nameValue
            }
            const projetctNew = projects.map(item =>
                item.id == newProject.id ? newProject : item
            )
            localStorage.setItem("projects", JSON.stringify(projetctNew))

            router.navigate("/admin/project");

        })
    })
    if (!currentProject) return null;
    return (
        `        <div class="text-center">
            <h1 class="text-center my-3 text-2xl">Sửa dự án tại đây </h1>
            <form id="form">
                <input type="text" class="border-[1px] p-2 rounded-lg" value="${currentProject.name}" name="" id="input_name" placeholder="project name">
                <button class="rounded-lg text-lg border border-red-500 p-2"> Sửa</button >
            </form>
         </div>`
    )
}

export default ProjectEdit

