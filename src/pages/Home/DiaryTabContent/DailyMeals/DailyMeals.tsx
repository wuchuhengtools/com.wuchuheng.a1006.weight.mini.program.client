/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/16 23:42
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./dailyMealsStyles.module.less";
import TitleCar from "../TitleCar/TitleCar";
import DailyMealsItem from "./DailyMealsItem/DailyMealsItem";

const DailyMeals: React.FC = () => {
  return (
    <TitleCar title="每日配餐" rightTitle={<></>}>
      <View className={styles.main}>
        <View className={styles.main__container}>
          <DailyMealsItem
            iconWrapperClassName={styles.main__container__breakfastIcon}
            iconName="breakfast"
            title="早餐"
            subtitle="建议200千卡"
          />
          <View className={styles.main__container__line} />
          <DailyMealsItem
            iconWrapperClassName={styles.main__container__lunchIcon}
            iconName="lunch"
            title="午餐"
            subtitle="建议200千卡"
          />
          <View className={styles.main__container__line} />
          <DailyMealsItem
            iconWrapperClassName={styles.main__container__dinnerIcon}
            iconName="dinner"
            title="晚餐"
            subtitle="建议200千卡"
          />
          <View className={styles.main__container__line} />
          <DailyMealsItem
            iconWrapperClassName={styles.main__container__extraMealIcon}
            iconName="extraMeal"
            title="加餐"
            subtitle="建议200千卡"
          />
        </View>
      </View>
    </TitleCar>
  );
};
export default DailyMeals;
