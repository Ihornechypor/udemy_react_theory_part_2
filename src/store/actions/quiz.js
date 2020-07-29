import axios from '../../axios/axios';
import {FETCH_QUIZ_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "./actionTypes";

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