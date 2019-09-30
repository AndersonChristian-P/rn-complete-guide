import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem/GoalItem"
import GoalInput from "./components/GoalInput/GoalInput"

export default function App() {

  // --STATE-- //
  const [courseGoals, setCourseGoals] = useState([])

  // --METHODS-- //
  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]) // will always give you the latest State snapshot
  }

  // -- -- //
  return (
    <View style={styles.screen}>

      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={() => console.log('Does that work?')} title={itemData.item.value} />}
      />

    </View >
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})



// when you have an unknown amount of items in a list that could be rendered you would use FlatList. FlatList takes in data - the data should point to an array. The other property is a a renderItem. renderItem takes a function that is called for every item in your data to render a list item