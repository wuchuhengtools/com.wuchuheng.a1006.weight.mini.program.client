/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 21:06
 */

import React, { useState } from "preact/compat";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import styles from "./styles.module.less";

const HomeNavigationBarContainer: React.FC = () => {
  const [navigationBarHeight, setNavigationBarHeight] = useState<number>(0);
  Taro.getSystemInfo().then((sysInfo) => {
    let menuInfo = Taro.getMenuButtonBoundingClientRect();
    const statusBarHeight = sysInfo.statusBarHeight || 0;
    const newNavigationBarHeight =
      (menuInfo.top - statusBarHeight) * 2 + menuInfo.height;
    setNavigationBarHeight(newNavigationBarHeight);
  });

  return (
    <View
      className={styles.main}
      style={{ paddingTop: `${navigationBarHeight}px` }}
    ></View>
  );
};
export default HomeNavigationBarContainer;
