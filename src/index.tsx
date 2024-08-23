import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import Parent from './components/ContainerSample'

ReactDOM.render(
  <React.StrictMode>
    <Name />
    <Message />
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
)
