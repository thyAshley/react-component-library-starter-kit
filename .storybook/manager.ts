import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
	base: 'light',
});

addons.setConfig({
	theme,
});
