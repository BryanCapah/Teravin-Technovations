import { SimpleGrid } from "@chakra-ui/layout"
import { Table, Td, Th, Tr } from "@chakra-ui/table"
import { useSelector } from "react-redux"
import { useLocation } from "react-router"
import { getSubmissionDetail } from "../../../stores/reducers/submissionList"
import * as fields from '../../../helper'

export default function Detail() {
    const id = useLocation()?.pathname?.replace('/', '')
    const detail = useSelector((state) => getSubmissionDetail({ state, id }))
    return (
        <SimpleGrid className='p-5'>
            <SimpleGrid>
                <div className='font-bold'>Personal Info</div>
                <Table className='text-left' textAlign='left'>
                    {
                        fields?.personalData?.map((data, idx) => (
                            <Tr key={`personal${idx}`}>
                                <Th className='w-1/3'>{data?.title}</Th>
                                <Td>{detail?.personalData[data.name]}</Td>
                            </Tr>
                        ))
                    }
                </Table>
            </SimpleGrid>
            <br />
            <SimpleGrid>
                <div className='font-bold'>Riwayat Pendidikan</div>
                {
                    detail?.riwayatPendidikan?.map((pendidikan, idx) => (
                        <SimpleGrid key={`pendidikan${idx}`} className='mt-5'>
                            <div className='font-bold'>No.{idx + 1}</div>
                            {fields?.riwayatPendidikan?.filter(fltr => fltr.inputType !== 'action')?.map(data => (
                                <Table className='text-left' textAlign='left'>
                                    <Tr>
                                        <Th className='w-1/3'>{data?.title}</Th>
                                        <Td>{pendidikan[data.name]}</Td>
                                    </Tr>
                                </Table>
                            ))}
                        </SimpleGrid>
                    ))
                }
            </SimpleGrid>
            <br />
            <SimpleGrid>
                <div className='font-bold'>Pengalaman Kerja</div>
                {
                    detail?.pengalamanKerja?.map((kerja, idx) => (
                        <SimpleGrid key={`kerja${idx}`} className='mt-5'>
                            <div className='font-bold'>No.{idx + 1}</div>
                            {fields?.pengalamanKerja?.filter(fltr => fltr.inputType !== 'action')?.map(data => (
                                <Table className='text-left' textAlign='left'>
                                    <Tr>
                                        <Th className='w-1/3'>{data?.title}</Th>
                                        <Td>{kerja[data.name]}</Td>
                                    </Tr>
                                </Table>
                            ))}
                        </SimpleGrid>
                    ))
                }
            </SimpleGrid>
            <br />
            <SimpleGrid>
                <div className='font-bold'>Keahlian</div>
                {
                    detail?.keahlian?.map((skill, idx) => (
                        <SimpleGrid key={`skill${idx}`} className='mt-5'>
                            <div className='font-bold'>No.{idx + 1}</div>
                            {fields?.keahlian?.filter(fltr => fltr.inputType !== 'action')?.map(data => {
                                return (
                                    <Table className='text-left' textAlign='left'>
                                        <Tr>
                                            <Th className='w-1/3'>{data?.title}</Th>
                                            <Td>
                                                <SelectHandler skill={skill} data={{ data }} />
                                            </Td>
                                        </Tr>
                                    </Table>
                                )
                            })}
                        </SimpleGrid>
                    ))
                }
            </SimpleGrid>
        </SimpleGrid>
    )
}

const SelectHandler = ({ skill, data }) => {
    const name = data?.name
    if (skill[name]?.label) return skill[name].label
    else if (skill[name]) return skill[name]
    else return '-'
}