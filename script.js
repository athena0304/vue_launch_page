
var initialIndexcpu = 1;
var initialIndexram = 1;
var ramGroupArr = [[
            {text: "1G"},
            {text: "2G"},
            {text: "4G"},
            {text: "8G"},
        ],[
            {text: "2G"},
            {text: "4G"},
            {text: "8G"},
            {text: "16G"}
        ],[
            {text: "4G"},
            {text: "8G"},
            {text: "16G"},
            {text: "30G"},
        ],[
            {text: "8G"},
            {text: "16G"},
            {text: "32G"},
            {text: "48G"},
        ]
    ]


var vm = new Vue({
    el: "#config-box",
    data: {
        iscurcpu: initialIndexcpu,
        iscurram: initialIndexram,
        cpus: [
            {text: "2核"},
            {text: "4核"},
            {text: "8核"},
            {text: "16核"},
        ],
        rams: ramGroupArr[1],
        infolists:[
            {label:"配置：",contentCPU:"4核",contentRAM:"4G"},
            
        ]
    },
    computed: {},
    methods: {
        changeCpu: function(event,index){
            this.infolists[0].contentCPU = event.target.innerText;
//            this.infolists[0].contentRAM = event.target.innerText;
            this.iscurcpu = index;
            this.iscurram = 1;
            this.rams = ramGroupArr[index];
        },
        changeRam: function(event,index){
            this.infolists[0].contentRAM = event.target.innerText;
            this.iscurram = index;
        }
    }
})


vm.$watch('rams', function (val) {
  this.infolists[0].contentRAM = val[1].text;
})