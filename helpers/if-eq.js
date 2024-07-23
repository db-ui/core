/* eslint-disable-next-line unicorn/prefer-module, unicorn/no-anonymous-default-export */
module.exports = function (Handlebars) {
	Handlebars.registerHelper('if_eq', function (a, b, options) {
		/* eslint-disable-next-line eqeqeq */
		if (a == b) {
			return options.fn(this);
		}

		return options.inverse(this);
	});
};
