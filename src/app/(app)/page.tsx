import Question from '@/components/question/Question'
import Nav from '@/components/nav/Nav'
import React from 'react'

const Page = () => {
  return (
    <>
      <Nav />
      <main>
        <Question />
      </main>
      <div className="background"></div>
    </>
  )
}

export default Page
