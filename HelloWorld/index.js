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

var appcompute = new Vue({
    el:"#app-compute",
    data:{
        v1:'',
        v2:'',
        v3:''
    },
    computed:{
        combine_message: function(){
            return "v1:[" + this.v1 + "] v2:[" + this.v2 + "] v3:[" + this.v3 + "]";
        }
    }
});

var nameapp_1 = new Vue({
    el:"#nameapp-1",
    data:{
        firstName:"taro",
        lastName:"Yamamoto",
        fullName:"Yamamoto taro"
    },
    watch:{
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
        }
    }
});

var nameapp_2 = new Vue({
    el:"#nameapp-2",
    data:{
        firstName:"taro",
        lastName:"Yamamoto"
    },
    computed:{
        fullName:{
            get: function(){
                return this.lastName + " " + this.firstName;
            },
            set: function(value){
                var names = value.split(' ');
                this.lastName = names[0];
                this.firstName = names[names.length -1];
            }
        }
    }
});

var watchExample = new Vue({
    el:"#watch-example",
    data:{
        input_value:"",
        return_value:"please input."
    },
    watch:{
        input_value:function(value){
            this.return_value = "Now entering...";
            this.getReturn();
        }
    },
    methods:{
        getReturn:_.debounce(
            function(){
                this.return_value = "Now entering too...";
                var vm = this;
                axios.get("https://yesno.wtf/api")
                    .then(function(response){
                        // vm.return_value = "get return value!";
                        vm.return_value = vb.input_value;
                    }).catch(function(exception){
                        vm.return_value = "Exception throwed.";
                    });

                // this.return_value = this.input_value;
            }
            ,500
        )
    }
});

var watch2computed = new Vue({
    el:"#watch-example_to_computed",
    data:{
        input_value:"please input here",
        // return_value:"get return here"
    },
    computed:{
        return_value:function(){
            return this.input_value;

            // returnが必要なので非同期の結果を返せない
            // var vm = this;
            // axios.get("https://yesno.wtf/api")
            //     .then(function(response){
            //         vm.return_value = vm.input_value;
            //     })
        }
    }
});

var dynamicClass = new Vue({
    el:"#dynamicClass",
    data:{
        isActive:true,
        hasError:true
    }
});
