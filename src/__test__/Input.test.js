import React from 'react';
import TestRenderer from 'react-test-renderer';

import Input from '../components/Input';

function stub(t){
    console.log("ICI", t);
}

describe('Input Component', () => {
    test('Props ', () => {
        const testRenderer = TestRenderer.create(
            <Input
                id="inputIdHere"
                label="myLabel"
                defaultValue="myValue"
                onClick={stub}/>
        );
        const testInstance = testRenderer.root;

        // let tree = testRenderer.toJSON();
        let props = testInstance.props;

        expect(props.id).toBe('inputIdHere');
        expect(props.defaultValue).toBe('myValue');
        expect(props.type).toBe('text');
        expect(props.label).toBe('myLabel');

        //testInstance.findByProps({type: "text"}).props.onClick();
    });
});
