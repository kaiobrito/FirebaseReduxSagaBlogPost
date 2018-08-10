/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import type { TodoType } from "@Common/Types";
import firebase from "@Common/Firebase";

type State = {
  todos: Array<TodoType>
};
export default class TodoList extends Component<{}, State> {
  listener: any;
  state = {
    todos: []
  };

  componentDidMount() {
    // #1: Create a reference to the collection you wanna listen to using the method ref.
    const todoRef = firebase.database().ref("todos");

    // #2: As long as this listener object is allocated in memory the callback will be dispatched whenever the `todos` collection change.
    this.listener = todoRef.on("value", snapshot => {
      // #3: Update the component's todo array
      this.setState({ todos: snapshot.val() || [] });
    });
  }

  componentWillUnmount() {
    // #4: Stop listening to changes to prevent memory leak.
    this.listener.off();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map((todo: TodoType) => (
          <Text key={todo.id}>{todo.text}</Text>
        ))}
      </View>
    );
  }
}

const styles: { [string]: mixed } = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-around",
    backgroundColor: "#F5FCFF"
  }
});
