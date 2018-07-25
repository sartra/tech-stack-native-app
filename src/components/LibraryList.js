import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { FlatList } from 'react-native';   // renders only components that are currently visible in the list 
import ListItem from './ListItem'; 

class LibraryList extends Component {

  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props)
    return (
      <FlatList 
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id.toString()}
      /> 
    )
  }
}

// map some elements of global state to props to component LibraryList - what is returned from this func is sent to Lib List as props
const mapStateToProps = state => {
  console.log('state:', state)
  return { libraries: state.libraries}
}

export default connect(mapStateToProps)(LibraryList);
