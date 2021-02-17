import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args}>hello</Button>;

export const SCButton = Template.bind({});

SCButton.args = {
  isPrimary: true,
  isSecondary: false,
  isSmall: false,
};