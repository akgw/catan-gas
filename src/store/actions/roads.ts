import { ActionContext, ActionTree } from 'vuex';
import { IRoadsState } from '../modules/roads';
import { Roads } from '../../domain/roads';
import IGenerateResponse = Roads.IGenerateResponse;

export const roadsActions: ActionTree<IRoadsState, IRoadsState> = {
  /**
   * 街道情報の取得
   *
   * @param {Commit} commit
   */
  fetchRoads({ commit }: ActionContext<IRoadsState, IRoadsState>) {
    Roads.readAll().then((value: {[key: number]: any}) => {
      commit('setRoads', value[0]);
    }).catch((error) => {
      console.log(error);
    });
  },

  updateRoad({ commit }: ActionContext<IRoadsState, IRoadsState>, payload) {
    Roads.generate(payload.position, payload.playerNumber).then((value: IGenerateResponse) => {
      commit('setRoad', value);
    }).catch((error) => {
      console.log(error);
    });
  },
};
