// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img
        src="https://images.dog.ceo/breeds/mountain-bernese/n02107683_5699.jpg"
        alt="いぬの画像"
      />
    </>
  )
}
