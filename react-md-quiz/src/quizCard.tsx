import { useState } from 'react'
import { Tag } from "./tag"
import { ChoiceGrid } from "./choiceGrid"
import { QuizMarkdown } from "./util/quizMarkdown"
import type { Choice } from "./types/quiz"

type Props = {
  title: string
  categories?: string[]
  level?: "1" | "2" | "3" | "4" | "5"
  explanation: string
  createdAt?: string
  correctQuizId: "1" | "2" | "3" | "4"
  choices: Choice[]
}

export function QuizCard({ title, categories, level, explanation, createdAt, correctQuizId, choices }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const isCorrect = selected === correctQuizId

  const correctChoice = choices?.find(
    c => c.selectId === correctQuizId
  )
  
  const levelNum = Number(level)
  const levelPercent = levelNum * 20
  const levelLabelMap = ["超簡単", "簡単", "普通", "難しい", "鬼むず"]
  const levelLabel = levelLabelMap[levelNum - 1] ?? "不明"

  const handleSelect = (id: string) => {
    if (selected) return

    setSelected(id)
    setShowExplanation(false)
  }

  return (
    <div className="quizCard">
      <h2><QuizMarkdown content={title} /></h2>
      <div className="tagSpan">
        <Tag categories={categories} />
      </div>
      <div className="difficultyWrap">
        <span className="difficultyLabel">難易度</span>

        <div className="difficultyBar">
          <div
            className="difficultyFill"
            style={{ width: `${levelPercent}%` }}
          />
        </div>

        <span className="difficultyText">
          Lv.{levelNum} / {levelLabel}
        </span>
      </div>
      <ChoiceGrid
        choices={choices}
        selected={selected}
        correctId={correctQuizId}
        onSelect={handleSelect}
      />

      {selected && (
        <>
          <div className={`result ${isCorrect ? "correct" : "incorrect"}`}>
            <span className="icon">{isCorrect ? "⭕" : "✖️"}</span>
            <span className="text">{isCorrect ? "正解！" : "不正解"}</span>
          </div>

          <button
            className="explanationButton"
            onClick={() => setShowExplanation(prev => !prev)}
          >
            {showExplanation ? "解説を閉じる" : "解説を見る"}
          </button>

          {showExplanation && (
            <>
              <div className="explanation"><QuizMarkdown content={explanation} /></div>
            </>
          )}
        </>
      )}
    </div>
  )
}

