import React, { useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid'
import MainPageLayout from '../components/layout/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid'
import {apiGet} from '../misc/config'
const Home = () => {
  const [input, setInput] = useState('')
  const [results, setResults] = useState(null)
  const [searchOption, setSearchOption] = useState('shows')

  const isShowSearch = searchOption === 'shows'

  const onInputChange = e => {
    setInput(e.target.value)
  }

  const onSearch = () => {
    apiGet(`/search/${searchOption }?q=${input}`)
      .then(res => {
        setResults(res)
      })
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch()
    }
  }

  const renderResults = () => {
    if (results && !results.length) {
      return <div>No results</div>
    } else if (results && results.length) {
      return results[0].show ? 
        <ShowGrid data={results}/> : 
        <ActorGrid data={results}/>
    } else {
      return null
    }
  }

  const onRadioChange = e => {
    setSearchOption(e.target.value)
  }

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <div>
        <label 
          htmlFor="show-search"
        >
          Shows
          <input 
            id="show-search"
            type="radio"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </label>

        <label 
          htmlFor="actors-search"
        >
          Actors
          <input 
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button 
        type="button"
        onClick={onSearch}
      >
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home
