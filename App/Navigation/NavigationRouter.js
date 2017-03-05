// @flow

import React, { Component, PropTypes } from 'react'
import { Switch, Actions, Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  static propTypes = {
    openedFrom: PropTypes.object
  }

  getScenes = () => {
    const { openedFrom } = this.props
    const { visitor = false } = openedFrom
    return Actions.create(
      <Scene key="root">
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene
              initial
              key="mainScreen"
              component={connect(() => ({visitor: visitor}))(Switch)}
              tabs={true}
              unmountScenes
              selector={props => props.visitor ? 'listviewExample' : 'presentationScreen'}
              navigationBarStyle={Styles.navBar}
              titleStyle={Styles.title}
              leftButtonIconStyle={Styles.leftButton}
            >
              <Scene key='listviewExample' component={ListviewExample} title='Listview Example' renderLeftButton={NavItems.hamburgerButton}/>
              <Scene key='presentationScreen' component={PresentationScreen} title='Alfred'
                renderLeftButton={NavItems.hamburgerButton}
                />
            </Scene>
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='login' component={LoginScreen} title='Alfred' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
            {/* Custom navigation bar example */}
            <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
          </Scene>
        </Scene>
      </Scene>
    )
  }

  render () {
    return (
      <Router scenes={this.getScenes()} />
    )
  }
}

export default NavigationRouter
