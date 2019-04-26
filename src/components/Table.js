import React from 'react'
import DataTable from './DataTable.js'

export default class Table extends React.Component {
  render(){
    return (
          <table>
            {this.props.data.map(data=>
              <DataTable
                key = {data.id}
                data = {data}
              />
            )}
          </table>
    )
  }
}
