/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/18 04:53
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./deviceTitleBarStyles.module.less";
import Icons from "../../../../../components/Icons/Icons";

const DeviceTitleBar: React.FC = () => {
  return (
    <View className={styles.main}>
      <View className={styles.main__title}>我的智能设备</View>
      <View className={styles.main__buttonWrapper}>
        <Icons name="refresh" size={1} />
        <View>同步</View>
      </View>
    </View>
  );
};
export default DeviceTitleBar;
