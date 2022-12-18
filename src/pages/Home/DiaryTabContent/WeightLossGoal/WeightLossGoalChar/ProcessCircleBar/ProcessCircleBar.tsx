/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/15 23:48
 */

import { Canvas, CoverView, View } from "@tarojs/components";
import uCharts from "@qiun/ucharts";
import React, { useEffect } from "preact/compat";
import Taro from "@tarojs/taro";

const uChartsInstance = {};

type StateProps = {
  cWidth: number;
  cHeight: number;
  pixelRatio: number;
};

type ProcessCircleBarProps = {
  widthRatePerson: number;
};

const ProcessCircleBar: React.FC<ProcessCircleBarProps> = (props) => {
  const key = "KFytQvPhWrcmnQVpNIfNmEHBwvRkUsMw";
  const width = 750 * props.widthRatePerson;
  const height = 700 * props.widthRatePerson;
  const tap = (e) => {
    uChartsInstance[e.target.id].touchLegend(e);
    uChartsInstance[e.target.id].showToolTip(e);
  };
  /**
   * 绘制进度条
   * @param id
   * @param data
   * @param newSate
   */
  const drawCharts = (id, data, newSate: StateProps) => {
    const { cWidth, cHeight, pixelRatio } = newSate;
    let ctx = Taro.createCanvasContext(id);
    uChartsInstance[id] = new uCharts({
      type: "arcbar",
      context: ctx,
      width: cWidth,
      height: cHeight,
      series: data.series,
      pixelRatio: pixelRatio,
      animation: true,
      background: "#FFFFFF",
      color: [
        "#1890FF",
        "#91CB74",
        "#FAC858",
        "#EE6666",
        "#73C0DE",
        "#3CA272",
        "#FC8452",
        "#9A60B4",
        "#ea7ccc",
      ],
      padding: undefined,
      title: {
        name: "80",
        fontSize: 30,
        color: "#37CEA3",
      },
      subtitle: {
        name: "还可摄入热量",
        fontSize: 10,
        color: "#B6B6B6",
      },
      extra: {
        arcbar: {
          type: "circle",
          width: 10,
          backgroundColor: "#7AE8CE",
          startAngle: 1.5,
          endAngle: 0.25,
          gap: 2,
        },
      },
    });
  };

  const getServerData = (newSate: StateProps) => {
    setTimeout(() => {
      let res = {
        series: [
          {
            name: "还可摄入热量",
            color: "#37CEA3",
            data: 0.8,
          },
        ],
      };
      drawCharts(key, res, newSate);
    }, 500);
  };
  useEffect(() => {
    const sysInfo = Taro.getSystemInfoSync();
    let pixelRatio = 1;
    let cWidth = sysInfo.windowWidth * props.widthRatePerson;
    let cHeight =
      (height / width) * sysInfo.windowWidth * props.widthRatePerson;
    getServerData({ cWidth, cHeight, pixelRatio });
  });

  return (
    <View style={{ height: `${height}rpx`, width: `${width}rpx` }}>
      <CoverView>
        <Canvas
          canvas-id={key}
          id={key}
          style={{ width: `${width}rpx`, height: `${height}rpx` }}
          onTouchEnd={tap}
        />
      </CoverView>
    </View>
  );
};

export default ProcessCircleBar;
