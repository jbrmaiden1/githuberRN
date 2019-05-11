import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './screens/Welcome';
import Repositories from './screens/Repositories';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Repositories,
    },
    { initialRouteName: userLogged ? 'Repositories' : 'Welcome' },
  ),
);

export default Routes;
