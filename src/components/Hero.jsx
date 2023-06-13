import React from 'react'

import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <button
                type="button"
                onClick={() => window.open("https://github.com/")}
                className="black_btn"
            >
                GitHub
            </button>
        </nav>
        <h1 className="head_text">
            Summarize using AI <br className="max-md:hidden"/>
            <span className="orange_gradient">
                OPENAI GPT-4
            </span>
        </h1>
        <h2 className="desc">
        "Harness the AI revolution for effortless text summarization. Unleash the power of our web app to distill complex information into concise summaries, providing you with valuable insights in an instant."
        </h2>
    </header>
  )
}

export default Hero