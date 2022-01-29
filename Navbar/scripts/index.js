const menuBarCloseBtn = document.querySelector(".menu-bar header a");
const menuBar = document.querySelector(".menu-bar");
const utilityBarCloseBtn = document.querySelector(".utility-bar-styles:nth-child(4) a");
const utilityBar = document.querySelector(".utility-bar");
const menuBarOpenBtn = document.querySelector(".nav-bar .nav-list .menu-icon");
const heroImg = document.querySelector(".hero-label>img:nth-child(2)");
const heroContent = document.querySelector(".hero-label .bg-blue");
menuBarCloseBtn.addEventListener("click", function () {
	menuBar.style.left = "-100vw";
});
utilityBarCloseBtn.addEventListener("click", function () {
	utilityBar.style.display = "none";
});
menuBarOpenBtn.addEventListener("click", function () {
	menuBar.style.left = "0";
});
function handleDeviceChange() {
	if (window.innerWidth >= 580) {
		heroContent.style.height = `${heroImg.height}px`;
	}
}
window.addEventListener("resize", handleDeviceChange);
