// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    flex: 1,
    marginTop: Metrics.marginVertical,
    marginHorizontal: Metrics.marginHorizontal,
    paddingTop: Metrics.titlePadding
  }
})
