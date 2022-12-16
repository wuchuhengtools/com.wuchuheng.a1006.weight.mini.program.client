/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 23:42
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./weightLossGoalCharStyles.module.less";
import ProcessCircleBar from "./ProcessCircleBar/ProcessCircleBar";
import WeightLossGoalCharSideBar from "./WeightLossGoalCharSideBar/WeightLossGoalCharSideBar";

const WeightLossGoalChar: React.FC = () => {
  return (
    <>
      <View className={styles.main}>
        <WeightLossGoalCharSideBar
          className={styles.main__items}
          values={[
            { value: "1000千卡", subtitle: "正常所需" },
            { value: "1000千卡", subtitle: "每日应摄入热量" },
          ]}
        />
        <ProcessCircleBar widthRatePerson={0.4} />
        <WeightLossGoalCharSideBar
          className={[styles.main__items, styles.main__left_item].join(" ")}
          values={[
            { value: "1000千卡", subtitle: "今日超标热量" },
            { value: "1000千卡", subtitle: "运动亏空热量" },
          ]}
        />
      </View>
    </>
  );
};

export default WeightLossGoalChar;
