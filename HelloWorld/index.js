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


var worklist=
    {
        props:['worktime'],
        // template:'<tr><th>{{worktime.name}}</th><td is="workbox" v-for="n in 10" v-bind:{worktime:worktime,index:n}>&nbsp;</td></tr>'
        // template:'<tr><th>{{worktime.name}}</th><td v-for="n in 10">&nbsp;</td></tr>'
        // template:'<tr>\
        //     <th>{{worktime.name}}</th>\
        //     <td v-for="n in 10">&nbsp;</td>\
        //     </tr>'
        // template:'<tr>\
        //     <th>{{worktime.name}}</th>\
        //     <td is="workbox" v-for="n in 10" v-bind:worktime=worktime></td>\
        //     </tr>'
        template:'<tr>\
            <th>{{worktime.name}}</th>\
            <workbox v-for="n in 10" v-bind:worktime=worktime></workbox>\
            </tr>'
        // template:'<tr>\
        //     <th>{{worktime.name}}</th>\
        //     <td v-for="n in 10">\
        //         <ol>\
        //             <todo-item v-bind:todo="worktime"></todo-item>\
        //         </ol>\
        //     </td>\
        //     </tr>'
            
    };
// var workbox={
Vue.component('workbox',{
    props:['worktime'],
    template:'<td v-on:click="toggleActive" v-bind:class="{active: isActive}">&nbsp;{{worktime.text}}</td>',
    data:function(){return {isActive:false}
    }
,
    methods:{
        toggleActive:function(){
            this.isActive=!this.isActive;
        }
    }
});
var myappWithComponent = new Vue({
    el:'#myapp-with-component',
    data:{
        workers:[
            {workerid:'1',name:'山田',st:3,ed:5,text:'yamada'},
            {workerid:'2',name:'田中',st:1,ed:4,text:'tanaka'},
            {workerid:'3',name:'鈴木',st:2,ed:8,text:'suzuki'}
            ]
    },
    components:{
        // 'workbox':workbox,
        'worklist':worklist
    }
});
// Vue.component('todo-item',{
//     props:['todo'],
//     template:'<li>{{todo.text}}</li>'
// });
// Vue.component('terms-of-service', {
//   template: '\
//     <div v-once>\
//       <h1>Terms of Service</h1>\
//       ... a lot of static content ...\
//     </div>\
//   '
// })