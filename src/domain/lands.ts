import { Gas } from '../infrastructure/Gas';

export namespace Lands {
  /**
   * 取得先のシート名
   * @type {string}
   */
  const sheetName = 'board';

  /**
   * シートの格納先列
   *
   * @type {number}
   */
  const storeY = 2;

  /**
   * 開拓地・街情報を取得する
   *
   * @returns {Promise<any>}
   */
  export const readAll = async () => {
    return await Gas.readRangeCell(sheetName, 0, storeY, 54, storeY);
  };

  /**
   * 開拓地・街を製造する
   *
   * @param {number} position
   * @param {number} playerNumber
   * @param {number} land
   * @returns {Promise<Roads.IGenerateResponse>}
   */
  export const generate = async (position: number, playerNumber: number, land: number): Promise<IGenerateResponse> => {
    const value = toCell(playerNumber, land);
    await Gas.writeCell(sheetName, position, storeY, value);
    return Promise.resolve({
      position,
      value,
    });
  };

  export interface IGenerateResponse {
    position: number;
    value: string;
  }

  const toCell = (playerNumber: number, land: number) => {
    return playerNumber + '_' + land;
  }
}
