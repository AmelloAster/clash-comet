module.exports = {
	extends: ['next', 'react-hook', 'prettier'],
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/']
		}
	},
	rules: {
		'no-html-link-for-pages': 'off'
	}
};
