import React from "react";
import TimerButton from "../Components/TimerButton";
import { shallow,ShallowWrapper } from "enzyme";

describe('TimerButton', ()=>{
    let component : ShallowWrapper<any,{},React.Component<{},{},any>>

    beforeEach(()=>{
        component = shallow(
            <TimerButton 
                buttonAction={jest.fn()}
                buttonValue={""}
                isOn={false}
            />
        )
    })

    it('should render a div',()=>{
        expect(component.find('div').length).toBeGreaterThanOrEqual(1)
    })
})

