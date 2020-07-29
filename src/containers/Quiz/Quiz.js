import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from "../../components/UI/loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";

 
class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuiz()
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
                                onRetry={this.props.retryQuiz}
                            />
                            :  <ActiveQuiz
                                listAnswers={this.props.quiz[this.props.activeQustion].answers}
                                listQuestion={this.props.quiz[this.props.activeQustion].question}
                                onListAnswerClick={this.props.quizAnswerClick}
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
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerID => dispatch(quizAnswerClick(answerID)),
        retryQuiz: () => dispatch(retryQuiz())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz)