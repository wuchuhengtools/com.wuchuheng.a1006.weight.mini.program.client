/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/18 04:50
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import TitleCar from "../TitleCar/TitleCar";
import styles from "./deviceStyles.module.less";
import DeviceTitleBar from "./DeviceTitleBar/DeviceTitleBar";
import TestItem from "./Testitem/Testitem";
import DividingLine from "../../../../components/DividingLine/DividingLine";

const Device: React.FC = () => {
  return (
    <TitleCar title="穿戴管理">
      <View className={styles.main}>
        <DeviceTitleBar />
        <TestItem
          name="血压"
          level="danger"
          subItems={[
            { name: "收缩压", value: "2000mmHg" },
            { name: "舒张压", value: "2000mmHg" },
            { name: "正常血压范围", value: "90~139次/分" },
          ]}
        />
        <DividingLine />
        <TestItem
          name="心率"
          level="normal"
          subItems={[{ name: "正常心率范围", value: "60~100次/分" }]}
        />
        <DividingLine />
        <TestItem
          name="血糖"
          level="danger"
          subItems={[{ name: "正常血糖范围", value: "3.9~6.1/dL" }]}
        />
        <DividingLine />
        <TestItem
          name="体脂率"
          level="warning"
          subItems={[{ name: "正常体脂率范围", value: "25%~28%" }]}
        />
      </View>
    </TitleCar>
  );
};

export default Device;
