// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.addEventListener('click', event => {
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})

const getColor = e => {
    if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
        return "red"
    } else if (e.clientX % 2 !== 0 && e.clientY % 2 !== 0) {
        return "blue"
    } else {
        return "green"
    }
}