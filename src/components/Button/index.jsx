import './styles.scss'

export const Button = ({ children, type, ...rest }) => {
  return (
    <button
      type={type ? type : 'button'}
      {...rest}
    >
      {children}
    </button>
  )
}
