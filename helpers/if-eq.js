/* eslint unicorn/prefer-module: 0, eqeqeq: 0 */
module.exports = function (Handlebars) {
	Handlebars.registerHelper('if_eq', function (a, b, options) {
		if (a == b) {
			return options.fn(this);
		}

		return options.inverse(this);
	});
};
