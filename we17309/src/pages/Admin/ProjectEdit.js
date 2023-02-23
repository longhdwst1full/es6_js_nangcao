
import { router, useEffect, useState } from "@/lib";

const ProjectEdit = (data) => {
    const [project, setProject] = useState({})
    const { id } = data
    useEffect(() => {
        fetch("http://localhost:3000/projects/" + id)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])
    
    useEffect(() => {

        document.querySelector("#form").addEventListener("submit", (event) => {
            event.preventDefault()
            const nameValue = document.querySelector("#input_name").value;
            // const newProject = {
            //     id: currentProject.id,
            //     name: nameValue
            // }
            fetch("http://localhost:3000/projects/" + id, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:nameValue
                })

            }).then(() => router.navigate("/admin/project"));

        })
    })
    return (
        `        <div class="text-center">
            <h1 class="text-center my-3 text-2xl">Sửa dự án tại đây </h1>
            <form id="form">
                <input type="text" class="border-[1px] p-2 rounded-lg" value="${project.name}" name="" id="input_name" placeholder="project name">
                <button class="rounded-lg text-lg border border-red-500 p-2"> Sửa</button >
            </form>
         </div>`
    )
}

export default ProjectEdit

