import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const submissionList = createSlice({
    name: 'addList',
    initialState,
    reducers: {
        submisionListAction(state, action) {

            state.push(action.payload)
        },
    },
})

// getter
export const getSubmissionList = state => state?.submissionList
export const getSubmissionDetail = ({ state, id }) => state?.submissionList?.filter(submission => submission.id === Number(id))[0]

//setter
export const { submisionListAction } = submissionList.actions
export default submissionList.reducer
