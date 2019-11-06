
window.onload = () => {
    const returnByid = name => document.getElementById(name)
    const returnByClassName = name => document.getElementsByClassName(name)
    const setNewKey = ({ id, value }) => localStorage.setItem(id, value)
    const setStyle = (changeStyle, valueStyle) => document.body.style[changeStyle] = valueStyle
    for (let value of Object.keys(localStorage)) {
        setStyle(value, localStorage.getItem(value))
    }
    function allValues() {
        let values = returnByClassName('values');
        for (let val of values) {
            if (val.value) {
                setNewKey(val)
                setStyle(val.id, val.value)
            }
        }
    }
    returnByid('btnSave').addEventListener('click', event => {
        allValues();
    })
}
