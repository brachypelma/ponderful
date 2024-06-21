import React from 'react'
import classes from './question.module.scss'
import { PencilEdit01Icon } from 'hugeicons-react'

const Question = () => {
  return (
    <article className={classes.question}>
      <h2 className={classes.questionText}>
        Would it matter to you if you had no free will?
      </h2>
      <section className={classes.bottom}>
        <button className={classes.editButton}>
          <PencilEdit01Icon color="#fcf8ff" />
        </button>
      </section>
    </article>
  )
}

export default Question
