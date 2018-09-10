import React from 'react'

export const AddItem = props => {
  return (
    <div className="addItem">
      <input type="text" name="" id="" onChange={(event) => {
        props.updateInputField(event.target.value)
      }}/>
      <button className="button--submit" type="submit" onClick={(event) => {
        props.addItem(props.inputField)
      }}>add item</button>
    </div>
  )
}