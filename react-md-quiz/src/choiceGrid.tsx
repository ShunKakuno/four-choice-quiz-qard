import { ChoiceCard } from "./choiceCard"
import type { Choice } from "./types/quiz"

type Props = {
  choices: Choice[]
  selected: string | null
  correctId: string
  onSelect: (id: string) => void
}

export function ChoiceGrid({
  choices,
  selected,
  correctId,
  onSelect
}: Props) {
  return (
    <div className="choiceGrid">
      {choices.map(c => (
        <ChoiceCard
          key={c.selectId}
          choice={c}
          isSelected={selected === c.selectId}
          isCorrect={c.selectId === correctId}
          showResult={selected !== null}
          onClick={() => onSelect(c.selectId)}
        />
      ))}
    </div>
  )
}
