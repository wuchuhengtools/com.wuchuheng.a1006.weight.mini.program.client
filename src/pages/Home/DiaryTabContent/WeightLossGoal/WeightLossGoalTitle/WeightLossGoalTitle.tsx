/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 23:28
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./weightLossGoalTitle.module.less";

const WeightLossGoalTitle: React.FC = () => {
  return (
    <View className={styles.main}>
      <View className={styles.main__title}>减肥目标10kg</View>
    </View>
  );
};

export default WeightLossGoalTitle;
