// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressVisitors = () => {
    this.toggleDrawer()
    NavigationActions.listviewExample()
  }

  handlePressGarageDoor = () => {
    this.toggleDrawer()
    NavigationActions.listviewGridExample()
  }

  handlePressRooms = () => {
    this.toggleDrawer()
    NavigationActions.listviewSectionsExample()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Component Examples' onPress={this.handlePressComponents} />
        <DrawerButton text='Visitors' onPress={this.handlePressVisitors} />
        <DrawerButton text='Garage Door' onPress={this.handlePressGarageDoor} />
        <DrawerButton text='Rooms' onPress={this.handlePressRooms} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
