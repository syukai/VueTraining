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
            <workbox v-for="(n,index) in 10"\
                v-bind:worktime=worktime\
                v-bind:key="index">\
            </workbox>\
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


/*
 * Vue.js のコンポーネントと親子間データの送受信
 */
/* 子コンポーネント */
var childComp = Vue.extend({
  /* 親から parentMessage を受け取る */
  props: ['parentMessage'],
  template: '<div class="box"><h4>ここは子のスコープ</h4>' +
    '<p>{{ parentMessage }}</p><p>{{childSelf}}</p></div>',
  /* コンポーネントのデータはオブジェクトを返す関数にする */
  data: function() {
    return {
      childMessage: 'これは子のデータだよ',
      childOriginal: 'これも子のデータ'
    }
  },
  created: function() {
    this.$emit('send-message', this.childMessage)
    /* 渡した後に変更したら再度emitしないと反映されない */
    /* オブジェクトだと反映されるけどホントは良くない */
    /* こういう管理が大変になってきた場合は状態管理を使おう！ */
    this.childMessage = '子がデータを変更したよ'
  },
  computed:{
      childSelf:function(){
          this.$emit('send-message', this.childOriginal);
          return this.childOriginal;
      }
  }
})
/* 親のルートコンストラクタ */
var pcCommunication = new Vue({
  el: '#parent-child-communication',
  data: {
    /* 親が持っているデータ */
    parentMessage: 'これは親のデータだよ',
    /* 子から受け取ったデータを保管する為の空データ */
    childMessage: ''
  },
  components: {
    /* 子コンポーネントを登録する */
    'child-component': childComp
  },
  methods: {
    /* 子がイベントを発火した時に実行したい処理 */
    getChildMessage: function(text) {
      this.childMessage = text
    }
  }
})

