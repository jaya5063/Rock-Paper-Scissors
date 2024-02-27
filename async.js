// setTimeout and setInterval 
setTimeout(() => {
    console.log('jayaKrishna')
}, 4000)

// setInterval(() => {
//     console.log('practice async')
// }, 3000)


let zero = () => {
    console.log("this is step zero")
}
let one = () => {
    console.log("this is function one")
    zero();
}

let two = (arg) => {
    console.log("this is function two");
    arg();
}

two(one);
console.log(typeof zero)

//multiple setTimeout function inside each function create a callBack hell to avoid this callBack hell we use promisses

let prom1 = new Promise((resolve, reject) => {
    console.log("yes i'm done")
    resolve("jaya")
});

prom1.then((a) => {
    console.log(a)
})

let prom2 = new Promise((resolve, reject) => {
    a = Math.random()
    if (a < 0.5) {
        reject("this is not the number")
    } else {
        console.log(`number done ${a}`)
    }
})

prom2.then((e) => {
    console.log(e);
}).catch((err) => {
    console.log(err)
})

let prom3 = new Promise((resolve, reject) => {
    let data = true;
    if (data === true) {
        resolve("data is found")
    } else {
        reject("data not found")
    }
})

prom3.then((e) => {
    console.log(e)
}).catch((err) => {
    console.log("data not available")
})

let prom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("got my data");
        reject("not my data");
    }, 3000)
})

prom4.then((e) => {
    console.log(e);
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('i dont care about data')
})

async function async1() {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 4000);
    })

    return "i'm await";
}

async function greet() {
    console.log('hello')
    let message = await async1();
    console.log(message);
    console.log("hi")
    console.log("jaya")
    console.log("how are you")
    console.log(typeof message)
}

greet();


async function getData() {
    try {

        let x = await fetch('https://jsonplacolder.typicode.com/todos/1');
        let data = await x.json();
        console.log(data)
    } catch {
        console.log("somthing is wrong")
    }
}

getData();
async function postRequest() {
    try {

        let y = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let data = await y.json();
        console.log(data)
    } catch {
        console.log("somthing is wrong")
    }
}
postRequest();

let p = Promise.all([prom1, prom2, prom3, prom4])

console.log(typeof p)