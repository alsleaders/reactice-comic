import React, { useState, useEffect } from 'react'
import axios from 'axios'

let RANDOM = Math.ceil(Math.random() * 2158)
const API_URL = 'https://xkcd.now.sh'

export default function HelloWorld() {
  const [comic, setComic] = useState('')

  useEffect(() => {
    axios.get(`${API_URL}/${RANDOM}`).then(resp => {
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
        <img src={comic.img} alt={comic.transcript} title={comic.alt} />
      </div>
    </section>
  )
}
