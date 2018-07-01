import { ActionContext, ActionTree } from 'vuex';
import { IRoadsState } from '../modules/roads';
import { Panels } from '../../domain/panels';

export const panelsActions: ActionTree<IRoadsState, IRoadsState> = {
  /**
   * パネル情報の取得
   *
   * @param {Commit} commit
   */
  fetchPanels({ commit }: ActionContext<IRoadsState, IRoadsState>) {
    Panels.readAll().then((value: {[key: number]: any}) => {
      commit('setPanels', value[0]);
    }).catch((error) => {
      console.log(error);
    });
  },

  // updatePanels({ commit }: ActionContext<IRoadsState, IRoadsState>, payload) {
  //   // Roads.generate(payload.position, payload.playerNumber).then((value: IGenerateResponse) => {
  //   //   commit('setRoad', value);
  //   // }).catch((error) => {
  //   //   console.log(error);
  //   // });
  // },
};
