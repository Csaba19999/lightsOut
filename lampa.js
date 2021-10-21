class Lampa{
    constructor(elem, index){
        this.elem = elem;
        this.allapot = false;
        this.index = index;
        this.setSzin();

        //Ha rákattinunk az elemere az állapotát meg kell változtatni.
        this.elem.on("click", ()=>{
            console.log(this);
            this.setAllapot();
            this.lampaFelkapcsol();
        });
    }

    setSzin(){
        if(this.allapot){
            this.elem.css("background-color","green");
        }else{
            this.elem.css("background-color","red");
        }
    }
    setAllapot(){
        this.allapot = !this.allapot;
        this.setSzin();
    }

    lampaFelkapcsol(){
        let esemeny = new CustomEvent("lampaFelkapcsol", {detail : this.index});
        console.log("Eseméyn kiváltva");
        window.dispatchEvent(esemeny);

    }

}