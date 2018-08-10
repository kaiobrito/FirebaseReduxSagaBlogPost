/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Store from "./src/Store";
import TodoList from "./src/Components/Todo/List/TodoListReduxFinal";

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <TodoList />
      </Provider>
    );
  }
}
