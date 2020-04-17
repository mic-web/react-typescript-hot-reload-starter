import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
  it('renders the App', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(App).length).toEqual(1)
  })
})
