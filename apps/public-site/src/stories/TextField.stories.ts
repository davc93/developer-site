import type { StoryObj, Meta } from '@storybook/html'
import { type InputProps, createInput } from '../components/atoms/Input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'TextField',
  tags: ['autodocs'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createInput(args)
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' }
  }
} satisfies Meta<InputProps>

export default meta
type Story = StoryObj<InputProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const TextField: Story = {
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
    error: 'Nombre incorrecto'
  }
}
