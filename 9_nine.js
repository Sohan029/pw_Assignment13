function unique(user){
    const user1 = Array.from(user)
    const myset = new Set(user)
    if( user1.length === myset.size){
        console.log("The input string contains unquie items.");
    }
    else{
        console.log("The input string contains duplicates.");
    }
}

unique("anurag")
unique("sohan")
unique("laasyaa")