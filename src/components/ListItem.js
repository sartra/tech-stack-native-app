import React, { Component } from 'react'; 
import { Text } from 'react-native'; 
import { CardSection } from './common';



class ListItem extends Component {
  render() {
    console.log('props', this.props)

    const { id, title } = this.props.library;

    return (
      <CardSection > 
        <Text>{title}</Text>
      </CardSection>
    );
  }
}

export default ListItem; 