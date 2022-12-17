/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/16 23:47
 */

import React, { useState } from "preact/compat";
import { ITouchEvent } from "@tarojs/components/types/common";
import { View } from "@tarojs/components";
import Icons from "../../../../../components/Icons/Icons";
import styles from "./dailyMealsStyle.module.less";
import Menu from "./Menu/Menu";

type DailyMealsItemProps = {
  title: string;
  subtitle: string;
  iconName: IconsName;
  iconWrapperClassName?: string;
};
const DailyMealsItem: React.FC<DailyMealsItemProps> = (props) => {
  const iconSize = 1.8;
  const [isVisitMenu, setIsVisitMenu] = useState(false);
  const onVisitMenu = (event: ITouchEvent) => {
    setIsVisitMenu(!isVisitMenu);
    event.stopPropagation();
  };

  return (
    <>
      <View className={styles.main} onClick={onVisitMenu}>
        <View className={styles.main__leftBar}>
          <View
            className={[
              styles.main__iconWrapper,
              props.iconWrapperClassName || "",
            ].join(" ")}
          >
            <Icons
              name={props.iconName}
              size={iconSize}
              className={styles.main__iconWrapper__icon}
            />
          </View>
          <View className={styles.main__leftBar__title}>{props.title}</View>
          <View className={styles.main__leftBar__subtitle}>
            {props.subtitle}
          </View>
        </View>
        <Icons
          name="circlePlus"
          size={iconSize}
          className={styles.main__icon}
        />
      </View>
      <View className={styles.menu}>
        <Menu isVisit={isVisitMenu} />
      </View>
    </>
  );
};

export default DailyMealsItem;
