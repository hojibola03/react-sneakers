/** @format */
import React from 'react'

import './App.scss'

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src=" /img/logo.svg" alt="logo" />
          <div>
            <h3 className="text-uppercase ">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <div>
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="/img/card.svg" alt="icon" />
              <spn>1205 руб.</spn>
            </li>
            <li>
              <img width={20} height={20} src="/img/heart.svg" alt="heart" />
              <img width={20} height={20} src="/img/human.svg" alt="heart" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex justify-between">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneaker1.svg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="/img/Plus.svg" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneaker2.svg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="/img/Plus.svg" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneaker3.svg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="/img/Plus.svg" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneaker4.svg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="/img/Plus.svg" alt="+" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
