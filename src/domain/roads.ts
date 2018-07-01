import { Gas } from '../infrastructure/Gas';

export namespace Roads {
  /**
   * 取得先のシート名
   * @type {string}
   */
  const sheetName = 'board';
  // /**
  //  * 盤面を初期化する
  //  */
  // export const initialize = async (): Promise<void> => {
  //   await Gas.clearSheet(sheetName);
  //
  //   for (const key in initialStones) {
  //     const initialStone = initialStones[key];
  //     await Gas.writeCell(sheetName, initialStone['row'], initialStone['column'], initialStone['stone']);
  //   }
  // };

  /**
   * 街道情報を取得する
   *
   * @returns {Promise<any>}
   */
  export const readAll = async () => {
    return await Gas.readRangeCell(sheetName, 0, 0, 73, 0);
  };

}
