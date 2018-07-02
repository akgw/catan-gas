import { MutationTree } from 'vuex';
import { IRoadsState, ICell } from './modules/roads';
import { IPanelsState } from './modules/panels';
import { Roads } from '../domain/roads';
import IGenerateResponse = Roads.IGenerateResponse;
import { ITipsState } from './modules/tips';

export const roadsMutations: MutationTree<IRoadsState> = {

  setRoads(state: IRoadsState, roads: ICell): void {
    state.roads = roads;
  },

  setRoad(state: IRoadsState, value: IGenerateResponse): void {
    state.roads[value.position] = value.playerNumber;
  },
};

export const panelsMutations: MutationTree<IPanelsState> = {
  setPanels(state: IPanelsState, panels: ICell): void {
    state.panels = panels;
  },
};

export const tipsMutations: MutationTree<ITipsState> = {

};
