const params = new URLSearchParams(location.search);
const id = params.get("id");

axios.get(`http://localhost:3000/products/${id}`).then((res) =>{
    console.log(res);
    const product = res.data;
    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("category").value = product.category;
});

document.getElementById("form-edit").addEventListener("submit", (event) =>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const data = {
        name, price, category
    };
    axios.put(`http://localhost:3000/products/${id}`, data).then(() =>{
        alert("sua thanh cong");
    });
});