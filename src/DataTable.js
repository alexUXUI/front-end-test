import React from 'react';
import Table from './Table';

export default class DataTable extends React.Component {
  render(){
    return (
      <div>
        {this.props.data.map(col=>
          <Table
            key = {col.id}
          />
        )}
      </div>

    )
  }
}
