import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProfileContainer from '../components/pages/ProfileContainer';
import store from '../redux/cofigureStore';

describe('Component test snapshot', () => {
  it('Profile renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProfileContainer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
