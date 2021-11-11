import FormInput from "./FormInput"
import FormWrapper from "./FormWrapper"

export default function Form({ onChange, form }) {
    return (
        <FormWrapper>
            <table className='w-full border-separate' style={{ borderSpacing: '1rem' }}>
                {
                    form.map((data, idx) => {
                        const { title, inputType } = data
                        const hideTitle = inputType === 'action'
                        return (
                            <tr>
                                <td width='30%'>{!hideTitle && title}</td>
                                <td width={!hideTitle && '70%'}>
                                    <FormInput
                                        data={data}
                                        onChange={onChange}
                                        idx={idx} />
                                </td>
                            </tr>
                        )
                    })
                }

            </table>
        </FormWrapper>
    )
}