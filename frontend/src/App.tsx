import { useState, useEffect } from 'react'
import './App.css'
import * as api from './openapi'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    console.log(title)
    return () => console.log('cleanup')
  }, [title])
  useEffect(() => { console.log(description) }, [description])

  useEffect(() => {
    (async () => {
      const item = await api.getTodoItem({ itemId: 1 })
      console.log(item.itemId, item.title, item.description)
    })()
  }, [])

  const onSubmitClick = async () => {
    const req = await api.postTodoItem({ title, description })
    console.log(req.itemId, req.title, req.description)
  }

  return (
    <>
      <h1>Example App</h1>
      <div className="card">
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' onChange={e => setTitle(e.target.value)}/>
        <br/>
        <label htmlFor='description'>Description</label>
        <textarea id='description' rows={3} cols={30} onChange={e => setDescription(e.target.value)}/>
      </div>
      <div className="card">
        <button onClick={onSubmitClick}>Submit</button>
      </div>
      <p className="read-the-docs">
        This is example app using <a href='https://github.com/mahaker/openapi-generator-gas'>openapi-generator-gas</a>
      </p>
    </>
  )
}

export default App
