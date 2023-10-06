function isUserPresent(name,list){
    let c=0;
    for (let index = 0; index < list.length; index++) {
        if(list[index]== name){
            console.log(`Yes, ${name} is a valid user.`);
            c++
            break
        }
    }
    if(c==0){
        console.log(`No , ${name} is not a valid user.`);
    }
}

let list=["mithun","sohan","sai","rohith","virat","mahi","williamson"]

isUserPresent("mithun",list)
isUserPresent("someone",list)
