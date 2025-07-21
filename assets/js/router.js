class Router {
	constructor() { }
	routeHandler() {
		const path = window.location.pathname.replace('/migueljimenezweb/', '') + ".js";
		import('./' + path)
			.then((module) => {
				new module.default();
			})
			.catch((error) => {
				console.error("Error loading module:", error);
			});
	}
}
export const router = new Router();
