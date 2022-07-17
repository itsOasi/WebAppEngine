let log = {
    node: "",
    init: function () {
       this.node = document.querySelector("log");
       console.log(this.node);
    },
    write: async function (msg){
        let message = document.createTextNode(msg);
        let br = document.createElement("br");
        this.node.appendChild(message);
        this.node.appendChild(br);
    }
};