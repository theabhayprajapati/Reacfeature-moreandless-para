import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showinfo, setshowinfo] = useState(false)

  return (
    <article className="question">
      <header>
        {title}

        <button
          onClick={() => {
            setshowinfo(!showinfo) 
          }}
          className="btn"
        >
          {showinfo === false ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showinfo && <p>{info}</p>}
    </article>
  )
}

export default Question
