AFRAME.registerComponent("thumbnail",{
    init:function(){
        this.placesContainer = this.el;
        this.createcard();
    },

    createcard:function(){
        const thumbnailRef=[
            {
                id:"tiger",
                title:"TIGER",
                url:"./assets/tiger.jpg"
            },
            {
                id:"lizard",
                title:"LIZARD",
                url:"./assets/lizard.jpg"
            },
            {
                id:"spider",
                title:"SPIDER",
                url:"./assets/spider.jpg"
            },
            {
                id:"butterfly",
                title:"BUTTERFLY",
                url:"./assets/butterfly.jpg"
            },
        ];
        let prevoiusXPosition = -60;

        for(var item in thumbnailRef){
            const posX = prevoiusXPosition +25;
            const posY = 10;
            const posZ = -40;
            const position = {x:posX, y:posY, z:posZ};
            prevoiusXPosition = posX;
            const borderEl = this.createBorder(position, item.id);

            const thumbnail = this.createThumbNail(item);
            borderEl.appendChild(thumbnail)

            this.placesContainer.appendChild(borderEl);


        }
    },

    createBorder:function(position, id){
        const entityEL=document.createElement("a-entity");
        entityEL.setAttribute("cursor-listener",{})
        entityEL.setAttribute("id",id);
        entityEL.setAttribute("position",position);
        entityEL.setAttribute("visible", true);
        entityEL.setAttribute("geometry",{
            primitive:"ring",
           // width:"15",
            //height:"15",
            //depth:"0.01"
            radiusInner:"9",
            radiusOuter:"10"
        });
        entityEL.setAttribute("material",{color:"black",opacity:1})

        return entityEL;
    },

    createThumbNail:function(item){
        const entityEL = document.createElement("a-entity");
        entityEL.setAttribute("visible",true);
        entityEL.setAttribute("geometry",{
            primitive:"circle",
            //width:"10",
            //height:"10",
            //depth:"0.1"
            radius:9
        });
        entityEL.setAttribute("material",{src: item.url});

        return entityEL;
    },

})