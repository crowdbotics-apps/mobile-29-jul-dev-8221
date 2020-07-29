import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfEmailAuth19479Navigator from '../features/CopyOfEmailAuth19479/navigator';
import CopyOfEmailAuth19478Navigator from '../features/CopyOfEmailAuth19478/navigator';
import CopyOfEmailAuth19477Navigator from '../features/CopyOfEmailAuth19477/navigator';
import EmailAuth19476Navigator from '../features/EmailAuth19476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfEmailAuth19479: { screen: CopyOfEmailAuth19479Navigator },
CopyOfEmailAuth19478: { screen: CopyOfEmailAuth19478Navigator },
CopyOfEmailAuth19477: { screen: CopyOfEmailAuth19477Navigator },
EmailAuth19476: { screen: EmailAuth19476Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
