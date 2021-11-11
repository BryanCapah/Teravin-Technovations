import { addRowAction, submisionAction } from "../../stores/reducers/submission"
import store from "../../stores/store"

export const onChange = ({ e, inputType, formName }) => {
    if (inputType !== 'action') store.dispatch(submisionAction(setData({ e, inputType, formName })))
    else store.dispatch(addRowAction(setData({ e, inputType, formName })))
}

const setData = ({ e, inputType, formName }) => {
    const {
        value,
        name,
        options,
        selectedIndex
    } = e.target

    switch (inputType) {
        case 'text':
            return { name, value, formName }

        case 'select':
            const data = {
                label: options[selectedIndex].text,
                value: value
            }
            return { name, value: data, formName }

        case 'radio':
            return { name, value, formName }
        case 'action':
            return { formName }

        default:
            break
    }
}

export const setPersonalData = ({ state, action }) => {
    const { name, value, formName } = action.payload
    const idx = state[formName]?.length - 1
    if (value || value === '') {
        if (formName === 'personalData') return {
            ...state,
            [formName]: {
                ...state[formName],
                [name]: value
            }
        }
        else {
            return {
                ...state,
                [formName]: state[formName]?.map((item, index) => {
                    if (index === idx) return { ...item, [name]: value }
                    else return { ...item }
                })
            }

        }
    }
}

export const addNewRow = ({ state, action }) => {
    const { formName } = action.payload
    return {
        ...state,
        [formName]: [...state[formName], {}]
    }
}
