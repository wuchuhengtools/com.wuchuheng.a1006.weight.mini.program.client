import React, { Component, PropsWithChildren } from "preact/compat";
import { Provider } from "react-redux";

import configStore from "./store";

import "./app.less";

const store = configStore();

class App extends Component<PropsWithChildren<void>> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
