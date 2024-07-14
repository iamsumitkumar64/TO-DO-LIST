document.getElementById("area").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        create();
        document.getElementById("area").value = "";
        // let text = document.getElementById("area").value;
        // document.getElementById("list").innerHTML = text;
    }
});
function create() {
    let div = document.createElement("div");//CREATE DIV
    document.getElementById("list").appendChild(div);//APPEND DIV
    div.style.display = "flex";//DESIGN DIV
    div.style.justifyContent = "space-around";
    let para = document.createElement("p");//CREATE PARAGRAPGH
    let text = document.getElementById("area").value;
    para.innerHTML = text;//DESIGN PARAGRAPGH
    para.style.fontSize = "2rem";
    let check = document.createElement("input");//CREATE CHECKBOX
    check.type = "checkbox";//DESIGN CHECKBOX
    check.style.width = "2vw";
    let cross = document.createElement("button");//CREATE CROSS TICK
    cross.style.backgroundImage = "URL('cross.png')";//DESIGN CROSS TICK
    cross.style.backgroundSize = "100% 100%";
    cross.style.width = "3vw";
    cross.style.height = "5vh";
    cross.style.margin = "10%";
    div.appendChild(para);//APPEND PARAGRAPH
    div.appendChild(check);//APPEND CHECKBOX
    div.appendChild(cross);//APPEND CROSS TICK
    // document.getElementById("area").addEventListener("keypress", function (event) {
    //     if (event.keyCode === 13) {
    //         para.innerHTML = "";
    //     }
    // };
    check.onclick = function () {
        if (check.checked) {    //MAKE WORK DONE AND LEAVE MARK ON IT
            para.style.textDecoration = "line-through";
            check.disabled = true;  //DISABLED AGAIN CHECKBOX
        }
    };
    cross.onclick = function () {   //DELETE A WORK THAT IS DONE OR USER DON'T WANT
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
};