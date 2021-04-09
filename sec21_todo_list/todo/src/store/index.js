import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state  : {
        // data
        todos : [
            {id : 1, text : 'buy a car', checked :  false, completed : ''},
            {id : 2, text : 'play game', checked :  false, completed : ''}        
        ]
    },
    
    mutations : {
        // actions를 사용하여 data를 update
    },  

    actions : {    
        // methods를 정의
    },
    
    getters : {
        // similar with computed
    }
    
})