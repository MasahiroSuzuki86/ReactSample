import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Name from './components/Name'
import Message from './components/Message'
import Parent from './components/ContainerSample'
import Page from './components/ContextSample'
import Counter from './components/HookSample'
import CounterNeo from './components/UseReducerSample'

ReactDOM.render(
  <React.StrictMode>
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={1} />
    <CounterNeo initialValue={2} />
  </React.StrictMode>,
  document.getElementById('root')
)
