import { InlineMarkdown } from "./util/inlineMarkdown"
import type { Choice } from "./types/quiz"

type Props = {
  choice: Choice
  isSelected: boolean
  isCorrect: boolean
  showResult: boolean
  onClick: () => void
}

export function ChoiceCard({
  choice,
  isSelected,
  isCorrect,
  showResult,
  onClick
}: Props) {

  const className = [
    "choiceCard",
    showResult && isCorrect ? "correct" : "",
    showResult && !isCorrect && isSelected ? "incorrect" : "",
    !showResult && isSelected ? "selected" : "",
  ].join(" ")

  return (
    <button
      onClick={onClick}
      disabled={showResult}
      className={className}
    >
      <InlineMarkdown content={choice.text} />
    </button>
  )
}
