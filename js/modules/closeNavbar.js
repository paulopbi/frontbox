export const closeNavbar = () => {
	const menuList = document.querySelector(".header__links");
	const linksElements = document.querySelectorAll(".header__links a");

	if (menuList && linksElements) {
		linksElements.forEach((item) => {
			const closeNavbar = () => {
				menuList.classList.remove("active");
			};

			item.addEventListener("click", closeNavbar);
		});
		return;
	}
};
