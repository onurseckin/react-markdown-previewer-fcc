import marked from 'marked'

marked.setOptions({
  breaks: true,
})
const renderer = new marked.Renderer()
renderer.link = function (href, title, text) {
  //eslint-disable-next-line
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.content, { renderer: renderer }),
      }}
      id='preview'
    />
  )
}

export default Preview
