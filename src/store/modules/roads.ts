import { GetterTree } from 'vuex';
import { roadsActions } from '../actions/roads';
import { roadsMutations } from '../mutations';
import { playerNumberToColor } from '../../config/constants';

/**
 * vuex getters
 */
const getters: GetterTree<IRoadsState, IRoadsState> = {
  roads: (state: IRoadsState) => {
    return state.roads;
  },

  roadColor: (state: IRoadsState) => (position: number): string => {
    const playerNumber = state.roads[position];
    return playerNumberToColor[playerNumber] || '';
  },

};

/**
 * vuex state(interface)
 */
export interface ICell {
  [key: number]: number;
}

export interface IRoadsState {
  roads: ICell;
}

/**
 * vuex state
 */
const state: IRoadsState = {
  roads: [],
};

/**
 * vuex modules
 */
export const roadsModule = {
  actions: roadsActions,
  mutations: roadsMutations,
  state,
  getters,
};
