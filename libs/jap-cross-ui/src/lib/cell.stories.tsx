import { Story, Meta } from '@storybook/react';
import Cell, {CellProps} from "./cell";

export default {
  component: Cell,
  title: 'Cross/Cell',
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 0
};
