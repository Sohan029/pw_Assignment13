function isTotal(...theArg){
    let count=0
    for(let arg of theArg){
        count+=arg
    }
    return count
}

let sum=isTotal(125,30,45)
console.log(`The total cart value is: ${sum}`);

