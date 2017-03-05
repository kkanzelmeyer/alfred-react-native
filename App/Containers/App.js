// @flow

import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Provider } from 'react-redux'
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm'
import '../I18n/I18n' // keep before root container
import RootContainer from './RootContainer'
import createStore from '../Redux'
import applyConfigSettings from '../Config'

// Apply config overrides
applyConfigSettings()
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  state = {
    openedFrom: {}
  }

  componentDidMount () {
    FCM.requestPermissions() // for iOS
    // FCM.getFCMToken().then((token) => {
    //   console.log('get fcm token', token)
    //         // store fcm token in your server
    //   return
    // })
    this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
            // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
      console.log('Notification - Notif: ', notif)

      if (notif.local_notification) {
              // this is a local notification
        console.log('Notif - local notification: ', notif)
      }

      if (notif.opened_from_tray) {
          // app is open/resumed because user clicked banner
        console.log('Notif - opened from tray: ', notif)
      }

      if (notif.notification) {
        console.log('App - received notification!', notif.notification)
      }

      if (notif.data) {
        console.log('App - received data!', notif.data)
      }

      // await someAsyncCall()

      if (Platform.OS === 'ios') {
              // optional
              // iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
              // This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
              // notif._notificationType is available for iOS platfrom
        switch (notif._notificationType) {
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData) // other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
            break
          case NotificationType.NotificationResponse:
            notif.finish()
            break
          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All) // other types available: WillPresentNotificationResult.None
            break
        }
      }
    })
    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
      console.log('event listener token', token)
      return
      // fcm token may not be available on first load, catch it here
    })
    FCM.getInitialNotification().then(notif => {
      if (notif.fcm.action === 'fcm.ACTION.VISITOR') {
        console.log('received visitor action', notif)
        this.setState({
          openedFrom: {
            visitor: true
          }
        })
      }
    })
  }

  componentWillUnmount () {
        // stop listening for events
    this.notificationListener.remove()
    this.refreshTokenListener.remove()
  }

  render () {
    return (
      <Provider store={store}>
        <RootContainer openedFrom={this.state.openedFrom}/>
      </Provider>
    )
  }
}

export default App
