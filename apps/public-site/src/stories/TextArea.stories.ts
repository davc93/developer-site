import type { StoryObj, Meta } from '@storybook/html'
import { type TextAreaProps, createTextArea } from '../components/atoms/TextArea'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Textarea',
  tags: ['autodocs'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createTextArea(args)
  },
  argTypes: {
    label: { control: 'text' }
  }
} satisfies Meta<TextAreaProps>

export default meta
type Story = StoryObj<TextAreaProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const TextArea: Story = {
  args: {
    label: 'Message'
  }
}
