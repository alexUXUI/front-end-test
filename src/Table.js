import React from 'react'

export default class Table extends React.Component {
  render(){
    return (
      <th>
        {this.props.data}
      </th>
    )
  }
}
