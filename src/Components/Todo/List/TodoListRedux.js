/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import type { TodoType, AppState } from "@Common/Types";
import firebase from "@Common/Firebase";
import { ActionCreators } from "./Actions";

type Props = {
  todos: Array<TodoType>,
  refreshList: (Array<TodoType>) => void
};

class TodoList extends Component<Props> {
  listener: any;

  componentDidMount() {
    // #1: Create a reference to the collection you wanna listen to using the method ref.
    const todoRef = firebase.database().ref("todos");

    // #2: As long as this listener object is allocated in memory the callback will be dispatched whenever the `todos` collection change.
    this.listener = todoRef.on("value", snapshot => {
      // #3: Update the component's todo array
      const todos: Array<TodoType> = snapshot.val() || [];

      this.props.refreshList(todos);
    });
  }

  componentWillUnmount() {
    // #4: Stop listening to changes to prevent memory leak.
    this.listener.off();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.todos.map((todo: TodoType) => (
          <Text key={todo.id}>{todo.text}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-around",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps: AppState => { todos: Array<TodoType> } = (
  state: AppState
) => {
  return {
    todos: state.todos.items
  };
};

const mapActions = {
  refreshList: ActionCreators.updateList
};

export default connect(
  mapStateToProps,
  mapActions
)(TodoList);
