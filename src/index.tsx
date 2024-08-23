import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'

ReactDOM.render(
  <React.StrictMode>
    <Name />
    <Message />
  </React.StrictMode>,
  document.getElementById('root')
)
