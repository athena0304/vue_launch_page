
var initialIndexcpu = 0;
var initialIndexram = 1;


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
        rams: [
            {text: "1G"},
            {text: "2G"},
            {text: "4G"},
            {text: "8G"},
        ],
        infolists:[
            {label:"配置：",contentCPU:"2核",contentRAM:"2G"},
            
        ]
    },
    methods: {
        changeCpu: function(event,index){
            this.infolists[0].contentCPU = event.target.innerText;
            this.iscurcpu = index;
        },
        changeRam: function(event,index){
            this.infolists[0].contentRAM = event.target.innerText;
            this.iscurram = index;
        }
    }
})