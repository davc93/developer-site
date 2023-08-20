import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/html-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions"), getAbsolutePath("@storybook/addon-mdx-gfm"), getAbsolutePath("@storybook/addon-mdx-gfm")],
  framework: {
    name: getAbsolutePath("@storybook/html-vite"),
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}