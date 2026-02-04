export type Choice = {
  selectId: string
  text: string
}

export type Quiz = {
  title: string
  categories?: string[]
  level?: "1" | "2" | "3" | "4" | "5"
  explanation: string
  createdAt?: string
  correctQuizId: "1" | "2" | "3" | "4"
  choices: Choice[]
}
