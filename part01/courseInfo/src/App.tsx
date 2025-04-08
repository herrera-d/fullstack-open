const Header = ({ course }: { course: string }) => <h1>{course}</h1>

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
  const course = "Half Stack application development"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  }
  const part3 = {
    name: "State of a component",
    exercises: 14,
  }

  const parts = [part1, part2, part3]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App
