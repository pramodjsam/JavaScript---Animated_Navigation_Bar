function santasNav(){
	const sections= document.querySelectorAll("section")
	const navLinks= document.querySelectorAll("nav a");

	sections.forEach(function(section){
		section.addEventListener("mouseenter",function(){
			const id= this.getAttribute("id");
			const navActive= document.querySelector(`a[href="#${id}"]`);
			navLinks.forEach(function(links){
				links.classList.remove("active")
			})
			navActive.classList.add("active")
		})
	})
}

santasNav();