import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
 
class Quiz extends Component {

    state = {
        activeQustion: 0,
        quiz: [
            {   
                id: 1,
                listQuestion: 'some question?',
                listAnswersRightId: 3,
                listAnswers: [
                    {text: 'q1', id: 1},
                    {text: 'q2', id: 2},
                    {text: 'q3', id: 3},
                    {text: 'q4', id: 4}
                ]
            },
            {   
                id: 2,
                listQuestion: 'some question next?',
                listAnswersRightId: 2,
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

        this.setState({
            activeQustion: this.state.activeQustion + 1
        })

    }

    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>
                        Quiz
                    </h2>
                    <ActiveQuiz
                        listAnswers={this.state.quiz[this.state.activeQustion].listAnswers}
                        listQuestion={this.state.quiz[this.state.activeQustion].listQuestion}
                        onListAnswerClick={this.onListAnswerClick}
                        listAnswersLen={this.state.quiz.length}
                        listAnswersNumber={this.state.activeQustion + 1}
                        
                    />
                
                </div>
            </div>
        )
    }
}

export default Quiz