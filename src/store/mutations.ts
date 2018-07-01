import { MutationTree } from 'vuex';
import { IRoadsState, ICell } from './modules/roads';

export const roadsMutations: MutationTree<IRoadsState> = {

  setRoads(state: IRoadsState, roads: ICell): void {
    state.roads = roads;
  },
};
