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

interface ContenProps {
  part2: Part
  part1: Part
  part3: Part
}

const Content = ({ part1, part2, part3 }: ContenProps) => (
  <>
    <Part data={{ name: part1.name, exercise: part1.exercises }} />
    <Part data={{ name: part2.name, exercise: part2.exercises }} />
    <Part data={{ name: part3.name, exercise: part3.exercises }} />
  </>
)

const Total = ({
  exercises1,
  exercises2,
  exercises3,
}: {
  exercises1: number
  exercises2: number
  exercises3: number
}) => <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

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

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </>
  )
}

export default App
