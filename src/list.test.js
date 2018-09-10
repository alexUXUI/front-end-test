import React from 'react'
import List from './list.component'

import { mount } from 'enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('List test suite:', () => {

  let LIST 
  let ID = 1

  beforeEach(() => LIST = mount(<List />))

  it('Mounts', () => expect(LIST).toBeTruthy())

  it('Has 3 list items in state', () => {
    expect(Object.values(LIST.state().list).length).toBe(3)
  })

  it('Has 3 list items in the DOM', () => {
    expect(LIST.find('.list__item')).toHaveLength(3)
  })

  it('Clicking on a remove button sets an items state to undefined', () => {
    LIST.find(`.remove--${ID}`).simulate('click')
    expect(LIST.state().list[ID]).toBe(undefined)
  })

  it('Clicking on a complete button sets an items state to complete', () => {
    const checkbox = () => LIST.find(`.complete--${ID}`);
    checkbox().simulate('change', { target: { checked: true }});
    expect(LIST.state().list[ID].complete).toBe(true)
  })

  it('List Item show correct class depending on props', () => {
    expect(LIST.find('.item')).toHaveLength(2)
    const checkbox = () => LIST.find(`.complete--${3}`);
    checkbox().simulate('change', { target: { checked: true }});
    expect(LIST.find('.item--completed')).toHaveLength(2)
  })
})
