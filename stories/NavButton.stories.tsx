import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import { GlobalStyles } from 'twin.macro';
import { NavButton, NavButtonProps } from '../src';

const meta: Meta = {
  title: 'NavButton',
  component: NavButton,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template: Story<NavButtonProps> = args => (
  <>
    <GlobalStyles />
    <NavButton {...args} />
  </>
);

export const NavButtonComponent = Template.bind({});

NavButtonComponent.args = {
  isSelected: false,
  text: 'Home',
  icon: <FaHome/>
};
