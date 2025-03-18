import React from 'react'

const Table = ({columns,data}) => {
  return (
    <div>
        <TableHead heading={columns}></TableHead>
        <TableBody data ={data}></TableBody>
    </div>
  )
}

export default Table