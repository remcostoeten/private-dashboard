import React from 'react';
import renderer from 'react-test-renderer';

import ProfileNav from '../src/component/ProfileNav.js';

describe('<ProfileNav />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<ProfileNav />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });