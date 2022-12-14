/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/14 17:00
 */
import React from "preact/compat";
import { ITouchEvent } from "@tarojs/components/types/common";
import { Text, View } from "@tarojs/components";
import styles from "./tabStyle.module.less";
import "../../../../app.less";
import Icons from "../../../../components/Icons/Icons";
import { TabProps } from "../Navigation";

const Tab: React.FC<Omit<TabProps, "content"> & { onClick: () => void }> = ({
  icon,
  text,
  className,
  ...props
}) => {
  className = className || "";
  const onClick = (event: ITouchEvent) => {
    props.onClick();
    event.stopPropagation();
  };

  return (
    <View className={[styles.main, className].join(" ")} onClick={onClick}>
      <Icons name={icon} size={1.5} />
      <Text className={styles.text}>{text}</Text>
    </View>
  );
};

export default Tab;
