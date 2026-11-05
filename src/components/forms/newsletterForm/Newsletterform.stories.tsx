import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NewsletterForm } from './NewsletterForm';
import { fn } from 'storybook/test';

const meta: Meta<typeof NewsletterForm> = {
  title: 'Forms/Newsletters',
  component: NewsletterForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'User Newsletter Subscription Form',
      },
    },
  },

  args: {
    action: fn(),
  },

  argTypes: {
    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    action: {
      control: false,
      description: 'Server Action',
    },

    isPending: {
      control: 'boolean',
      description: 'Form submission pending state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
