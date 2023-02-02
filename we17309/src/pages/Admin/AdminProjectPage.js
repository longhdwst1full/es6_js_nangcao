import { projectsFake } from "../../data/projectFake"
import { useEffect, useState } from "../../lib"

const AdminProjectPage = () => {
    const [data, setData] = useState(projectsFake);
    useEffect(() => {
    
        const btnRemove = document.querySelectorAll(".btn-remove");
        for (const item of btnRemove) {
            item.addEventListener("click", (e) => {
                const id = e.target.dataset.id
                removeData(id);
            })
        }
    })
    const removeData = (id) => {
        setData(data.filter(item => item.id != id));
    }
    return (
        `    <div>
                <h1>Quản lý dự án </h1>
                <table class="table-auto">
                    <thead>
                        <td>Id</td>
                        <td>Name</td>
                        <td></td>
                    </thead>
                    <tbody>
                    ${data.map((project, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${project.name}</td>
                                <td class=""><button class="bg-red-500 btn-remove" data-id=${project.id}>Remove</button></td>
                            </tr>
                    `).join("")}
                    </tbody>
                </table>
    </div>`
    )
}

export default AdminProjectPage
