const footerHeaders = document.querySelectorAll(".column h4");
const footerLists = document.querySelectorAll(".column ul");

for (let i = 0; i < footerHeaders.length; i++) {
    footerHeaders[i].addEventListener("click", function () {

        this.parentElement.classList.toggle("column-ul-active")
    });
}