
import { getProject } from "@/apis/project";
import { useEffect, useState } from "@/lib"

const AdminProjectPage = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        // setData(projects)
        getProject('/projects').then(data => {
            console.log(data.data)
            setData(data.data)

        })
        //         fetch("http://localhost:3000/projects")
        //             .then(response => response.json())
        //             .then(data =>{
        //                 console.log(data);
        //             })
    }, [])

    useEffect(() => {

        const btnRemove = document.querySelectorAll(".btn-remove");
        btnRemove.forEach((item, indexCurenth) => {
            item.addEventListener("click", (e) => {

                const id = e.target.dataset.id;
                const index = data.filter(data => data.id != id);
                setData(index);
                fetch("http://localhost:3000/projects/" + id, {
                    method: 'DELETE'
                })

            })
        })
    })


    return (
        `    <div>
                <h1>Quản lý dự án </h1>
                <table class="table-auto border border-green-500">
                    <thead class="border-gray-400">
                        <td  class="border" p-2>Id</td>
                        <td class="border" p-2>Name</td>
                        <td colspan="2" class="border" p-2><a href="/admin/project/add">Add project</a></td>
                    </thead>
                    <tbody>
                    ${data.map((project, index) => `
                            <tr class="p-2">
                                <td class="p-2 border">${index + 1}</td>
                                <td class="border">${project.name}</td>
                                <td class="px-1 border"><button class="bg-red-500 btn-remove" data-id=${project.id}>Remove</button></td>
                                <td class="border px-3"><a class="bg-blue-500 btn-remove" href="/admin/project/edit/${project.id}">Sửa</a></td>
                            </tr>
                    `).join("")}
                    </tbody>
                </table>
    </div>`
    )
}

export default AdminProjectPage
