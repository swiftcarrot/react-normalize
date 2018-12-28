import React from 'react';
import renderer from 'react-test-renderer';
import Normalize from '../normalize';

test('render', () => {
  const component = renderer.create(<Normalize />);
  expect(component.toJSON()).toMatchInlineSnapshot(`null`);
});
