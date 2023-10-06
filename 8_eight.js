function countdown(event){
    const current = new Date()
    const lauch = new Date(event)

    const diff = lauch - current

    const res = Math.ceil((diff/(1000*60*60*24))) 
    return res
}

const eventDate ='2023-10-25'
console.log(countdown(eventDate));