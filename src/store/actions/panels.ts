import { ActionContext, ActionTree } from 'vuex';
import { IRoadsState } from '../modules/roads';
import { Panels } from '../../domain/panels';

export const panelsActions: ActionTree<IRoadsState, IRoadsState> = {
  /**
   * パネル情報の取得
   *
   * @param {Commit} commit
   */
  async fetchPanels({ commit }: ActionContext<IRoadsState, IRoadsState>) {
    await Panels.readAll().then((value: {[key: number]: any}) => {
      commit('setPanels', value[0]);
    }).catch((error) => {
      console.log(error);
    });
  },

  /**
   * パネル情報の初期化
   *
   * @param {Commit} commit
   * @param payload
   */
  refreshPanels({ commit }: ActionContext<IRoadsState, IRoadsState>, payload) {
    Panels.refresh().then((value) => {
      commit('setPanels', value);
    }).catch((error) => {
      console.log(error);
    });
  },
};
