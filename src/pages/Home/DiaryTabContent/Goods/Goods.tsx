/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/18 03:48
 */

import React from "preact/compat";
import { Image, ScrollView, Text, View } from "@tarojs/components";
import TitleCar from "../TitleCar/TitleCar";
import goods1 from "../../../../assets/images/goods/goods1.jpeg";
import goods2 from "../../../../assets/images/goods/goods2.jpeg";
import goods3 from "../../../../assets/images/goods/goods3.jpeg";
import goods4 from "../../../../assets/images/goods/goods4.jpeg";
import goods5 from "../../../../assets/images/goods/goods5.jpeg";
import styles from "./goodsStyle.module.less";

type GoodsItemProps = {
  url: string;
  title: string;
  subtitle: string;
};
const GoodsItem: React.FC<GoodsItemProps> = (props) => {
  return (
    <View className={styles.goodsItem}>
      <Image
        src={props.url}
        className={styles.goodsItem__image}
        mode="heightFix"
      />
      <View className={styles.goodsItem__contentWrapper}>
        <View className={styles.goodsItem__contentWrapper__titles}>
          <View>{props.title}</View>
          <View className={styles.goodsItem__contentWrapper__titles__subtitle}>
            {props.subtitle}
          </View>
        </View>
        <View>
          <Text className={styles.goodsItem__contentWrapper__vip}>
            送半年VIP会员
          </Text>
        </View>
      </View>
    </View>
  );
};

const Goods: React.FC = () => {
  return (
    <TitleCar title="减重方案">
      <ScrollView scrollX className={styles.main}>
        <View className={styles.main__goodsItems}>
          <GoodsItem title="28天减肥产品" url={goods1} subtitle="重塑健康" />
          <GoodsItem title="28天减肥产品" url={goods2} subtitle="重塑健康" />
          <GoodsItem title="28天减肥产品" url={goods3} subtitle="重塑健康" />
          <GoodsItem title="28天减肥产品" url={goods4} subtitle="重塑健康" />
          <GoodsItem title="28天减肥产品" url={goods5} subtitle="重塑健康" />
        </View>
      </ScrollView>
    </TitleCar>
  );
};
export default Goods;
