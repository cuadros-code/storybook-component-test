import './mylabel.css'

export interface MyLabelProps {
  /**
  * Label text
  */
  label : string

  /**
   * Label size
   */
  size? : 'normal' | 'h1' | 'h2' | 'h3'

  /**
   * Label color hex code
   */
  color?: string

  /**
   * If true, label will be rendered in all caps
   */
  allCaps?: boolean
}

/**
 * Label component
 */
const MyLabel = ( props: MyLabelProps ) => {

  const {
    label   = 'Default label',
    size    = 'normal',
    color   = 'black',
    allCaps = false
  } = props

  return (
    <span 
      className={
        `${size} ${allCaps && 'uppercase'}`
      }
      style={{ color }}
    >
      { label }
    </span>
  )
}

export default MyLabel