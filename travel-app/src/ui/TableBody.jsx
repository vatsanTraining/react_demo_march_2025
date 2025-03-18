import React from 'react'

const TableBody = ({data}) => {
    const tableRow = (item,idx) =>{
         return (
        <tr key={idx}>
            <td>{item.customerName}</td>
            <td>{item.location}</td>
            <td>{item.email}</td>
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