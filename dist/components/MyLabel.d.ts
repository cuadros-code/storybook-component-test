/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Label text
    */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Label color hex code
     */
    color?: string;
    /**
     * If true, label will be rendered in all caps
     */
    allCaps?: boolean;
    /**
     * background color hex code
     */
    backgroundColor?: string;
}
/**
 * Label component
 */
export declare const MyLabel: (props: MyLabelProps) => JSX.Element;
export default MyLabel;
