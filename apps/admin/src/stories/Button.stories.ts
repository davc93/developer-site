import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSizes, ButtonVariant } from "ui-react/src/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
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
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size:ButtonSizes.SMALL
  },
};

export const Wide: Story = {
  args: {
    children: 'Button',
    size:ButtonSizes.WIDE
  },
};

export const Primary: Story = {
  args: {   
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant:ButtonVariant.SECONDARY,    
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {   
    children: 'Button',
    loading:true
  },
};

export const Disabled: Story = {
  args: {   
    children: 'Button',
    disable:true
  },
};

