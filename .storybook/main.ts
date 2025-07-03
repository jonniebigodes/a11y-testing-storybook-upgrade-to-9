import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
   stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
  docs: {}
}
export default config
