import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Item, { ItemProps } from './Item';

export default {
  title: 'Components/Item',
  component: Item,
} as Meta;;

const ItemTemplate: Story<ItemProps> = (args) => <Item {...args} />;

export const IsDone = ItemTemplate.bind({});
IsDone.args = {
  isDone: true,
  onToggle: () => {},
  onDone: () => {},
  onRemove: () => {},
}

export const IsNotDone = ItemTemplate.bind({});
IsNotDone.args = {
  isDone: false,
  onToggle: () => {},
  onDone: () => {},
  onRemove: () => {},
}