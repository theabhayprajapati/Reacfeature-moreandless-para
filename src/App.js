import React, { useState } from 'react'
import data from './data'
import Question from './Question'
function App() {
  const [questions, setquestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>questions and answers regarding the login </h3>
        <div className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />
          })}
        </div>
      </div>
    </main>
  )
}

export default App
