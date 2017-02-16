// @flow

import React from 'react'
import { Map } from 'immutable'
import moment from 'moment'
import { View, Text, Image } from 'react-native'
import styles from './Styles/VisitorListItemStyle'

export default class VisitorListItem extends React.Component {

  render () {
    const { visitor } = this.props
    // console.debug(visitor.toJS())
    return (
      <View style={styles.container} elevation={1}>
        <Text>{moment(visitor.get('time')).fromNow()}</Text>
        <Image
          source={{uri: visitor.get('url')}}
          style={{
            width: visitor.getIn(['metaData', 'width']),
            height: visitor.getIn(['metaData', 'height'])
          }} />
      </View>
    )
  }
}

// Prop type warnings
VisitorListItem.propTypes = {
  visitor: React.PropTypes.object
}

// Defaults for props
VisitorListItem.defaultProps = {
  visitor: Map()
}
