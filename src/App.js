import { useState } from 'react'
import Header from './components/Header'
import NoteList from './components/NoteList'

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <NoteList></NoteList>
    </div>
  )
}
