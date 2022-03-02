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
}

/**
 * Label component
 */
const MyLabel = ( props: MyLabelProps ) => {

  const {
    label = 'Default label',
    size  = 'normal',
    color = 'black'
  } = props

  return (
    <span 
      className={`${size}`}
      style={{ color }}
    >
      { label }
    </span>
  )
}

export default MyLabel