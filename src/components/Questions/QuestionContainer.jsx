import React, {useState} from 'react'
import { QuestionForm } from './QuestionForm';
import { QuestionList } from './QuestionList';

export const QuestionContainer = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div>
      {showForm ? 
        <QuestionForm close={() => setShowForm(false)} /> 
        :
        <button onClick={() => setShowForm(true)}>Add question</button>
      }
      
      <QuestionList />
    </div>
  )
}
