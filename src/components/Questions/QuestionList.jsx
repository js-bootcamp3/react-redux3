import React from 'react'
import {useSelector} from 'react-redux'

export const QuestionList = () => {
  const questions = useSelector(store => store.questions)
  console.log('questions', questions)
  return (
    <div>
      <h1>Questions</h1>
      <div>{questions.map(q => (
        <div key={q.id}>
          <div>{q.question}</div>
          <div>
            {q.answers.map(a => (
              <div 
                key={a.name} 
                style={a.correct ? {color: 'green'} : {}}
              >
                {a.name}
              </div>
            ))}
          </div>
        </div>
      ))}</div>
    </div>
  )
}
