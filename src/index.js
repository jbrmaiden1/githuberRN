import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
// import { Container } from './styles';
import createNavigator from './routes';

import('./config/ReactotronConfig');

export default function App() {
  const [userInfo, setUserinfo] = useState({ userChecked: false, userLogged: false });

  useEffect(async () => {
    const username = await AsyncStorage.getItem('@githuber:username');
    setUserinfo({ userChecked: true, userLogged: !!username });
  }, []);

  const Routes = createNavigator(userInfo.userLogged);

  return <Routes />;
}
