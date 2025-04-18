

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/html-webpack5",
    "options": {}
  }
};
export default config;