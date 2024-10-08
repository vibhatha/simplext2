import React from 'react'
import { Table } from 'react-bootstrap'
import TableProps from './TableProps'


const DataTable: React.FC<TableProps> = ({ data }) => {
    // TOOD: dynamically update things here
    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Version</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((pkg) => (
                        <tr key={pkg.id}>
                            <td>{pkg.id}</td>
                            <td>{pkg.name}</td>
                            <td>{pkg.version}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default DataTable;