/* eslint unicorn/prefer-module: 0, eqeqeq: 0 */
module.exports = function (Handlebars) {
	Handlebars.registerHelper('unique-id', function () {
		// Adapted from https://www.codingdeft.com/posts/generate-uuid-javascript/
		const crypto = require('node:crypto');

		const buf = crypto.randomBytes(16);

		// Convert the buffer to a hexadecimal string
		const hex = buf.toString('hex');

		// Return the hexadecimal string as a UUID
		return `id-${hex.slice(
			0,
			7
		)}-${hex.slice(8, 15)}-${hex.slice(16, 23)}-${hex.slice(24, 31)}`;
	});
};
