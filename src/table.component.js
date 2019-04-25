import React from 'react'

export default class Table extends React.Component {
  render(){

    const data = () =>{
      const columns = this.props.data.columns
      const rows = this.props.data.rows

      const tableHeaders = (
        <thead>
        <tr>
        {columns.map(column => {
          return <th>{column}</th>
        })}
        </tr>
        </thead>
      )
        const tableBody = rows.map(row => {
          return (
            <tr>
            {columns.map(column => {
              return <td>{row[column]}</td>
            })}
            </tr>)
        })
    }

{
  // const GRID = {
    //   id: ,
    // }
    //
    // const columns = [
      //   {
        //     header: ''
        //   },
        //   {
          //     header: ''
          //   },
          //   {
            //     header: '',
            //   }
            // ]
}

    return (
    <div>
      <DataTable
      columns={columns}
      rows = {rows}
      tableHeaders = {tableHeaders}
      />
    </div>
    )
  }
}
