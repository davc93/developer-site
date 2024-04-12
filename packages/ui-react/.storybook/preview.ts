import type { Preview } from "@storybook/react";
// import "ui-styles/src/globals.css"
import "ui-styles/src/variables.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'var(--storybook-surface)',
        },
        {
          name: 'light',
          value: 'var(--storybook-surface)',
        },
      ],
    },

  },
};

export default preview;
