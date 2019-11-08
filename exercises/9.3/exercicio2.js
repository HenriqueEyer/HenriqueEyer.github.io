const randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);



const arr10 = () => {
    return new Promise((resolve, reject) => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.pow(randomNumber(50, 1), 2));
        }
        if ((arr.reduce((acc, number) => acc + number), 0) < 8000) {
            resolve(arr)
        } else {
            reject("erro")
        }
    })
}

arr10()
  .then((param) => { console.log(param) })
  .catch((param) => { console.log(param) })
