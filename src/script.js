let exists = false;
const X_OFFSET = 10;
const POPUP_HEIGHT = 32;

window.addEventListener('mouseup', () => setTimeout(() => {        
        mouseUpHandler();
    }, 100)
);

function mouseUpHandler() {
    const selected = window.getSelection();
    const value = selected.toString();
    
    if(!selected.rangeCount) return;
    
    const position = selected.getRangeAt(0).getBoundingClientRect();

    if(!position) return;

    console.log(position);
    
    let popup = document.querySelector(".chrome-extension-pop-up");

    if(!value.trim()) {
        removeElementDisplay();
        return
    }

    if(popup) removeElementDisplay();
    
    createElementDisplay(value, position);
}

function createElementDisplay(value, position) {
    popup = document.createElement("div");
    popup.innerHTML = `<div role="button">Copy</div>`;
    popup.classList.add("chrome-extension-pop-up");
    popup.setAttribute(
        'style',
        `left: ${position.x + position.width + window.scrollX + X_OFFSET}px;
         top: ${position.y + window.scrollY + position.height / 2 - POPUP_HEIGHT / 2}px;`
    );
    document.body.appendChild(popup);
    console.log(value.trim());
    exists = true;

    const btn = document.querySelector('.chrome-extension-pop-up');
    btn.addEventListener('click', copyText(value.trim()));

    const rect = popup.getBoundingClientRect();
    console.log(rect.left, rect.right, rect.top, rect.bottom);
}

function removeElementDisplay() {
    const popup = document.querySelectorAll('.chrome-extension-pop-up');
    if(popup) {
        exists = false;
        popup.forEach(e => {
            e.remove();
        })
    }
}

function copyText(value) {
    navigator.clipboard.writeText(value);
}