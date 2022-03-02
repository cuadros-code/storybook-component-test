import './mylabel.css'

export interface MyLabelProps {
  label : string
  size? : 'normal' | 'h1' | 'h2' | 'h3'
  color?: string
}

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