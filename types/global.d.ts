/// <reference types="@tarojs/taro" />

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
  }
}

/// 图标名
declare type IconsName =
  | "diary"
  | "report"
  | "me"
  | "search"
  | "plus"
  | "right"
  | "help"
  | "circlePlus"
  | "lunch"
  | "dinner"
  | "breakfast"
  | "extraMeal"
  | "refresh";
