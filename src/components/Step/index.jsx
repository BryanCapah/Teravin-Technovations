import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { keahlian, pengalamanKerja, personalData, riwayatPendidikan } from '../../helper';
import { getSubmission } from '../../stores/reducers/submission';
import { getSubmissionList, submisionListAction } from '../../stores/reducers/submissionList';
import store from '../../stores/store';
import Form from '../Form';
import { onChange } from '../Form/services';

// setup the step content
const step1Content = <Form form={personalData} onChange={onChange} />
const step2Content = <Form form={riwayatPendidikan} onChange={onChange} />
const step3Content = <Form form={pengalamanKerja} onChange={onChange} />
const step4Content = <Form form={keahlian} onChange={onChange} />


export default function Step() {
    const navigateTo = useNavigate()
    const submission = useSelector(getSubmission)
    const newId = useSelector(getSubmissionList)?.length

    const submitHandler = async () => {
        await store.dispatch(submisionListAction({ id: newId, ...submission }))
        navigateTo('/')
    }

    return (
        <StepProgressBar
            nextBtnName='Selanjutnya'
            previousBtnName='Sebelumnya'
            startingStep={0}
            onSubmit={() => submitHandler()}
            steps={[
                {
                    label: 'Data Personal',
                    content: step1Content
                },
                {
                    label: 'Riwayat Pendidikan',
                    content: step2Content,
                    // validator: step2Validator
                },
                {
                    label: 'Pengalaman Kerja',
                    content: step3Content,
                    // validator: step3Validator
                },
                {
                    label: 'Keahlian',
                    content: step4Content,
                    // validator: step3Validator
                }
            ]}
        />
    )
}