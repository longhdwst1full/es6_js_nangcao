
import { useEffect, useState } from "@/lib"

const AdminProjectPage = () => {
    const [data, setData] = useState([]);
    // const projects = JSON.parse(localStorage.getItem('projects')) || [];

    useEffect(() => {
        // setData(projects)
         fetch("https://reqres.in/api/users")
         .then(response => response.json())
         .then(({data}) => {
            console.log(data);
            return setData(data);
         })
    }, [])

    useEffect(() => {

        const btnRemove = document.querySelectorAll(".btn-remove");
        btnRemove.forEach((item, indexCurenth) => {
            item.addEventListener("click", (e) => {

                const id = e.target.dataset.id;
                const index = data.findIndex((item, index) => {
                    if (item.id == id) return item
                    return item,index
                })
               
                if (index > -1) {
                    setData(data.splice(index, 1));
                    localStorage.setItem("projects", JSON.stringify(data))
                    setData(JSON.parse(localStorage.getItem("projects")))
            // router.navigate("/admin/project");

                }

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
                                <td class="border">${project.first_name}</td>
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
