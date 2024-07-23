/* eslint-disable-next-line unicorn/prefer-module */
module.exports = function (Handlebars) {
	Handlebars.registerHelper('unique-id', function () {
		const crypto = require('node:crypto');

		return `id-${crypto.randomUUID()}`;
	});
};
