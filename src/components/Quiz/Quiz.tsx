import { Question } from "./Question"
import { Answers } from "./Answers"
import "./quiz.css"

export default function Quiz() {
    return (
        <div className="quizBox">
            <Question />
            <Answers />
        </div>
    )
}