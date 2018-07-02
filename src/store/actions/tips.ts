import { ActionContext, ActionTree } from 'vuex';
import { IRoadsState } from '../modules/roads';

export const tipsActions: ActionTree<IRoadsState, IRoadsState> = {
  /**
   * 数字チップ情報の取得
   *
   * @param {Commit} commit
   */
  fetcTips({ commit }: ActionContext<IRoadsState, IRoadsState>) {

  },

};
