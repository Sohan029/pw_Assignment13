const productDetails ={
    name:"Apple 2020 MacBook Air Laptop",
    price:82000,
    color:"Grey",
    hardDisk: "256GB"
}
// console.log(productDetails[name]);
console.log('Below are the product details.');
for(let num of Object.keys(productDetails)){
    console.log(`${num} : ${productDetails[num]}`);
}