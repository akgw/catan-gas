import { ActionContext, ActionTree } from 'vuex';
import { ILandsState } from '../modules/lands';
import { Lands } from '../../domain/lands';

export const landsActions: ActionTree<ILandsState, ILandsState> = {
  /**
   * 開拓地・街情報の取得
   *
   * @param {Commit} commit
   */
  fetchLands({ commit }: ActionContext<ILandsState, ILandsState>) {
    Lands.readAll().then((value: {[key: number]: any}) => {
      let lands: {[key: string]: string}[] = [];
      Object.keys(value[0]).forEach((key: string) => {
        const str = value[0][key].split('_');

        lands[Number(key)] = {
          player: str[0],
          land: str[1],
        };
      });

      console.log(lands);

      commit('setLands', lands);
    }).catch((error) => {
      console.log(error);
    });


  },
};
