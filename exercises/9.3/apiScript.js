const API_URL = "https://icanhazdadjoke.com/"
const returnId=nameId=>document.getElementById(nameId)
const fetchJoke = () => {
    fetch(API_URL, {
            headers: { Accept: "application/json" }
        })
        .then((response) => response.json())
        .then((json) => returnId('jokeContainer').innerHTML=json.joke)
}
window.onload = () => fetchJoke()

