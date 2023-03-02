const tbody = document.querySelector('tbody');

fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then((data)=>{ showProducts(data)
        const btn_add = document.querySelector("#add")
        btn_add.addEventListener("click", () =>addUser())
        const btn_delete = document.querySelectorAll(".delete")
        const btn_update = document.querySelectorAll(".update")
        for (const btn of btn_delete) {
            
            btn.addEventListener("click", () =>{
                const id = btn.dataset.id;
                fetch(`http://localhost:3000/products/${id}`,{
                    method:"DELETE"
                })

            })
        }
        for(const btn of btn_update) {
            btn.addEventListener("click", () =>{
                const id = btn.dataset.id;
                updateUser(id)

            })
        }
    
    })

function updateUser(id){
    document.querySelector
    console.log(id)
}
function showProducts(data) {
    console.log(data);
    tbody.innerHTML = data.map((product)=>{
        return `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button class="delete" data-id="${product.id}">Xoa</button>
                <button class="update" data-id="${product.id}">sua</button>
            </td>
        </tr>
        
        `
    }).join("")

}
function addUser() {
    document.querySelector('body').innerHTML = `
    <form action="" id="form-add">
        <span>Name</span>
        <input type="text" id="name">
        <span>Price</span>
        <input type="text" id="price">
        <button>Add</button>
    </form>    
    `
    const name = document.querySelector('#name');
    const price = document.querySelector('#price');
    const form_add = document.querySelector('#form-add')

    form_add.addEventListener('submit',(e)=>{
        e.preventDefault()
        const newProduct ={
            name:name.value,
            price:price.value
        }
        console.log(newProduct)
        fetch('http://localhost:3000/products',{
            method: 'POST',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(newProduct)
        })


    })
}
