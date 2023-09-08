import type { Meta, StoryObj } from '@storybook/react';
import Main from '.';

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {};
