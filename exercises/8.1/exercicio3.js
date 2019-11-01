



const elementBtn = document.getElementById('btn');
const elementSpan = document.getElementsByTagName('span')[0];

const clickCount = {
    cont : 0
}

elementBtn.addEventListener('click', () => {
    clickCount.cont++;
    elementSpan.innerHTML = clickCount.cont;
});
