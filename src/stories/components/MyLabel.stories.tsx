import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
  title     : 'Components/Label',
  component : MyLabel,
  argTypes  : {
    color : { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Label',
  size: "normal",
  allCaps: false,
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Label',
  size: "normal",
  allCaps: true,
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Label',
  size: "normal",
}
