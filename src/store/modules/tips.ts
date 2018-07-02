import { GetterTree } from 'vuex';
import { tipsActions } from '../actions/tips';
import { tipsMutations } from '../mutations';

/**
 * vuex getters
 */
const getters: GetterTree<ITipsState, ITipsState> = {
  tips: (state: ITipsState) => {
    return state.tips;
  },
};

/**
 * vuex state(interface)
 */
interface ICell {
  [key: number]: number;
}

export interface ITipsState {
  tips: ICell;
}

/**
 * vuex state
 */
const state: ITipsState = {
  tips: [],
};

/**
 * vuex modules
 */
export const tipsModule = {
  actions: tipsActions,
  mutations: tipsMutations,
  state,
  getters,
};
