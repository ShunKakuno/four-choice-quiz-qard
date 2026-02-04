import { QuizCard } from "react-md-quiz"

type Choice = {
  selectId: string
  text: string
}

function App() {
  const title = "test title"
  const categories = ["test1", "test2", "test3"]
  const level = "5"
  const explanation = "thii is test"
  const createdAt = "2026-02-04"
  const correctQuizId = "1"
  const choices: Choice[] = [
  { selectId: "1", text: "test1" },
  { selectId: "2", text: "test2" },
  { selectId: "3", text: "test3" },
  { selectId: "4", text: "test4" },
]
  return (
    <>
      <h2>クイズカードテスト</h2>

      <QuizCard 
        title={title}
        categories={categories}
        level={level}
        explanation={explanation}
        createdAt={createdAt}
        correctQuizId={correctQuizId}
        choices={choices}
        />
    </>
  )
}

export default App
