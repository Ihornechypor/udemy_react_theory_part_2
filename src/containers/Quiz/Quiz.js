import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

 
class Quiz extends Component {

    state = {
        results: {}, 
        isFinished: false,
        activeQustion: 0,
        answerState: null,
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
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQustion]
        const results = this.state.results

        if(question.listAnswersRightId === listAnswersId){
            if(!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[listAnswersId]: 'success'},
                results
            })
            const timeout = window.setTimeout(()=>{
                if(this.isQuizFunished()){
                    this.setState({
                        isFinished: true
                    })

                } else {
                    this.setState({
                        activeQustion: this.state.activeQustion + 1,
                        answerState: null
                    })
                    
                }
                window.clearTimeout(timeout)
            }, 1000)

       
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[listAnswersId]: 'error'},
                results
            })
        }
    }

    isQuizFunished(){
        return this.state.activeQustion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQustion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>
                        Quiz
                    </h2>
                    {
                        this.state.isFinished
                        ?  <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                        :  <ActiveQuiz
                                listAnswers={this.state.quiz[this.state.activeQustion].listAnswers}
                                listQuestion={this.state.quiz[this.state.activeQustion].listQuestion}
                                onListAnswerClick={this.onListAnswerClick}
                                listAnswersLen={this.state.quiz.length}
                                listAnswersNumber={this.state.activeQustion + 1}
                                ckickedAnswerState={this.state.answerState}
                            />
                    }

                
                </div>
            </div>
        )
    }
}

export default Quiz