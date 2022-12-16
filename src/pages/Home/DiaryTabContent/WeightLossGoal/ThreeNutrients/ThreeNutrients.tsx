/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/16 22:35
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./threeNutrients.module.less";

type PointProps = {
  color: string;
  name: string;
  value: number;
};
const Item: React.FC<PointProps> = (props) => {
  return (
    <View className={styles.main__items__item}>
      <View className={styles.point} style={{ background: props.color }} />
      <View className={styles.main__items__item__value}>
        {props.name} {props.value}%
      </View>
    </View>
  );
};
const ThreeNutrients: React.FC = () => {
  return (
    <View className={styles.main}>
      <View>我的三大产能营养素配比:</View>
      <View className={styles.main__items}>
        <Item color="#C49AF0" name="碳水化合物" value={50} />
        <Item color="#F5BD81" name="蛋白质" value={32} />
        <Item color="#F89395" name="脂肪" value={18} />
      </View>
    </View>
  );
};

export default ThreeNutrients;
