const Header = ({ course }: { course: string }) => <h1>{course}</h1>
const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}: {
  part1: string
  exercises1: number
  part2: string
  exercises2: number
  part3: string
  exercises3: number
}) => (
  <>
    <p>
      {part1} {exercises1}
    </p>
    <p>
      {part2} {exercises2}
    </p>
    <p>
      {part3} {exercises3}
    </p>
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
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  const contentData = {
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3,
  }

  return (
    <div>
      <Header course={course} />
      <Content {...contentData} />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App
