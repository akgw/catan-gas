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
   * @returns {Promise<any>}
   */
  export const refresh = async (): Promise<any> => {
    const panels = shufflePanels();
    await Gas.writeRangeCell(sheetName, 0, maxPanelNum(), 1, 1, panels);
    return Promise.resolve(panels);
  };

  const shufflePanels = () => {
    let array: string[] = [];
    Object.keys(panelNumList).forEach((key: string) => {
      const val = panelNumList[key];
      array = array.concat(Array(Number(val)).fill(key));
    });

    array = array.concat(['desert']);
    array.sort((): any => {
      return Math.random() - .5;
    });

    return array;
  };

  const maxPanelNum = () => {
    let sum: number = 0;
    Object.values(panelNumList).forEach((num) => {
      sum += Number(num);
    });
    return sum;
  };
}
