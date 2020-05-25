import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
 
class Quiz extends Component {

    state = {
        quiz: [
            {
                listAnswers: [
                    {text: 'q1'},
                    {text: 'q2'},
                    {text: 'q3'},
                    {text: 'q4'}
                ]
            }
        ]
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
                    />
                </div>
            </div>
        )
    }
}

export default Quiz