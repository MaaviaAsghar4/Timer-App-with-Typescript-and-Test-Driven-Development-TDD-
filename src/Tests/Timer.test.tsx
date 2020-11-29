import React from "react";
import { mount, shallow, ShallowWrapper } from "enzyme";
import Timer from "../Components/Timer";

describe("render timer component", () => {
  let component: ShallowWrapper<any, {}, React.Component<{}, {}, any>>

  beforeEach(() => (component = shallow(<Timer />)));

  it("should contain a div", () => {
    expect(component.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should contain 3 TimerButton component", () => {
    expect(component.find("TimerButton").length).toEqual(3);
  });
});

describe("mounted timer", () => {
  let container: ShallowWrapper<any, {}, React.Component<{}, {}, any>>;

  beforeEach(()=>(container = shallow(<Timer />)))

  it('should container button',()=>{
    expect(container.find('buttonValue').length).toEqual(3)
  })
});
