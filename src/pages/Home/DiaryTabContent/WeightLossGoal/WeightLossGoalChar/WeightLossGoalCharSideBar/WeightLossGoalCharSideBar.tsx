/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/16 15:31
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./weightLossGoalCharSideBarStyles.module.less";
import CaloricInput from "../../components/CaloryInput/CaloricInput";

type WeightLossGoalCharSideBarProps = {
  className: string;
  values: { value: string; subtitle: string }[];
};
const WeightLossGoalCharSideBar: React.FC<WeightLossGoalCharSideBarProps> = (
  props
) => {
  return (
    <View className={[props.className, styles.main].join(" ")}>
      <View className={styles.main__item}>
        <View>{props.values[0].value}</View>
        <View className={styles.main__item__subTitle}>
          {props.values[0].subtitle}
        </View>
      </View>
      <View className={styles.main__item}>
        <View>{props.values[1].value}</View>
        <View className={styles.main__item__subTitle}>
          {props.values[1].subtitle}
        </View>
      </View>
      <View className={styles.main__item}>
        <CaloricInput className={styles.main__item__input} />
      </View>
    </View>
  );
};

export default WeightLossGoalCharSideBar;
