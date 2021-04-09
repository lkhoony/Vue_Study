import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  // data가 들어가는 부분
  state : {
    todos : [
      { id : 1, text : 'buy a car', checked  : false},
      { id : 2, text : 'play game', checked  : false}
    ]
  },

  // state에 있는 데이터를 변경하려면 mutations 안에서 해야함
  // funcName : function(state, payload){} 형식으로 mutations 작성
  // mutations 사용 : this.$store.commit('mutation name',payload) >> payload로 전달되는 변수의 형식이 맞아야 됨
  mutations : {
    ADD_TODO(state, value) {
      state.todos.push({
        id : Math.random(),
        text : value,
        checked : false
      });
    },

    TOGGLE_TODO(state,{id,checked}){
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      });

      state.todos[index].checked = checked;
    },

    DELETE_TODO(state,todoId){
      const index = state.todos.findIndex(todo => {
        return todo.id === todoId;
      });
      state.todos.splice(index,1);
    }
  },

  actions : {

  },

  getters : {

  }
})
