import React, { Component } from 'react'; 
import { Text, TouchableWithoutFeedback, View } from 'react-native'; 
import { CardSection } from './common';
import * as actions from '../actions'; 
import { connect } from 'react-redux'; 

class ListItem extends Component {

  render() {
    console.log('props', this.props)

    const { id, title } = this.props.library.item;
    const { titleStyle } = styles; 

    return (
    
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection > 
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15, 
    color: red
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};



export default connect(null, actions)(ListItem); 