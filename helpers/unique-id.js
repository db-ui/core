/* eslint unicorn/prefer-module: 0, eqeqeq: 0 */
module.exports = function (Handlebars) {
	Handlebars.registerHelper('unique-id', function () {
		const crypto = require('node:crypto');

		return `id-${crypto.randomUUID()}`;
	});
};
