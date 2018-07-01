import { Gas } from '../infrastructure/Gas';
import { panelNumList } from '../config/constants';

export namespace Panels {
  /**
   * 取得先のシート名
   * @type {string}
   */
  const sheetName = 'board';

  /**
   * パネル情報を取得する
   *
   * @returns {Promise<any>}
   */
  export const readAll = async () => {
    return await Gas.readRangeCell(sheetName, 0, 1, maxPanelNum(), 1);
  };

  /**
   * パネルを設置する
   *
   * @param {number} position
   * @param {number} playerNumber
   * @returns {Promise<any>}
   */
  export const set = async (): Promise<any> => {
  //
  //   const panels = [];
  //
  //
  //   await Gas.writeRangeCell(sheetName, panels, 0, maxPanelNum());
  //   return Promise.resolve({
  //     position,
  //     playerNumber,
  //   });
  // };
  //
  // const shufflePanels = () => {
  //
  //
  //
  //
  };

  const maxPanelNum = () => {
    let sum: number = 0;
    Object.values(panelNumList).forEach((num) => {
      sum += Number(num);
    });
    return sum;
  };
}
