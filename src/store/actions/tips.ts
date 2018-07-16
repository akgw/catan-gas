import { ActionContext, ActionTree } from 'vuex';
import { ITipsState } from '../modules/tips';
import { tipsNumberOrder } from '../../config/constants';

export const tipsActions: ActionTree<ITipsState, ITipsState> = {
  /**
   * 数字チップ情報の取得
   *
   * @param {Commit} commit
   * @param panels
   */
  async syncTipsPosition({ commit }: ActionContext<ITipsState, ITipsState>, panels) {
    if (panels.length <= 0) {
      return;
    }
    const tipsNumber = tipsNumberOrder;
    const tipsPosition: {[key: number]: number} = [];

    Object.keys(panels).forEach((positionId: string) => {
      if (panels[positionId] === 'desert') {
        return;
      }
      const number = tipsNumber.pop();
      if (number === undefined) {
        console.log('tipsNumber error');
        return;
      }
      tipsPosition[Number(positionId)] = number;
    });

    commit('setTips', tipsPosition);

    return tipsPosition;
  },
};
