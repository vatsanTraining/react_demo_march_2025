import React from 'react'

const TableBody = ({ data, handleDelete,handleEdit }) => {
    const tableRow = (item, idx) => {
        return (
            <tr key={idx}>
                {
                    Object.entries(item).map(([key, value]) => {

                        return <td key={key}>{value}</td>

                    })

                }
                <td><button onClick={()=>handleEdit(item.id)}>Edit</button></td>
                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
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