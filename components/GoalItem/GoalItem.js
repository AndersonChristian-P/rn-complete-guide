import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem

// onPress={props.onDelete.bind(this, props.id)}
// we bind 'this' to set a default argument - when this gets called - the default argument here would be props.id 
// props.id is passed to onDelete when it's getting called upon a press