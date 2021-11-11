import { createSlice } from '@reduxjs/toolkit'
import { addNewRow, setPersonalData } from '../../../components/Form/services'

const initialState = {
    personalData: {
    },
    riwayatPendidikan: [{}],
    pengalamanKerja: [{}],
    keahlian: [{}]
}

const submission = createSlice({
    name: 'submission',
    initialState,
    reducers: {
        submisionAction(state, action) {
            return setPersonalData({ state, action })
        },
        addRowAction(state, action) {
            return addNewRow({ state, action })
        }
    },
})

// getter
export const getPersonalData = state => state?.submission?.personalData
export const getRiwayatPendidikan = state => state?.submission?.riwayatPendidikan
export const getPengalamanKerja = state => state?.submission?.pengalamanKerja
export const getKeahlian = state => state?.submission?.keahlian
export const getSubmission = state => state?.submission

//setter
export const { submisionAction, addRowAction } = submission.actions
export default submission.reducer
