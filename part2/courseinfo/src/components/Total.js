import React from 'react'

export default function Total({ parts }) {
  const exercises = parts.map((part) => part.exercises)
  const total = exercises.reduce((acc, cur) => {
    return acc + cur
  })
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  )
}
