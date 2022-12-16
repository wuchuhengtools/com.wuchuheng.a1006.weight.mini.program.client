/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/16 22:13
 */

import React from "preact/compat";
import { Input } from "@tarojs/components";
import styles from "./caloryInput.module.less";

type CaloricInputProps = {
  className?: string;
};
const CaloricInput: React.FC<CaloricInputProps> = (props) => {
  return (
    <Input
      className={[styles.inputStyle, props.className || ""].join(" ")}
      placeholderClass={styles.placeholder}
      placeholder="输入热量"
    />
  );
};

export default CaloricInput;
