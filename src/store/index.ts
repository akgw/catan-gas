import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { roadsModule } from './modules/roads';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  turn: roadsModule,
};

export default new Vuex.Store({
  modules,
});
