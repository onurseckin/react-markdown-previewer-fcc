const Editor = (props) => {
  const { content, onChange } = props
  return (
    <div>
      <textarea id='editor' onChange={onChange} type='text' value={content} rows='auto' />
    </div>
  )
}

export default Editor
