import React, { useState, useEffect } from 'react'
import axios from 'axios'

// let RANDOM = Math.ceil(Math.random() * 2158)
const API_URL = 'https://xkcd.now.sh'

export default function HelloWorld() {
  const [comic, setComic] = useState('')
  const [number, setNumber] = useState(Math.ceil(Math.random() * 2158))
  const [soThere, setSoThere] = useState('')

  console.log({ number })

  useEffect(() => {
    getComic(number)
  }, [number])

  const getComic = number => {
    axios.get(`${API_URL}/${number}`).then(resp => {
      setComic(resp.data)
    })
    axios
      .get(
        'https://www.foaas.com/field/programmer/user/person in need of coffee'
      )
      .then(resp => {
        setSoThere(resp.data.message)
      })
  }

  return (
    <section>
      <div className="boxes">
        <h1>RANDOM XKCD</h1>
      </div>
      <div className="boxes">
        <section>
          <h2>{comic.safe_title}</h2>
          <ul className="buttons">
            <button onClick={() => setNumber(1)}>←</button>
            <button onClick={() => getComic(number - 1)}>previous</button>
            <button onClick={() => getComic(Math.ceil(Math.random() * 2158))}>
              random
            </button>
            <button onClick={() => getComic(number + 1)}>next</button>
            <button onClick={() => getComic('')}>→</button>
          </ul>
        </section>
        <img src={comic.img} alt={comic.transcript} title={comic.alt} />
      </div>
      <div className="boxes text">
        <p>
          These comics are from the brain of Randall Monroe and from the target
          of his website, xkcd.com. I am using them for homework and because I
          think he's awesome.
        </p>
      </div>
      <div className="boxes text">
        <p>
          If you did not enjoy this site, please stand by for the following
          message:
        </p>
        <p> {soThere}</p>
      </div>
    </section>
  )
}
