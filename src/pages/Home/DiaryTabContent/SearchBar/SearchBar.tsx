/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 20:57
 */

import React from "preact/compat";
import { View } from "@tarojs/components";
import HomeNavigationBarContainer from "../../../../components/HomeNavigationBarContainer/HomeNavigationBarContainer";
import styles from "./searchBarStyles.module.less";
import SearchInput from "./SearchInput/SearchInput";
import UserList from "./UserList/UserList";

const SearchBar: React.FC = () => {
  return (
    <View className={styles.main}>
      <HomeNavigationBarContainer />
      <SearchInput />
      <UserList />
    </View>
  );
};

export default SearchBar;
