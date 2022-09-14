import React from 'react'
import { QuestionForm } from './QuestionForm';
import { QuestionList } from './QuestionList';

export const QuestionContainer = () => {
  return (
    <div>
      <QuestionForm /> 
      <QuestionList />
    </div>
  )
}
