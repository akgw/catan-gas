import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { roadsModule } from './modules/roads';
import { panelsModule } from './modules/panels';
import { tipsModule } from './modules/tips';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  roads: roadsModule,
  panels: panelsModule,
  tips: tipsModule,
};

export default new Vuex.Store({
  modules,
});
