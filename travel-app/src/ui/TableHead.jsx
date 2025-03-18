import React from 'react'
import '../global.css'


const TableHead = ({ columns }) => {

    const createContent = (value,idx)=>{

        return <th key={idx}>{value}</th>
    }
    return (
        <thead>
            <tr>
                {
                 columns.map(createContent)
                }
            </tr>
        </thead>
    )
}

export default TableHead