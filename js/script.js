import { closeNavbar } from "./modules/closeNavbar.js";
import { openNavbar } from "./modules/openNavbar.js";

const init = () => {
	openNavbar();
	closeNavbar();
};

window.addEventListener("DOMContentLoaded", init);
