/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 22:47
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./titleCarStyles.module.less";
import { ReactNode } from "react";

type TitleCarProps = {
  title: string;
  rightTitle?: ReactNode;
  children: ReactNode;
};

const TitleCar: React.FC<TitleCarProps> = (props) => {
  return (
    <View className={styles.main}>
      <View className={styles.main__title}>
        <View className={styles.main__title__leftTitle}>{props.title}</View>
        <View className={styles.main__title__rightTitle}>
          {props.rightTitle || ""}
        </View>
      </View>
      <View>{props.children}</View>
    </View>
  );
};

export default TitleCar;
