/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/16 23:22
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./buttonStyles.module.less";

const Button: React.FC = () => {
  return (
    <View className={styles.main}>
      <View className={styles.main__button}>形成减重方案</View>
    </View>
  );
};

export default Button;
