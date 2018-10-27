import React from 'react'

export const ListItem = ({item, index, toggleComplete, remove}) => {
  if (item) {
    return (
      <li key={index} className={item.complete ? 'item--completed' : 'item'}>
        {item.name}
        <span>
          <input 
            type="checkbox" 
            checked={item.complete} 
            onChange={() => toggleComplete(item.id)}
            className={`complete--${item.id}`}
          />
          <button 
            onClick={() => remove(item.id)}
            className={`remove remove--${item.id}`}
          >
            Delete
          </button>
        </span>
      </li>
    )
  }
  return null
}

