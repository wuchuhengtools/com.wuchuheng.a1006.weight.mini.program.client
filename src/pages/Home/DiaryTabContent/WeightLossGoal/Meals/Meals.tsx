/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/16 21:19
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./mealStyles.module.less";
import CaloricInput from "../components/CaloryInput/CaloricInput";

const MealItems: React.FC = () => {
  return (
    <View className={styles.item}>
      <View>200千卡</View>
      <View className={styles.item__subtitle}>早餐热量</View>
      <View className={styles.item__inputWrapper}>
        <CaloricInput className={styles.item__inputWrapper__input} />
        <View className={styles.item__inputWrapper__input__unit}>千卡</View>
      </View>
    </View>
  );
};

type MealsProps = {};

const Meals: React.FC<MealsProps> = () => {
  return (
    <View className={styles.main}>
      <MealItems />
      <MealItems />
      <MealItems />
    </View>
  );
};

export default Meals;
