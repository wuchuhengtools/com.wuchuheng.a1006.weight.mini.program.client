/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 22:04
 */

import { View } from "@tarojs/components";
import React from "preact/compat";
import Avatar from "./Avatar/Avatar";
import avatar1 from "../../../../../assets/images/avatars/avatar1.png";
import avatar2 from "../../../../../assets/images/avatars/avatar2.png";
import styles from "./userListStyles.module.less";
import PlusButton from "./PlusButton/PlusButton";

const UserList: React.FC = () => {
  return (
    <>
      <View className={styles.main}>
        <Avatar url={avatar1} />
        <Avatar url={avatar2} />
        <Avatar url={avatar1} />
        <Avatar url={avatar2} />
        <PlusButton />
      </View>
    </>
  );
};

export default UserList;
