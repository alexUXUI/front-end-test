import React from 'react'

export default class DataTable extends React.Component {

 render(){

   const style = {
       border: '1.5px solid black',
       borderCollapse: 'collapse',
       textAlign:'center',
       height: '30px',
       padding: '1em'
   }

   const tdstyle= {
       border: '.25px solid black',
       textAlign:'left',
       padding: '1em'
   }


   return (
    <tbody style={style}>
      <tr>
        <th style={style}>{this.props.data.priority}</th>
        <td style={tdstyle}>{this.props.data.name}</td>
      </tr>
    </tbody>
   )
  }
}
