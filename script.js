function setWidth() {
	console.log("setting width...");

	var logo = document.getElementById("logo");
	var links = document.getElementById("nav-links");

	var marginLinks = window.getComputedStyle(links).marginRight;
	var logoWidth = window.getComputedStyle(logo).width;
	var navbar = document.getElementById("navbar");
	var windowSize = window.getComputedStyle(navbar).width;
	console.log("Links: " + marginLinks);
	console.log(parseFloat(logoWidth.replace("px", "")));
	console.log(windowSize);

	var dif = (parseFloat(windowSize.replace("px", "")) / 2) - ((parseFloat(marginLinks.replace("px", "")) / 2) + (parseFloat(logoWidth.replace("px", "")) / 2)) + "px";

	console.log(dif)


	links.style.marginLeft = dif;
	//setTimeout(setWidth, 100)
}



window.addEventListener("load", function() {
	let fit = document.getElementsByClassName("fit");

	for (var i = 0; i < fit.length; i++) {
		fitText(fit[i], 0.60);
	}
});