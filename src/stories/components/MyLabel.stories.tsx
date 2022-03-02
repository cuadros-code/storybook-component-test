import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
  title     : 'Components/Label',
  component : MyLabel
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Label',
  size: "h2"
}
