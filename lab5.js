document.getElementById("form-add").addEventListener("submit", (event) => {
  event.preventDefault(); // chan reload

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const newProduct = {
    name:name,
    price:price,
    category,
  }
  axios.post("http://localhost:3000/products", newProduct).then(() => {
      alert("Thêm sản phẩm thành công");
    })
    .catch(() => {
        alert("them that bai");
    });
});