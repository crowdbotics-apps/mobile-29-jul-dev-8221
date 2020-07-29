import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen29487Navigator from '../features/CopyOfBlankScreen29487/navigator';
import BlankScreen29485Navigator from '../features/BlankScreen29485/navigator';
import BlankScreen19484Navigator from '../features/BlankScreen19484/navigator';
import BlankScreen39483Navigator from '../features/BlankScreen39483/navigator';
import CopyOfEmailAuth19481Navigator from '../features/CopyOfEmailAuth19481/navigator';
import CopyOfEmailAuth19480Navigator from '../features/CopyOfEmailAuth19480/navigator';
import CopyOfEmailAuth19478Navigator from '../features/CopyOfEmailAuth19478/navigator';
import CopyOfEmailAuth19477Navigator from '../features/CopyOfEmailAuth19477/navigator';
import EmailAuth19476Navigator from '../features/EmailAuth19476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen29487: { screen: CopyOfBlankScreen29487Navigator },
BlankScreen29485: { screen: BlankScreen29485Navigator },
BlankScreen19484: { screen: BlankScreen19484Navigator },
BlankScreen39483: { screen: BlankScreen39483Navigator },
CopyOfEmailAuth19481: { screen: CopyOfEmailAuth19481Navigator },
CopyOfEmailAuth19480: { screen: CopyOfEmailAuth19480Navigator },
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
