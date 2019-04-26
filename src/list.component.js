import React, { Component } from 'react'
import { ListItem } from './item.component'
import { AddItem } from './addItem.component';
import { LIST } from './constants'
import Table from './components/Table.js';
import './list.styles.css'

class List extends Component {

  constructor() {
    super()
    this.state = {
      list: { ...LIST },
      inputField: '',

      data: [
            { id: 1, name: 'Mediocre Iron Watch', product:'one'},
            { id: 2, name: 'Heavy Duty Concrete Plate', product:'two'},
            { id: 3, name: 'Intelligent Paper Knife', product:'three'},
            { id: 4, name: 'Small Aluminum Keyboard', product:'four'},
            { id: 5, name: 'Practical Copper Plate', product:'five'},
            { id: 6, name: 'Awesome Bronze Pants', product:'six'},
            { id: 7, name: 'Intelligent Leather Clock', product:'seven'},
            { id: 8, name: 'Ergonomic Bronze Lamp', product:'eight'},
            { id: 9, name: 'Awesome Leather Shoes', product:'nine'},
          ]
    }

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
        <Table
          data = {this.state.data}
        />
      </div>
    )
  }
}

export default List
