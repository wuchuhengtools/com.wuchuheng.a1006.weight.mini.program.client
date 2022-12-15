import React, { useState } from "preact/compat";
import Taro from "@tarojs/taro";
import "./Home.less";
import Navigation, { TabProps } from "./Navigation/Navigation";
import { logInfo } from "../../utils/logUtil";
import DiaryTabContent from "./DiaryTabContent/DiaryTabContent";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabs: Omit<TabProps, "onClick">[] = [
    { icon: "diary", text: "日记", content: <DiaryTabContent /> },
    { icon: "report", text: "热量", content: <>report</> },
    { icon: "me", text: "我的", content: <>me</> },
  ];
  const onChange = (index: number) => {
    setActiveIndex(index);
    const title = tabs[index].text;
    Taro.setNavigationBarTitle({ title }).then(() =>
      logInfo(`Set title successfully. title: ${title}`)
    );
  };

  return (
    <Navigation tabs={tabs} activeIndex={activeIndex} onChange={onChange} />
  );
};

export default Home;
