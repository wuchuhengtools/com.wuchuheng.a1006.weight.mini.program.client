/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 22:58
 */

import React from "preact/compat";
import { Text, View } from "@tarojs/components";
import TitleCar from "../TitleCar/TitleCar";
import Icons from "../../../../components/Icons/Icons";
import styles from "./weightMainagerStyles.module.less";

type ItemProps = {
  name: string;
  value: number;
  unitText: string;
};
const Item: React.FC<ItemProps> = (props) => {
  return (
    <View className={styles.item}>
      <View>
        <Text className={styles.item__value}>{props.value}</Text>
        <Text> {props.unitText}</Text>
      </View>
      <View>{props.name}</View>
    </View>
  );
};
const WeightManager: React.FC = () => {
  const rightTitleNode = (
    <View className={styles.main__rightTitle}>
      <View>查看详情</View>
      <Icons name="right" size={1} />
    </View>
  );
  const items: ItemProps[] = [
    {
      value: 52,
      name: "当前体重",
      unitText: "kg",
    },
    {
      value: 162,
      name: "当前身高",
      unitText: "cm",
    },
    {
      value: 19.8,
      name: "BMI",
      unitText: "正常",
    },
    {
      value: 50,
      name: "腰围",
      unitText: "cm",
    },
    {
      value: 91,
      name: "臀围",
      unitText: "cm",
    },
    {
      value: 0.73,
      name: "腰臀比",
      unitText: "",
    },
  ];
  return (
    <TitleCar title="体重管理" rightTitle={rightTitleNode}>
      <View className={styles.main}>
        {items.map((item) => (
          <Item
            name={item.name}
            value={item.value}
            unitText={item.unitText}
            key={item.name}
          />
        ))}
      </View>
    </TitleCar>
  );
};

export default WeightManager;
