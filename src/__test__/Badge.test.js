import React from 'react';
import renderer from 'react-test-renderer';

import Badge from '../components/Badge';
import { AvailableTypes } from '../Config/BadgeConfig';

describe('Badge Component', () => {
    for(let type of AvailableTypes) {
        test('class type: ' + type, () => {
            const component = renderer.create(
                <Badge type={type}>6ix9ine</Badge>,
            );
            let tree = component.toJSON();

            expect(tree.props.className).toEqual('badge badge-' + type);
        });
    }

    test('children', () => {
        const children = 'Test01';
        const component = renderer.create(
            <Badge type='dark'>{children}</Badge>,
        );
        let tree = component.toJSON();

        expect(tree.children[0]).toEqual(children);
    });
});
