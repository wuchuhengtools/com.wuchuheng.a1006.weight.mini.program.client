/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/17 15:39
 */

import React, { useEffect, useState } from "preact/compat";
import { ITouchEvent } from "@tarojs/components/types/common";
import { Image, ScrollView, View } from "@tarojs/components";
import styles from "./menuStyles.module.less";
import lettuce from "../../../../../../assets/images/menu/lettuce.png";
import beef from "../../../../../../assets/images/menu/beef.png";
import corn from "../../../../../../assets/images/menu/corn.png";
import milk from "../../../../../../assets/images/menu/milk.png";
import peach from "../../../../../../assets/images/menu/peach.png";
import orange from "../../../../../../assets/images/menu/oringe.png";
import pumpkin from "../../../../../../assets/images/menu/pumpkin.png";

type MenuItemProps = {
  url: string;
  name: string;
  value: number;
  isActive: boolean;
  onClick?: (event: ITouchEvent) => void;
};
const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <View
      className={[
        styles.main__item,
        props.isActive ? styles.main__item__selected : "",
      ].join(" ")}
      onClick={props.onClick}
    >
      <Image src={props.url} className={styles.main__item__image} />
      <View className={styles.main__item__name}>{props.name}</View>
      <View
        className={[
          styles.main__item__unit,
          props.isActive ? styles.main__item__unit__active : "",
        ].join(" ")}
      >
        {props.value}千卡
      </View>
    </View>
  );
};

type MenuProps = { isVisit: boolean };
const Menu: React.FC<MenuProps> = (props) => {
  const [items, setItems] = useState<MenuItemProps[]>([
    { url: lettuce, name: "生菜", value: 20, isActive: false },
    { url: beef, name: "牛肉", value: 140, isActive: false },
    { url: corn, name: "玉米", value: 30, isActive: false },
    { url: milk, name: "牛奶", value: 10, isActive: false },
    { url: peach, name: "黄桃", value: 5, isActive: false },
    { url: orange, name: "橘子", value: 1, isActive: false },
    { url: pumpkin, name: "南瓜", value: 10, isActive: false },
  ]);
  const onChange = (index: number) => {
    const newItems = JSON.parse(JSON.stringify(items)) as MenuItemProps[];
    newItems[index].isActive = !newItems[index].isActive;
    setItems(newItems);
  };
  const [mainStyle, setMainStyle] = useState<Record<string, string>>({
    display: props.isVisit ? "block" : "none",
  });
  const duration = 1000;
  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout> | undefined;
    if (!props.isVisit) {
      timeOut = setTimeout(() => {
        setMainStyle({
          display: "none",
        });
      }, duration - 200);
    } else {
      setMainStyle({
        display: "block",
      });
    }
    return () => clearTimeout(timeOut);
  }, [props.isVisit]);

  return (
    <View
      style={{ ...mainStyle, animationDuration: `${duration / 1000}s` }}
      className={[
        styles.main,
        props.isVisit ? styles.main__visit : styles.main__hide,
      ].join(" ")}
    >
      <ScrollView scrollX>
        <View className={styles.main__items}>
          {items.map((it, i) => (
            <MenuItem
              url={it.url}
              key={i}
              name={it.name}
              value={it.value}
              isActive={it.isActive}
              onClick={() => onChange(i)}
            />
          ))}
        </View>
      </ScrollView>
      <View className={styles.main__actions}>
        <View className={styles.main__actions__leftBar}>
          <View className={styles.main__actions__leftBar__item}>
            保存为食谱
          </View>
          <View className={styles.main__actions__leftBar__item}>查看更多</View>
        </View>
        <View className={styles.main__actions__button}>去结算</View>
      </View>
    </View>
  );
};

export default Menu;
