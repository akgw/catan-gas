import { GetterTree } from 'vuex';
import { panelsActions } from '../actions/panels';
import { panelsMutations } from '../mutations';

/**
 * vuex getters
 */
const getters: GetterTree<IPanelsState, IPanelsState> = {
  panels: (state: IPanelsState) => {
    return state.panels;
  },
};

/**
 * vuex state(interface)
 */
interface ICell {
  [key: number]: number;
}

export interface IPanelsState {
  panels: ICell;
}

/**
 * vuex state
 */
const state: IPanelsState = {
  panels: [],
};

/**
 * vuex modules
 */
export const panelsModule = {
  actions: panelsActions,
  mutations: panelsMutations,
  state,
  getters,
};
