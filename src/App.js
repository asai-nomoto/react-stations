// DO NOT DELETE

// import * as React from 'react'
import './App.css'
import React, { useState } from 'react'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setdogUrl] = useState(
    'https://images.dog.ceo/breeds/mountain-bernese/n02107683_5699.jpg',
  )
  const changeDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(
        result => {
          setdogUrl(result.message)
        },
        error => {
          console.log(error)
        },
      )
  }
  return (
    <>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="いぬの画像" />
      <br />
      <button onClick={changeDog}>更新</button>
    </>
  )
}
