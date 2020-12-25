import { useState } from 'react'
import Editor from './Editor'
import Preview from './Preview'
import Toolbar from './Toolbar'
import { Placeholder } from './Placeholder'
import './App.scss'

function App() {
  const [content, setContent] = useState(Placeholder)
  const handleChange = (e) => {
    setContent(e.target.value)
  }
  return (
    <div className='App'>
      <Toolbar id='header' className='header' text='Markdown Previewer' />
      <div className='container'>
        <div className='editor-wrapper'>
          <Toolbar className='toolbar' text='Editor' />
          <Editor content={content} onChange={handleChange} />
        </div>
        <div className='preview-wrapper'>
          <Toolbar className='toolbar' text='Previewer' />
          <Preview content={content} />
        </div>
      </div>
    </div>
  )
}

export default App
