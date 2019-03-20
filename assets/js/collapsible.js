var coll = document.getElementsByClassName("collapsible");
var default_open = document.getElementById('openme');
var i;
if (coll) {
	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = document.getElementById(this.dataset.child);
			if (content.style.maxHeight) {content.style.maxHeight = null;}
			else {content.style.maxHeight = content.scrollHeight + "px";} 
		});
	}
}
try {
	document.getElementById(document.getElementById(window.location.hash.substr(1)).dataset.parent).click();
} catch(n) {
	if (default_open) {
		default_open.click();
	}
}