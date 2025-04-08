const Header = ({ title }: { title: string }) => <h1>{title}</h1>

interface PartProps {
  data: { name: string; exercise: number }
}
const Part = ({ data }: PartProps) => (
  <>
    <p>
      {data.name} {data.exercise}
    </p>
  </>
)

interface Part {
  name: string
  exercises: number
}

type Parts = Array<Part>

interface ContenProps {
  parts: Parts
}

const Content = ({ parts }: ContenProps) => {
  return parts.map((part) => {
    return (
      <>
        <Part data={{ name: part.name, exercise: part.exercises }} />
      </>
    )
  })
}

interface TotalProps {
  parts: Parts
}

const Total = ({ parts }: TotalProps) => {
  const calculation = parts
    .reduce((acc, item) => {
      acc = item.exercises + acc
      return acc
    }, 0)
    .toString()
  return <p>Number of exercises {calculation}</p>
}

const App = () => {
  // const-definitions
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }

  const { name, parts } = course

  return (
    <>
      <Header title={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App
