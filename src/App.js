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
  return (
    <>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="いぬの画像" />
    </>
  )
}
