import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './screens/Welcome';
import Repositories from './screens/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
  }),
);

export default Routes;
