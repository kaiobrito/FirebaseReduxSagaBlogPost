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

type Props = {
  todos: Array<TodoType>
};

class TodoList extends Component<Props> {
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

const styles: { [string]: mixed } = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-around",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps: AppState => Props = state => {
  return {
    todos: state.todos.items
  };
};

export default connect(mapStateToProps)(TodoList);
