const API_URL = "https://icanhazdadjoke.com/"
const returnId = nameId => document.getElementById(nameId)


    catchJoke()
        .then(response => {
            console.log('yay')
        })
        .catch(error => {
            console.log('error');
            console.log(error);
        });

    async function catchJoke() {
        const response = await fetch(API_URL, {
            headers: { Accept: "application/json" }
        })
        const json = await response.json();
        returnId('jokeContainer').innerHTML = json.joke;
    }

    window.onload = () => catchJoke()
