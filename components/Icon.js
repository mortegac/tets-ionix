// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Entypo,
  // Foundation,
  // MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  Feather,
  Ionicons,
  SimpleLineIcons,
  Octicons
} from '@expo/vector-icons';
import { Text } from 'react-native';



export default class Icon extends PureComponent {
  // PropTypes
  static propTypes = {
    library: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  // Render
  render() {
    // Constants
    const { library, size } = this.props;
    const rSize = parseInt(size, 10);
    
    // Render return
    if (library === 'Entypo') return <Entypo {...this.props} size={rSize} />;
    // if (library === 'Foundation') return <Foundation {...this.props} size={rSize} />;
    // if (library === 'MaterialCommunityIcons') return <MaterialCommunityIcons {...this.props} size={rSize} />;
    if (library === 'AntDesign') return <AntDesign {...this.props} size={rSize} />;
    if (library === 'FontAwesome') return <FontAwesome {...this.props} size={rSize} />;
    if (library === 'Feather') return <Feather {...this.props} size={rSize} />;
    if (library === 'Ionicons') return <Ionicons {...this.props} size={rSize} />;
    if (library === 'SimpleLineIcons') return <SimpleLineIcons {...this.props} size={rSize} />;
    if (library === 'Octicons') return <Octicons {...this.props} size={rSize} />;
    
    return <Text>Not found</Text>;
  }
}
