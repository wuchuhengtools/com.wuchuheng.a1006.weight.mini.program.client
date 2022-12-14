/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/12/14 18:41
 */

const dateTimeToString = (dateTime: Date) => {
  let month: number = dateTime.getMonth() + 1;
  let day: number = dateTime.getDate();
  const f = (v: number): string => (v >= 10 ? v + "" : `0${v}`);

  return `${dateTime.getFullYear()}/${f(month)}/${f(day)} ${f(
    dateTime.getHours()
  )}:${f(dateTime.getMinutes())}:${f(dateTime.getSeconds())}`;
};

const logInfo = (message: string) => {
  console.log(`${dateTimeToString(new Date())} ${message}`);
};

export { logInfo };
