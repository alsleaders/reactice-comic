import React, { useState, useEffect } from 'react'
import axios from 'axios'

// let RANDOM = Math.ceil(Math.random() * 2158)
const API_URL = 'https://xkcd.now.sh'

export default function HelloWorld() {
  const [comic, setComic] = useState('')
  const [number, setNumber] = useState(Math.ceil(Math.random() * 2158))

  useEffect(() => {
    axios.get(`${API_URL}/${number}`).then(resp => {
      console.log(resp.data)
      setComic(resp.data)
      console.log({ comic })
    })
  }, [])

  return (
    <section>
      <div className="boxes">
        <h1>XKCD</h1>
      </div>
      <div className="boxes">
        <ul className="buttons">
          <li>
            <button onClick={() => setNumber()}>first</button>
          </li>
          <li>
            {' '}
            <button onClick={() => setNumber(number - 1)}>previous</button>{' '}
          </li>
          <li />
          <li>
            <button onClick={() => setNumber(number + 1)}>next</button>{' '}
          </li>
          <li />
        </ul>
        <img src={comic.img} alt={comic.transcript} title={comic.alt} />
      </div>
      <div className="boxes text">
        <p>
          These comics are from the brain of Randall Monroe and from the target
          of his website, xkcd.com. I am using them for homework and because I
          think he's awesome.
        </p>
      </div>
    </section>
  )
}
