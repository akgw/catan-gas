import { MutationTree } from 'vuex';
import { IRoadsState, ICell } from './modules/roads';
import { Roads } from '../domain/roads';
import IGenerateResponse = Roads.IGenerateResponse;

export const roadsMutations: MutationTree<IRoadsState> = {

  setRoads(state: IRoadsState, roads: ICell): void {
    state.roads = roads;
  },

  setRoad(state: IRoadsState, value: IGenerateResponse): void {
    state.roads[value.position] = value.playerNumber;
  },
};
