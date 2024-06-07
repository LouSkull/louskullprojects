function openLink(url) {
	window.open(url, "_blank")
}

function filterProjects(category) {
	const items = document.querySelectorAll(".portfolio-item")
	items.forEach((item) => {
		if (category === "all" || item.classList.contains(category)) {
			item.style.display = "block"
		} else {
			item.style.display = "none"
		}
	})
}
