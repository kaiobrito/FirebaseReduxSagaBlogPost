/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TodoType } from "./Common/Types";
import firebase from "firebase";
import config from "./config.json";

firebase.initializeApp(config);

type Props = {};
type State = {
  todos: Array<TodoType>
};
export default class TodoList extends Component<Props, State> {
  listener: any;
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
    this.listener.off();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Text key={todo.id}>{todo.name}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
