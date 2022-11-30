module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
	],
	core: {
		builder: '@storybook/builder-vite',
	},
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	async viteFinal(config, options) {
		// Add your configuration here
		return config;
	},
};
