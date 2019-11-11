const randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const contNum= numbers => numbers.reduce((acc, number) => acc + number,0)
const arrDiv= number => {
    const arr=[];
    arr.push(number/2)
    arr.push(number/3)
    arr.push(number/5)
    arr.push(number/10)
    return arr;
}
const arr10 = () => {
    return new Promise((resolve, reject) => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.pow(randomNumber(50, 1), 2));
        }
        if (contNum(arr) < 8000) {
            resolve(arrDiv(contNum(arr)))
        } else {
            reject('É mais de oito mil! Essa promise deve estar quebrada!')
        }
    })
}
const someArr=(arr)=>{
    return new Promise ((resolve) => {
        resolve(console.log(contNum(arr)));
    })
}

arr10()
  .then(someArr)
  .catch(param => { console.log(param)})
