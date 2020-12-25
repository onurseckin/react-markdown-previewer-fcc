const Toolbar = (props) => {
  return (
    <div className={props.className}>
      <i className={props.icon} />
      {props.text}
    </div>
  )
}

export default Toolbar
