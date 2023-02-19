const header_1 = document.querySelector("header");
const keyframeTime = 1500;
window.addEventListener("mousemove", function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let div = document.createElement('div');
    div.classList.add('spot');
    header_1.appendChild(div);
    div.style.setProperty("top", `${y}px`);
    div.style.setProperty("left", `${x}px`);
    setTimeout(() => {
        header_1.removeChild(div);
    }, keyframeTime);
})