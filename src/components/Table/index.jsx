import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { faArrowDown, faArrowUp, faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { useSortBy, useTable } from "react-table";

export default function DataTable({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy)

    const navigateTo = useNavigate()

    return (
        <Table id='c-data-table' {...getTableProps()} className='cursor-default'>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr className='cursor-pointer' {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                isNumeric={column.isNumeric}>
                                {column.render("Header")}
                                {column.isSorted ? (
                                    column.isSortedDesc
                                        ? <FontAwesomeIcon
                                            className='ml-2'
                                            style={{
                                                width: 15,
                                                borderRadius: 100,
                                                height: 15,
                                                color: 'black',
                                                padding: 4,
                                                backgroundColor: 'white'
                                            }}
                                            icon={faArrowDown} />
                                        : <FontAwesomeIcon
                                            className='ml-2'
                                            style={{
                                                width: 15,
                                                borderRadius: 100,
                                                height: 15,
                                                color: 'black',
                                                padding: 4, backgroundColor: 'white'
                                            }}
                                            icon={faArrowUp} />
                                ) : ''}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <Tr className='cursor-pointer' onClick={() => navigateTo(`/${row?.id}`)} {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <Td {...cell.getCellProps()}
                                    isNumeric={cell.column.isNumeric}>
                                    {cell.render("Cell")}
                                </Td>
                            ))}
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}

export const columns = [
    {
        Header: 'ID No.',
        accessor: 'id',
    },
    {
        Header: 'Nama Lengkap',
        accessor: 'namaLengkap',
        Cell: (props) => props?.row?.original?.personalData?.namaLengkap || '-'
    },
    {
        Header: 'Alamat',
        accessor: 'alamat',
        Cell: (props) => props?.row?.original?.personalData?.alamat || '-'
    },
    {
        Header: '',
        accessor: 'status',
        Cell: (props) => {
            return (
                // <Link to={goToDetail}>
                <FontAwesomeIcon
                    className='ms-1'
                    style={{
                        width: 15,
                        borderRadius: 100,
                        height: 15,
                        color: 'grey'
                    }}
                    icon={props.value ? faEye : faEyeSlash} />

                // </Link>
            )
        }
    },

]

export const data = []

for (let i = 0; i <= 100; i++) {
    data.push({
        id: 'LAV',
        nama: 'AU56503AU88384ERT',
        alamat: 'Sofrad Enterprises Pty Ltd',
        status: i % 2 === 0 ? true : false,
    })
}