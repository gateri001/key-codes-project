const container = document.getElementById("keyContainer");

container.innerHTML = generateHtml("-","-","-")
window.addEventListener("keydown",(e) =>{

    container.innerHTML = generateHtml(e.key,e.code,e.key.charCodeAt(0));
});
function generateHtml(key, code,keyCode){
    return`   <div class="key-container">
            <h4>key</h4>
            <div class="key-content">${key === " " ? "space" : key}
            </div>
        </div>
        <div class="key-container">
            <h4>code</h4>
            <div class="key-content">${code}
            </div>
        </div>
        <div class="key-container">
            <h4>key code</h4>
            <div class="key-content">${keyCode}
            </div>
        </div>
        `;
}
