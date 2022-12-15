/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 20:51
 */

import React from "preact/compat";
import SearchBar from "./SearchBar/SearchBar";
import WeightManager from "./WeightManager/WeightManager";

const DiaryTabContent: React.FC = () => {
  return (
    <>
      <SearchBar />
      <WeightManager />
    </>
  );
};
export default DiaryTabContent;
