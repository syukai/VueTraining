var myapp = new Vue({
	el: '#myapp',
	data: {
		message: 'Hello Vue.js!'
	}
});
var app_2 = new Vue({
	el: "#app_2",
	data:{
		message: "You loaded this page on " + new Date()
	}
}) ;
var app3 = new Vue({
	el: '#app-3',
	data:{
		seen: true
	}
});
var app4 = new Vue({
	el: "#app-4",
	data:{
		todos: [
			{subject:'国語'},
			{subject:'算数'},
			{subject:'理科'},
			{subject:'社会'}
		]
	}
});
var app5 = new Vue({
    el:"#app-5",
    data:{
        message: 'Hello Vue.js'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
});
var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese' },
            {id: 2, text: 'Meet' }
        ]
    }
});
var myapp2 = new Vue({
    el:'#myapp-2',
    data:{
        isDisabled:false
    }
});

var appfilter = new Vue({
    el:'#app-filter',
    data:{
        message: "lowercase"
    },
    filters:{
        capitalize: function(value){
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});
