const students = [
    {
        name: "mithun",
        marks: 95,
    },
    {
        name: "prabir",
        marks: 75,
    },
    {
        name: "alka",
        marks: 92,
    },
    {
        name: "shivam",
        marks: 70,
    },
    {
        name: "farman",
        marks: 99,
    },
];

// console.log(students.name);

function check(userName){
    let count=0;
    
    for(let i=0;i<students.length;i++){
        
        if(students[i].name == userName){
            if(students[i].marks > 90){
                console.log(`Congratulations..!!!  ${userName} You have cleared the exam.`);
                count++;
                break
            }
            else{
                console.log(`Sorry ${userName}! You failed to cleared the exam.`);
                count++
                break
            }
        }
    }
    if(count == 0){
        console.log("Invalid");
    }
}

check("shivam".toLowerCase())



