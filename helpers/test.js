/* eslint-disable-next-line unicorn/prefer-module, unicorn/no-anonymous-default-export */
module.exports = function (Handlebars) {
	Handlebars.registerHelper('test', function () {
		return 'This is a test helper';
	});
};
