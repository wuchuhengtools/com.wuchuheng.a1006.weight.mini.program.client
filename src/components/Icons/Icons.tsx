/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/14 17:31
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import styles from "./IconsStyles.module.less";

type IconsProps = {
  name: IconsName;
  size?: number;
  className?: string;
};

const Icons: React.FC<IconsProps> = ({ name, size, className }) => {
  className += "";
  size = size || 0;
  const fontSize = `${size}rem`;

  return (
    <View
      className={[className, styles.main, "iconfont", `icon-${name}`].join(" ")}
      style={{ fontSize: `${fontSize}` }}
    />
  );
};

export default Icons;
