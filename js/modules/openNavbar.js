export const openNavbar = () => {
	const mobileButton = document.querySelector("#mobile__btn");
	const menuLinksContainer = document.querySelector(".header__links");

	if (mobileButton && menuLinksContainer) {
		const handleClick = () => {
			menuLinksContainer.classList.toggle("active");
		};

		mobileButton.addEventListener("click", handleClick);
	}

	menuLinksContainer.classList.remove("active");
};
