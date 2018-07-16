import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { roadsModule } from './modules/roads';
import { panelsModule } from './modules/panels';
import { tipsModule } from './modules/tips';
import { landsModule } from './modules/lands';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  roads: roadsModule,
  panels: panelsModule,
  tips: tipsModule,
  lands: landsModule,
};

export default new Vuex.Store({
  modules,
});
