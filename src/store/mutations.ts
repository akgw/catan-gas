import { MutationTree } from 'vuex';
import { IRoadsState, ICell } from './modules/roads';
import { IPanelsState } from './modules/panels';
import { Roads } from '../domain/roads';
import IGenerateResponse = Roads.IGenerateResponse;
import { ITipsState } from './modules/tips';
import { ILandsState } from './modules/lands';

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
  setTips(state: ITipsState, tips: {[key:number]: number}): void {
    state.tips = tips;
  },
};

export const landsMutations: MutationTree<ILandsState> = {
  setLands(state: ILandsState, lands: {[key:number]: {player: string, land: string}}): void {
    state.lands = lands;
  },
};
