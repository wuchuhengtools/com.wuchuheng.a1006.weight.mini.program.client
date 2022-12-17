/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/18 05:03
 */

import React from "preact/compat";
import { Text, View } from "@tarojs/components";
import styles from "./testItemStyle.module.less";
import Icons from "../../../../../components/Icons/Icons";

type TestItemPropsLevel = "warning" | "normal" | "danger";
type TestItemProps = {
  name: string;
  level: TestItemPropsLevel;
  subItems: { name: string; value: string }[];
};
const TestItem: React.FC<TestItemProps> = (props) => {
  const levelMapColor: Record<TestItemPropsLevel, string> = {
    warning: "#F6A34F",
    normal: "var(--theme-primary-color)",
    danger: "#F2505D",
  };
  const levelMapMark: Record<TestItemPropsLevel, string> = {
    warning: "偏低",
    normal: "正常",
    danger: "偏高",
  };
  return (
    <View className={styles.main}>
      <View className={styles.main__firstLineWrapper}>
        <View className={styles.main__firstLineWrapper__leftBar}>
          <View className={styles.main__firstLineWrapper__leftBar__firstItem}>
            {props.name}
          </View>
          <View
            className={styles.main__firstLineWrapper__leftBar__centerItem}
            style={{ color: levelMapColor[props.level] }}
          >
            <Text
              className={
                styles.main__firstLineWrapper__leftBar__centerItem__value
              }
            >
              250
            </Text>
            <Text className={styles.unit}>mmHg</Text>
          </View>
          <View className={styles.main__firstLineWrapper__leftBar__lastItem}>
            <View className={styles.subtitle}>{levelMapMark[props.level]}</View>
            <Icons name="report" size={1} className={styles.icon} />
          </View>
        </View>
        <View className={styles.customer}>咨询</View>
      </View>
      <View className={styles.subItems}>
        {props.subItems.map((it, i) => (
          <View className={styles.subItems__subItemTitle} key={i}>
            {it.name}: {it.value}
          </View>
        ))}
      </View>
    </View>
  );
};

export default TestItem;
