/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 21:21
 */

import React from "preact/compat";
import { Input, View } from "@tarojs/components";
import styles from "./SearchInputStyles.module.less";
import Icons from "../../../../../components/Icons/Icons";

const SearchInput: React.FC = () => {
  return (
    <View className={styles.main}>
      <View className={styles.main__inputWrapper}>
        <Icons
          name="search"
          size={1.7}
          className={styles.main__inputWrapper__icon}
        />
        <Input
          placeholder="请搜索食物和热量"
          placeholderClass={styles.main__inputWrapper__placeholder}
        />
      </View>
    </View>
  );
};

export default SearchInput;
