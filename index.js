// let image = ["https://mansurgavriel.com/cdn/shop/files/WP23H095WS_Banana_CandyHobo_Detail_4.jpg","https://i.imgur.com/sJv4Xx0.jpeg"];
// let productcontainer = document.querySelector(".product-container")
// const fetchdatapro = async () => {
//     let datafetch = await fetch('https://api.escuelajs.co/api/v1/products');
//     return datafetch.json();
// }

// fetchdatapro().then((reponse) => {
//     console.log(reponse);

//     reponse.forEach(product => {
//     image.map(images =>{
//         let productdiv = document.createElement('div');
//         productdiv.classList.add("divstyle");
//         productdiv.innerHTML = `
//         <img src="${images}" alt=""> 
//         `
//         productcontainer.appendChild(productdiv);
//     })
//         console.log(product);
//         let productdiv = document.createElement('div');
//         productdiv.classList.add("divstyle");
//         productdiv.innerHTML = `
//         <h4>Title: ${product.category}</h4>
//         <h4>${product.id}</h4>
//         <h5>${product.description}</h5>
//         <h4>Price: ${product.price}$</h4>
//         `


//         productcontainer.appendChild(productdiv);
//     });

// }).catch((error) => {
//     console.log(error);
// })