AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId: { default: "", type: "string" },
      },
    init:function(){
        this.handleMouseEnterEvent();
    },

    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id");
            const animal = ["tiger","spider","lizard","butterfly"];
            if(animal.includes(id)){
                const placeContainer = document.querySelector("#places-container");
                placeContainer.setAttribute("cursor-listener", {
                  selectedItemId: id,
                });
                this.el.setAttribute("material",{
                    color:"purple",
                    opacity:1
                })
            } 
        })
    }
})