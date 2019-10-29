


const longestWord = str => {
    let large='';
    const arr=str.split(' ');
    for (let word of arr){
        if (word.length > large.length) { large=word}
    }
    console.log(large) 
}



longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");


