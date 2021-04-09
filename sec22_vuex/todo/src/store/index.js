import Vue from 'vue';
import Vuex from 'vuex';

// Vue.use() : 플러그인 사용하기 
Vue.use(Vuex);

export default new Vuex.Store({
    state  : {
        // data
        todos : [
            {id : 1, text : 'buy a car', checked :  false, completed : ''},
            {id : 2, text : 'play game', checked :  false, completed : ''}        
        ],

        todoText : ''
    },
    
    mutations : {
        // state의 data를 변경하려면 mutations에서 함수를 정의하고 함수 안에서 state에 접근하여 변경해야함
        // actions를 사용하여 data를 update

        ADD_TODO(state,value) {

            state.todoText = ''

            state.todos.push({
                id : Math.random(),
                text : value,
                checked : false,
                completed : ''
            });
        },

        TOGGLE_TODO(state, {id, checked}){

            const index = state.todos.findIndex(todo => {
                return todo.id === id;
              });

              state.todos[index].checked = checked;
        
              const date = new Date();
        
              if(checked){
                state.todos[index].completed = "completed at " + date.toLocaleTimeString();
              }else{
                state.todos[index].completed = '';
              } 
            
        },

        DELETE_TODO(state, todoId) {

            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
              });
              // splice(시작위치, 제거건수)
              state.todos.splice(index,1);
        
              // # filter를 사용해서도 가능
              // this.todos = this.todos.filter(todo => todo.id!== id)
        }
    },  

    actions : {    
        // methods를 정의
    },
    
    getters : {
        // similar with computed
    }
    
})
