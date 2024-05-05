import Vuex from "vuex";
import Vue from "vue";

import { Themes} from "./modules/Themes";

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    modules:{
      Themes
    }
  })
}

export default store
