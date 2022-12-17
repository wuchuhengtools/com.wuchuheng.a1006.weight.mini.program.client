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
import WeightLossGoal from "./WeightLossGoal/WeightLossGoal";
import DailyMeals from "./DailyMeals/DailyMeals";
import Goods from "./Goods/Goods";
import Device from "./Device/Device";

const DiaryTabContent: React.FC = () => {
  return (
    <>
      <SearchBar />
      <WeightManager />
      <WeightLossGoal />
      <DailyMeals />
      <Goods />
      <Device />
    </>
  );
};
export default DiaryTabContent;
