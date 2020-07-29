import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from "../../axios/axios";
import Loader from "../../components/UI/loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById} from "../../store/actions/quiz";

 
class Quiz extends Component {

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

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>
                        Quiz
                    </h2>

                    {
                        this.props.loading || !this.props.quiz
                        ? <Loader/>
                        : this.props.isFinished
                            ?  <FinishedQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.retryHandler}
                            />
                            :  <ActiveQuiz
                                listAnswers={this.props.quiz[this.props.activeQustion].answers}
                                listQuestion={this.props.quiz[this.props.activeQustion].question}
                                onListAnswerClick={this.onListAnswerClick}
                                listAnswersLen={this.props.quiz.length}
                                listAnswersNumber={this.props.activeQustion + 1}
                                ckickedAnswerState={this.props.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        results: state.quiz.results,
        isFinished:  state.quiz.isFinished,
        activeQustion:  state.quiz.activeQustion,
        answerState:  state.quiz.answerState,
        quiz:  state.quiz.quiz,
        loading:  state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz)