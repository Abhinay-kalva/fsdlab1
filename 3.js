const student= new Object({
firstname:"abhinay",
lastname:"kalva",
rollnumber:"23b81a05ep",
class:"cse-h"
});
for(const i in student){
    console.log(i,student[i])

}
student.age=18
student.age=19
delete student.class
console.log(student.age)
console.log(student.class)