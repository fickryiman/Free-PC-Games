import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/storages';
import GameDetails from '../Pages/GameDetails';

describe('Tests for the game details page', () => {
  it('Should render the detail page properly', () => {
    const pageView = render(
      <Provider store={store}>
        <Router>
          <GameDetails />
        </Router>
      </Provider>,
    );
    expect(pageView).toMatchSnapshot();
  });
});
