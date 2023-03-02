
const app = document.querySelector(".app");
app.innerHTML = ` <tr>
<td></td>
</tr>`


fetch("http://localhost:3000/products")
    .then(data => data.json())
    .then(data => {

        render(data);
        const edit = document.querySelectorAll(".btn-edit")
        edit.forEach(item => {
            item.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                getItemId(data, id)
                console.log(id)


            })
        })
    })

const render = (data) => {
    const productList = data.map(item => ` <tr>
    <td>${item.id}</td>
    <td>${item.productName}</td>
    <td><img style="width:100px" src="${item.image}"></td>
    <td><button class="btn-edit"data-id="${item.id}">Edit</button>
    <button data-id="${item.id}">Xóa</button></td>
</tr>`

    ).join("")
    app.innerHTML = productList
}

const formedit = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }

    })
}
const addProject = (data) => {
    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }

    })

}
const getItemId = (data, id) => {
    const item = data.find(item => {
        if (item.id == id) {
            return item
        }
        return false
    })
    console.log(item)
    formAddEdit(item);
}

const formAddEdit = (item = null) => {
    if (item !== null) {
        const dataEdit = item
        console.log(dataEdit)
        document.querySelector("body").innerHTML =/*html*/ ` <form action="">
        <input type="text" id="username" value="${dataEdit.productName}" />
        <input type="text" id="username1" value="${dataEdit.image}" />
        <button id="btn-update">Sua</button>

    </form>`
        document.querySelector('#btn-update').addEventListener('click',async () => {
            const dataEditNew = {
                id: dataEdit.id,
                productName: document.querySelector("#username").value,
                image: document.querySelector("#username1").value,
            }
        await fetch(`http://localhost:3000/products/${dataEdit.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataEditNew)
            })

        })

    }
    //     document.querySelector("body").innerHTML =/*html*/ ` <form action="">
    //     <input type="text" id="username" />
    //     <button id="btn-submit">Them</button>
    // </form>`
}