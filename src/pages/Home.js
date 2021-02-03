import React, { useState, useEffect, useCallback } from 'react'
import ActorGrid from '../components/actor/ActorGrid'
import CustomRadio from '../components/CustomRadio'
import MainPageLayout from '../components/layout/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid'
import {apiGet} from '../misc/config'
import { useLastQuery } from '../misc/custom-hooks'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled'


const renderResults = (results) => {
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

const Home = () => {
  const [input, setInput] = useLastQuery()
  const [results, setResults] = useState(null)
  const [searchOption, setSearchOption] = useState('shows')

  const isShowSearch = searchOption === 'shows'


  const onInputChange = useCallback(e => {
    setInput(e.target.value)
  }, [setInput])

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

  const onRadioChange = useCallback(e => {
    setSearchOption(e.target.value)
  }, [])

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Search"
        value={input}
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button 
          type="button"
          onClick={onSearch}
        >
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(results)}
    </MainPageLayout>
  )
}

export default Home
