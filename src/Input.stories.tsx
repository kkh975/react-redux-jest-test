import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;;

const InputTemplate: Story<InputProps> = (args) => <Input {...args} />;

export const Create = InputTemplate.bind({});
Create.storyName = "생성"
Create.args = {
  mode: "create",
}

export const Modify = InputTemplate.bind({});
Modify.storyName = "수정"
Modify.args = {
  mode: "modify",
}