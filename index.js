fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{ 

let productBox=document.getElementById('product-box')
let product=""
for(let products of json){
product=+`<div class="product-box col-md-3" id="product-box">
<div class="card">
  <img src="${json.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>`
}
productBox.innerHTML=product
            })

            