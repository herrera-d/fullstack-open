import { useState } from "react"
import "./App.css"

interface Button {
  name: string
  handler: () => void
}

const Buttons = ({ buttonsData }: { buttonsData: Array<Button> }) =>
  buttonsData.map((button: Button) => (
    <button className="feedback-buttons" onClick={button.handler}>
      {button.name}
    </button>
  ))

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttonData = [
    {
      name: "Good",
      handler: () => setGood(good + 1),
    },
    {
      name: "Neutral",
      handler: () => setNeutral(neutral + 1),
    },
    {
      name: "Bad",
      handler: () => setBad(bad + 1),
    },
  ]

  return (
    <div>
      <h1>Give Feedback!</h1>
      <div>
        <Buttons buttonsData={buttonData} />
      </div>
      <div>
        <h2>Results</h2>
        <div className="result-container">
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </div>
    </div>
  )
}

export default App
