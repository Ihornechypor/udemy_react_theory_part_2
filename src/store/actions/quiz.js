import axios from '../../axios/axios';
import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS, FINISH_QUIZ, QUIZ_NEXT_QUESTION,
    QUIZ_SET_STATE, RETRY_QUIZ
} from "./actionTypes";

export function fetchQuizes() {
    return async dispatch =>{
        dispatch(fetchQuizesStart())
        try{
            const response = await axios.get('/quizes.json');

            const quizes = []

            Object.keys(response.data).forEach((key,index)=>{
                quizes.push({
                    id: key,
                    name: `Test num ${index + 1}`
                })
            })
            dispatch(fetchQuizesSuccess(quizes))
        } catch(e){
            dispatch(fetchQuizesErorr(e))

        }
    }
}

export function fetchQuizById(quizId) {
    return async dispath => {
        dispath(fetchQuizesStart())

        try{
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quiz = response.data;

            dispath(fetchQuizSuccess(quiz))
        } catch(e){
            dispath(fetchQuizesErorr(e))
        }
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }

}

export function fetchQuizesStart() {
    return{
        type: FETCH_QUIZES_START
    }

}

export function fetchQuizesSuccess(quizes) {
    return{
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }

}


export function fetchQuizesErorr(e) {
    return{
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}

export function quizSetState(answersState, results) {
    return {
        type: QUIZ_SET_STATE,
        answersState,
        results
    }

}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    }
}

export function quizNextQuestion(number) {
    return {
        type: QUIZ_NEXT_QUESTION,
        number
    }
}

export function retryQuiz() {
    return{
        type: RETRY_QUIZ
    }

}

export function quizAnswerClick(answerId) {
    return (dispatch,getState) => {
        const state = getState().quiz


        if(state.answerState){
            const key = Object.keys(state.answerState)[0];
            if (state.answerState[key] === 'success') {
                return;
            }
        }

        const question = state.quiz[state.activeQustion]
        const results = state.results


        if(question.listAnswersRightId === answerId){
            if(!results[question.id]){
                results[question.id] = 'success'
            }

            dispatch(quizSetState({[answerId]: 'success'}, results))


            const timeout = window.setTimeout(()=>{
                if(isQuizFinished(state)){
                    dispatch(finishQuiz())
                } else {
                    dispatch(quizNextQuestion(state.activeQustion + 1))
                }
                window.clearTimeout(timeout)
            }, 1000)


        } else {
            results[question.id] = 'error'
            dispatch(quizSetState({[answerId]: 'success'}, results))
        }
    }
}

function isQuizFinished(state){
    return state.activeQustion + 1 === state.quiz.length
}
