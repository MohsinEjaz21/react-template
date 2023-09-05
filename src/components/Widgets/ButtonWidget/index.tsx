import clsx from 'classnames'
import style from './index.module.scss'

function ButtonWidget({
  kind = "ok" as ("ok" | "cancel" | "submit"),
  onClick = () => { },
  children
}) {
  return (
    <button
      type="button"
      className={clsx(style.btn, style[`btn__${kind}`],)}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonWidget