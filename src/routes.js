import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { colors } from './styles';
import Welcome from './screens/Welcome';
import Repositories from './screens/Repositories';
import Organizations from './screens/Organizations';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator(
        {
          Repositories,
          Organizations,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secondary,
            },
          },
        },
      ),
    },
    { initialRouteName: userLogged ? 'User' : 'Welcome' },
  ),
);

export default Routes;
