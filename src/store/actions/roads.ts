import { ActionContext, ActionTree } from 'vuex';
import { IRoadsState } from '../modules/roads';
import { Roads } from '../../domain/Roads';

export const roadsActions: ActionTree<IRoadsState, IRoadsState> = {
  /**
   * 街道情報の取得
   *
   * @param {Commit} commit
   */
  fetchRoads({ commit }: ActionContext<IRoadsState, IRoadsState>) {
    Roads.readAll().then((value: {[key: number]: any}) => {
//      console.log(value);
      commit('setRoads', value[0]);
    }).catch((error) => {
      console.log(error);
    });
  },
};
