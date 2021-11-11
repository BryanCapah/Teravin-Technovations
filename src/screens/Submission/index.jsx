import Table, { columns } from "../../components/Table";
import Button from '../../components/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import { useNavigate } from "react-router";
import { Switch } from "@chakra-ui/switch";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { getSubmissionList } from "../../stores/reducers/submissionList";

export default function List() {
    const navigateTo = useNavigate()
    const { colorMode, toggleColorMode } = useColorMode()
    const list = useSelector(getSubmissionList)

    return (
        <div className='w-full'>
            <div className='w-full flex justify-between py-3'>
                <Box className='font-bold'>Teravin test React.js</Box>
                <Switch className='flex items-center font-bold' onChange={toggleColorMode}>
                    {colorMode === "light" ? "Dark" : "Light"} Mode
                </Switch>
            </div>
            <div className='my-3'>
                <Button onClick={() => navigateTo('/register')}>
                    <FontAwesomeIcon
                        className='mr-1'
                        icon={faPlus} />
                    Add Data
                </Button>
            </div>
            {list?.length > 0 ? <Table
                data={list}
                columns={columns} />
                :
                <div className='font-bold'>Data masih kosong. Add data untuk mendambahkan list</div>
            }
        </div>
    )
}