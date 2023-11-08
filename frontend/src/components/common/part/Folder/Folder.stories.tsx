import type { Meta, StoryObj } from '@storybook/react';
import { Folder } from './';
import { propObj } from './Folder.props';

const meta: Meta<typeof Folder> = {
  component: Folder,
  tags: ['Common/part/Folder'],
};

export default meta;
type Story = StoryObj<typeof Folder>;

export const isOpenFalse: Story = {
  render: () => <Folder {...propObj.isOpenFalse} />,
};

export const isOpenTrue: Story = {
  render: () => <Folder {...propObj.isOpenTrue} />,
};
