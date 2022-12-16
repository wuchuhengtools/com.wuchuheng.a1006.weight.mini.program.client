/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 23:23
 */
import React from "preact/compat";
import { View } from "@tarojs/components";
import TitleCar from "../TitleCar/TitleCar";
import styles from "./weightLossGoalStyles.module.less";
import WeightLossGoalTitle from "./WeightLossGoalTitle/WeightLossGoalTitle";
import WeightLossGoalChar from "./WeightLossGoalChar/WeightLossGoalChar";
import Meals from "./Meals/Meals";
import ThreeNutrients from "./ThreeNutrients/ThreeNutrients";
import Button from "./Button/Button";
import Icons from "../../../../components/Icons/Icons";

const WeightLossGoal: React.FC = () => {
  return (
    <TitleCar title="每日热量" rightTitle={<Icons name="help" size={1.2} />}>
      <View className={styles.main}>
        <WeightLossGoalTitle />
        <WeightLossGoalChar />
        <Meals />
        <ThreeNutrients />
        <Button />
      </View>
    </TitleCar>
  );
};

export default WeightLossGoal;
