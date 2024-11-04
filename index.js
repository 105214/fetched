// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>{ 
// console.log(json.title)

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{ 

let productBox=document.getElementById('product-box')
let product=""
for(let products of json){
product += `<div class="col-md-3 col-sm-12 col-lg-4">
<div class="card">
  <img src="${products.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">"${products.title}"</h5>
    <p class="card-text">"${products.price}"</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
`
}
productBox.innerHTML=product
           })

            