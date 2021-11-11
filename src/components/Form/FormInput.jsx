import { Input } from "@chakra-ui/input"
import { Box } from "@chakra-ui/layout"
import { Radio, RadioGroup } from "@chakra-ui/radio"
import { Select } from "@chakra-ui/select"
import { Switch } from "@chakra-ui/switch"
import { useSelector } from "react-redux"
import { getSubmission } from "../../stores/reducers/submission"
import Button from "../Button"

export default function FormInput({
    data,
    onChange,
    idx
}) {
    const {
        formName,
        name,
        title,
        required,
        inputType,
        options = [],
    } = data
    const select = inputType === 'select'
    const radio = inputType === 'radio'
    const switchs = inputType === 'switch'
    const button = inputType === 'action'

    const submission = useSelector(getSubmission)
    const index = submission[formName]?.length - 1
    const noListField = submission[formName][name]
    const listField = submission[formName][index] && submission[formName][index][name]
    const value = noListField || listField || ''

    if (select) return (
        <Select
            id={`${name}_${idx}`}
            name={name}
            className='border-2 rounded-md p-2 w-full'
            required={required}
            onChange={(e) => onChange({ e, inputType: 'select', formName })}
            placeholder={`Select ${title}`}>
            {
                options.map(option => {
                    const { label, value } = option
                    return (
                        <option
                            value={value}>
                            {label}
                        </option>
                    )
                }
                )
            }
        </Select>
    )
    else if (switchs) return (
        <Switch
            id={`${name}_${idx}`}
            name={name}
            required={required}
            onChange={(e) => onChange({ e, inputType: 'switch', formName })}>
            {title}
        </Switch>
    )
    else if (radio) return (
        <RadioGroup
            defaultValue=''
            id={`${name}_${idx}`}
            name={name}
            onClick={(e) => onChange({ e, inputType: 'radio', formName })}
            className='flex'>
            {
                options.map(option => {
                    const { label, value } = option
                    return (
                        <Radio
                            required={required}
                            value={value}>
                            <Box className='mr-2'>{label}</Box>
                        </Radio>
                    )
                })
            }
        </RadioGroup>
    )
    else if (button) return (
        <div className='w-full flex justify-end'>
            <Button onClick={(e) => onChange({ e, inputType: 'action', formName })}>{`${title}`}</Button>
        </div>
    )
    else return (
        <Input
            value={value}
            id={`${name}_${idx}`}
            name={name}
            className='border-2 rounded-md p-2 w-full'
            required={required}
            placeholder={`Input ${title}`}
            onChange={(e) => onChange({ e, inputType: 'text', formName })} />
    )
}