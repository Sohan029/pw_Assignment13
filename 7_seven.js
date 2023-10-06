function otp(){
    
    let res = Math.floor(Math.random()*(8999))+1000;
    return res
}

console.log(otp());