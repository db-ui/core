/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
	{
		ignores: [
			'**/*.plugin.js',
			'source/fonts/**/sources/',
			'helpers/test.js',
			'tests/backstop_data/engine_scripts/',
			'out/**/*',
			'dist/**/*',
			'**/*.min.js',
			'source/_patterns/02-components/dialog/focus-restore.dialog.plugin.js'
		],
		prettier: true,
		rules: {
			'one-var': 0,
			'no-use-before-define': 0,
			'no-console': 'error'
		}
	}
];

export default xoConfig;
