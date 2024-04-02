import { Button, ButtonSizes, ButtonVariant} from "ui-react/src/Button";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    children: 'Button',
    loading:false,

    disabled:false

  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size:ButtonSizes.SMALL,

    disabled:false
  },
};

export const Wide: Story = {
  args: {
    children: 'Button',
    size:ButtonSizes.WIDE,
    loading:false,

    disabled:false
  },
};

export const Loading: Story = {
  args: {   
    children: 'Button',
    loading:true,
    disabled:false

  },
};

export const Disabled: Story = {
  args: {   
    children: 'Button',
    disabled:true
  },
};