import React from 'react';
import Table from './Table';

export default class DataTable extends React.Component {
  render(){
    return (
    <table>
      <thead>
        <tr>
        {this.props.data.map(col=>
          <Table
            key = {col.id}
          />
        )}
        </tr>
      </thead>
    </table>
    )
  }
}
