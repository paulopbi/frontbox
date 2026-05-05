import { closeNavbar } from "./modules/closeNavbar.js";
import { openNavbar } from "./modules/openNavbar.js";

const init = () => {
	closeNavbar();
	openNavbar();
};

window.addEventListener("DOMContentLoaded", init);
