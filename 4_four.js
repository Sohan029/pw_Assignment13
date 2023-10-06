const products =[
    {name: "Laptop", price:120000},
    {name: "Mobile", price:70000},
    {name: "Laptop Bag", price:20000},
    {name: "Watch", price:20000},
    {name: "Mobile Charger", price:1500},

];

function amount(){
    let min=products[0].price;
    let max=products[0].price;
    let minpro,maxpro = products[0].name

    for(let i=0;i<products.length;i++){
        if(products[i].price >  max){
            max=products[i].price
            maxpro=products[i].name
            // console.log(maxpro)
        }
    }
    for(let i=0;i<products.length;i++){
        if(products[i].price < min){
            min=products[i].price
            minpro=products[i].name
        }
    }

    // console.log(maxpro)
    console.log(`The product with maximum amount is ${maxpro} which is priced at Rs. ${max}`);
    console.log(`The product with minimum amount is ${minpro} which is priced at Rs. ${min}`);
}

amount()