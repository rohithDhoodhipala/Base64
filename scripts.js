function encode(id) {
    const textBox = document.getElementById("enterText");
    const displayBox = document.getElementById("displayText");
    if(textBox.value.length > 0) {
        const encodedText = window.btoa(textBox.value);
        displayBox.innerText = encodedText;
    }else {
        alert("Enter Something to Encode")
    }
}

function decode(id) {
    const textBox = document.getElementById("enterText");
    const displayBox = document.getElementById("displayText");
    if(textBox.value.length > 0) {
        const encodedText = window.atob(textBox.value);
        displayBox.innerText = encodedText;
    }else {
        alert("Enter Something to Decode")
    }
}