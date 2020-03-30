function verifyName(name) {
    name = name.toLowerCase();
    if(name === "akhil") {
        return true;
    } else {
        return false;
    }
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function respond() {
    var name = document.getElementById("name").value;
    var body = document.getElementById("body");
    var parentEle = document.createElement("div");
    body.append(parentEle);
    removeElement("main");
    if(verifyName(name)) {
        var center = document.createElement("center");
        parentEle.appendChild(center);
        
        var imgEle1 = document.createElement("img");
        imgEle1.src = "KillBro.jpg";
        center.append(imgEle1);

        var imgEle2 = document.createElement("img");
        imgEle2.src = "https://media.tenor.com/images/7d775a755c0a37bb02b3778b647ccc2c/tenor.gif";
        center.append(imgEle2);

    } else {
        var msgEle = document.createElement("h4");
        msgEle.innerHTML = "Bro this is not your Name.";
        parentEle.appendChild(msgEle);
    }
}