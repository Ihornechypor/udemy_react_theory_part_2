import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
 
class Quiz extends Component {

    state = {
        quiz: [
            {
                listQuestion: 'some question?',
                listAnswersRightId: 3,
                listAnswers: [
                    {text: 'q1', id: 1},
                    {text: 'q2', id: 2},
                    {text: 'q3', id: 3},
                    {text: 'q4', id: 4}
                ]
            }
        ]
    }

    onListAnswerClick = (listAnswersId) =>{
        console.log(listAnswersId)

    }

    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>
                        Quiz
                    </h2>
                    <ActiveQuiz
                        listAnswers={this.state.quiz[0].listAnswers}
                        listQuestion={this.state.quiz[0].listQuestion}
                        onListAnswerClick={this.onListAnswerClick}
                    />
                
                </div>
            </div>
        )
    }
}

export default Quiz