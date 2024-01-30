let a=1;
// to print the numbers continuously upto a certain times then we use loops for example
for(let i=0;i<10;i++){
    console.log(a+i);
}
// it will print the numbers upto 10
//there are types of loop
//for in loop and for of loop
// for in loop is used in objects
let details = {
    name : 'jaya',
    usn : 66,
    sec : 'a'
}

for(key in details){
    console.log(key+':'+details[key])
}

let item ={
    name : 'shirt',
    size: 'XL',
    price : 2500
}

for(key in item){
    console.log(key+':'+item[key])
}

//for of loop used in array to iterate the letters

for (d of "jaya") {
    console.log(d)
}
//it iteate the every value in arrays and gives the output

//while loop

let c = 1;
while (c<6) {
    c++;
    console.log(c);
}
//first it takes the value and check the condition in while loop and execute the text in the loop

//dowhile loop
let b = 1
do {
    b++;
    console.log(b);
} while (b<7);
//first it takes the value it executes the loop and check the while condition.

//the main difference the while and dowhile loop is whileloop check the condition and execute the loop and dowhile loop execute and then checks the condit 

