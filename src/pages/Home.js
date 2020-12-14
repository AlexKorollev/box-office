import React, { useState } from 'react'
import MainPageLayout from '../components/layout/MainPageLayout'

const Home = () => {
  const [input, setInput] = useState('')

  const onInputChange = e => {
    setInput(e.target.value)
  }

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(res => {
        console.log(res)
      })
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch()
    }
  }

  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <button 
        type="button"
        onClick={onSearch}
      >
        Search
      </button>
    </MainPageLayout>
  )
}

export default Home
