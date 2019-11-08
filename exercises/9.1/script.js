window.onload = () => {
    const returnByid = nameId => document.getElementById(nameId)
    const returnByClassName = nameClass => document.getElementsByClassName(nameClass)
    const setNewKey = ({ id, value }) => localStorage.setItem(id, value)
    const setStyle = (changeStyle, valueStyle) => {
        (changeStyle === 'font-size') ? returnByid('main').style[changeStyle] = valueStyle + "px" : returnByid('main').style[changeStyle] = valueStyle
    }
    for (let localKey of Object.keys(localStorage)) {
        setStyle(localKey, localStorage.getItem(localKey))
    }
    function allValues() {
        let elements = returnByClassName('values');
        for (let element of elements) {
            if (element.value) {
                setNewKey(element)
                setStyle(element.id, element.value)
            }
        }
    }
    returnByid('btnSave').addEventListener('click', event => {
        allValues();
    })
}
