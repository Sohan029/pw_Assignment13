const sentence ="please please submit your assignment on time, your asssignments are important"

function counter(sentence){
    const div = sentence.split(' ')
    const myMap = new Map()

    for(const  item of div){
        const sub = item.toLowerCase().replace(',','')
        myMap.set(sub,(myMap.get(sub)||0)+1)
    }
    return myMap
} 


console.log(counter(sentence));


