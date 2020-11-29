import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Timer from './Components/Timer'

describe('App Component', ()=>{
  let component: ShallowWrapper<any,{},React.Component<{},{},any>> 

  beforeEach(()=> (component = shallow(<App />)))

  it('render a div', ()=>{
    expect(component.find('div').length).toEqual(1)
  })

  it('render the timer component',()=>{
    expect(component.containsMatchingElement(<Timer />)).toEqual(true)
  })
})