import React, { Component } from 'react'
import { ListItem } from './item.component'
import { AddItem } from './addItem.component';
import { LIST } from './constants'
import './list.styles.css'

class List extends Component {

  constructor() {
    super()
    this.state = {
      list: { ...LIST },
      inputField: ''
    }

    this.toggleComplete = this.toggleComplete.bind(this)
    this.addItem = this.addItem.bind(this)
    this.updateInputField = this.updateInputField.bind(this)
  }

  updateInputField(text) {
    return this.setState({
      inputField: text
    })
  }

  addItem(item) {
    const id = Object.values(this.state.list).length + 1
    return this.setState({
      ...this.state,
      list: {
        ...this.state.list,
        [id]: {
          id,
          name: item,
          complete: false
        }
      }
    })
  }

  toggleComplete = id =>  {
    let newState = Object.assign({}, this.state)

    if (newState.list[id]) {
      newState.list[id].complete = !newState.list[id].complete
      return this.setState(newState)
    }
  }

  remove=(id)=> {
    let newState = Object.assign({}, this.state)
    newState.list[id] = undefined
    return this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <AddItem
          addItem={this.addItem}
          state={this.state}
          updateInputField={this.updateInputField}
          inputField={this.state.inputField}
        />
        <ul>
          {
            Object.values(this.state.list).map((item, index) => {
              return (
                <ListItem
                  index={index}
                  item={item}
                  toggleComplete={this.toggleComplete}
                  remove={this.remove}
                  key={index}
                  className="list__item"
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List
