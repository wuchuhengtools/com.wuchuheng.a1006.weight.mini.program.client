/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 22:25
 */
import React from "preact/compat";
import { Text, View } from "@tarojs/components";
import Icons from "../../../../../../components/Icons/Icons";
import styles from "./plusButtonStyles.module.less";

const PlusButton: React.FC = () => {
  return (
    <View className={styles.main}>
      <Icons name="plus" size={1.8} className={styles.main__icon} />
      <Text>会员关联</Text>
    </View>
  );
};
export default PlusButton;
