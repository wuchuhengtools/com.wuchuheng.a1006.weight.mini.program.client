/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 22:05
 */

import React from "preact/compat";
import { Image } from "@tarojs/components";
import styles from "./avatarStyles.module.less";

type AvatarProps = {
  url: string;
};

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <>
      <Image src={url} className={styles.main} />
    </>
  );
};

export default Avatar;
