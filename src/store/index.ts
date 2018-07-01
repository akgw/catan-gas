import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { roadsModule } from './modules/roads';
import { panelsModule } from './modules/panels';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  roads: roadsModule,
  panels: panelsModule,
};

export default new Vuex.Store({
  modules,
});
