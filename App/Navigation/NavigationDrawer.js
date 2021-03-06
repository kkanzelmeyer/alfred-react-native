// @flow

import React, { PropTypes, Component } from 'react'
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import DrawerContent from '../Containers/DrawerContent'
import { connect } from 'react-redux'
import Styles from './Styles/NavigationDrawerStyle'

/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

class NavigationDrawer extends Component {
  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref='navigation'
        type='overlay'
        open={state.open}
        onOpen={() => NavigationActions.refresh({key: state.key, open: true})}
        onClose={() => NavigationActions.refresh({key: state.key, open: false})}
        content={<DrawerContent />}
        styles={Styles}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}
// <Drawer
//   type="overlay"
//   content={<ControlPanel />}
//   tapToClose={true}
//   openDrawerOffset={0.2} // 20% gap on the right side of drawer
//   panCloseMask={0.2}
//   tweenHandler={(ratio) => ({
//     main: { opacity: Math.max(0.54, 1 - ratio) }
//   })}
//   styles={drawerStyles}
// >

NavigationDrawer.propTypes = {
  navigationState: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
