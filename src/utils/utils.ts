/**
 * @description: 将输入的数值类型的值加上px单位
 * @param {any} value 输入的值
 * @return {*} 如果输入的值是数字类型返回加上px单位后的值，否则返回输入的值
 */
export function addUnit(value: any) {
  if (value === null || value === undefined) {
    return undefined;
  }
  return isNaN(value) ? value : `${value}px`;
}
