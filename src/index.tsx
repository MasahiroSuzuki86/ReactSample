import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import Parent from './components/ContainerSample'
import Page from './components/ContextSample'

ReactDOM.render(
  <React.StrictMode>
    <Name />
    <Message />
    <Parent />
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
)
