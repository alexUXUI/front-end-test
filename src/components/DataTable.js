import React from 'react'

export default class DataTable extends React.Component {

 render(){

   const style = {
       border: '1px solid black',
       borderCollapse: 'collapse',
       textAlign:'left',
   }

   const tdstyle= {
       border: '.5px solid black',
       borderCollapse: 'collapse',
       textAlign:'left',
   }


   return (
    <tbody style={style}>
      <tr style={style}>
        <th style={style}>{this.props.data.product}</th>
        <td style={tdstyle}>{this.props.data.name}</td>
        <td>{this.props.data.price}</td>
      </tr>
    </tbody>
   )
  }
}
