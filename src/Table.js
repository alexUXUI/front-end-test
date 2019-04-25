import React from 'react'

export default class Table extends React.Component {
  render(){
    return (
      <div className="row">
        {this.props.data}
      </div>
    )
  }
}
