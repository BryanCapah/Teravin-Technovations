import { configureStore } from '@reduxjs/toolkit'
import submissionReducer from './reducers/submission'
import submissionListReducer from './reducers/submissionList'

export default configureStore({
    reducer: {
        submission: submissionReducer,
        submissionList: submissionListReducer
    },
})
