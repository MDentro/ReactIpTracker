import React, { useState, useEffect } from 'react'
import iconArrow from '../../images/icon-arrow.svg'
import './Search.css'

const Search = ({ setIp }) => {
  const [saveIp, setSaveIp] = useState('')

  const handleChange = (e) => {
    setSaveIp(e.target.value.trim())
  }

  const showNewMap = () => {
    setIp(saveIp)
    setSaveIp('')
  }

  useEffect(() => {
    if (window.innerWidth >= 700) {
      const detailsContainer =
        document.getElementsByClassName('details-container')[0]
      const widthEachSection =
        detailsContainer.getBoundingClientRect().width / 4

      // Desktop calculation to match the width of the element below:
      //widthEachSection * 2 (two sections) - 70 (width of the button 50px and the padding of the details-container 20px) + 'px'.
      document.getElementById('input-element').style.width =
        widthEachSection * 2 - 70 + 'px'
    } else {
      // Mobile calculation 80% width - 50px for the button.
      const element = document.getElementById('input-element')
      element.style.setProperty('width', 'calc(80% - 50px)')
    }
  }, [])

  return (
    <form>
      <input
        id="input-element"
        type="text"
        name="ip"
        value={saveIp}
        onChange={handleChange}
        placeholder="Search for any IP address or domain"
      />
      <button className="search-button" type="button" onClick={showNewMap}>
        <img
          className="arrow-icon"
          src={iconArrow}
          alt="arrow"
          onClick={showNewMap}
        />
      </button>
    </form>
  )
}

export default Search
