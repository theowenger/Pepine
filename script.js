const headBand = document.getElementById('headband')
const buttonMenu = document.getElementById('hamburger')
const navigationMenu = document.getElementById('navigation')
const navigationChoice = document.querySelectorAll('.navigation-choice');
console.log(headBand)

for (let i = 0; i < navigationChoice.length; i++) {
	navigationChoice[i].addEventListener("click", displayMenu);
}

buttonMenu.addEventListener('click', displayMenu)
let navAppair = false

window.addEventListener("resize", hiddeMenuOnDesktop)


function hiddenHeadBand() {
	if (window.scrollY <= 0) {
		headBand.style.top = -100 + "px"
	} else {
		headBand.style.top = 0 + "px"

	}
}
hiddenHeadBand()


function hiddeMenuOnDesktop() {
	let screenWidth = window.innerWidth;
	if (screenWidth > 992) {
		navAppair = true
		console.log(navAppair)

	}
}

function displayMenu() {

	if (navAppair == false) {
		navigationMenu.style.right = 0 + "%"
		navigationMenu.style.height = 100 + "vh"
		navAppair = true
		console.log(navAppair)
	} else {
		navigationMenu.style.right = 150 + "%"
		navigationMenu.style.height = 50 + "px"

		navAppair = false
		console.log(navAppair)
	}
}


const scrollableElement = document.body;

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
	if (checkScrollDirectionIsUp(event)) {
		window.addEventListener('scroll', (e) => {
			let scrolled = window.pageYOffset;
			setTimeout(() => {
				if (scrolled == window.pageYOffset) {
					if (
						scrolled % window.innerHeight >=
						window.innerHeight / 1
					) {
						window.scrollBy(
							0,
							window.innerHeight -
							(scrolled % window.innerHeight),
						);
					} else {

						window.scrollBy(
							0,
							-(scrolled % window.innerHeight),
						);
					}
				}
			}, 25);
			hiddenHeadBand()
		});

	} else {
		window.addEventListener('scroll', (e) => {
			let scrolled = window.pageYOffset;
			setTimeout(() => {
				if (scrolled == window.pageYOffset) {
					if (
						scrolled % window.innerHeight >=
						window.innerHeight / 10
					) {
						window.scrollBy(
							0,
							window.innerHeight -
							(scrolled % window.innerHeight),
						);
					} else {

						window.scrollBy(
							0,
							-(scrolled % window.innerHeight),
						);
					}
				}
			}, 25);
			hiddenHeadBand()
		});
	}
}

function checkScrollDirectionIsUp(event) {
	if (event.wheelDelta) {
		return event.wheelDelta > 0;
	}
	return event.deltaY < 0;
}