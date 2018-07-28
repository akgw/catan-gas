import { GetterTree } from 'vuex';
import { landsActions } from '../actions/lands';
import { landsMutations } from '../mutations';

/**
 * vuex getters
 */
const getters: GetterTree<ILandsState, ILandsState> = {
  lands: (state: ILandsState) => {
    return state.lands;
  },

  landsById: (state: ILandsState) => (id: number): IValue => {
    if (state.lands[id] === undefined) {
      return {
        player: '',
        land: '',
      };
    }

    return state.lands[id];
  },
};

interface IValue {
  player: string;
  land: string;
}
/**
 * vuex state(interface)
 */
interface ICell {
  [key: number]: IValue;
}

export interface ILandsState {
  lands: ICell;
}

/**
 * vuex state
 */
const state: ILandsState = {
  lands: [],
};

/**
 * vuex modules
 */
export const landsModule = {
  actions: landsActions,
  mutations: landsMutations,
  state,
  getters,
};
