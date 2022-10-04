const myBttn = document.getElementById("mybttn");

const redirectFunction = () => {
    window.open("https://lesenkredit.fibank.bg/", "_blank");
}

myBttn.addEventListener("click", redirectFunction);