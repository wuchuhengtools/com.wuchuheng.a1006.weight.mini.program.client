/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/14 16:42
 */
import { ScrollView, View } from "@tarojs/components";
import { ReactNode } from "react";
import React from "preact/compat";
import styles from "./styles.module.less";
import Tab from "./Tab/Tab";

type NavigationProps = {
  tabs: Omit<TabProps, "onClick">[];
  activeIndex: number;
  onChange: (index: number) => void;
};

type TabProps = {
  icon: IconsName;
  text: string;
  className?: string;
  content: ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({
  tabs,
  activeIndex,
  onChange,
}) => {
  return (
    <>
      <ScrollView className={styles.main} scrollY>
        <View className={styles.content}>{tabs[activeIndex].content}</View>
      </ScrollView>
      <View
        className={styles.bottom}
        style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
      >
        {tabs.map((it, index) => (
          <Tab
            key={index}
            text={it.text}
            icon={it.icon}
            className={index == activeIndex ? styles.bottom_active : ""}
            onClick={() => onChange(index)}
          />
        ))}
      </View>
    </>
  );
};

export default Navigation;

export { TabProps };
