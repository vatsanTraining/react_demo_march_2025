import React from 'react'

const TableBody = ({ data }) => {
    const tableRow = (item, idx) => {
        return (
            <tr key={idx}>
                {
                    Object.entries(item).map(([key, value]) => {

                        return <td key={key}>{value}</td>

                    })
                }
            </tr>
        )

    }
    return (
        <tbody>
            {data.map(tableRow)}
        </tbody>
    )
}

export default TableBody