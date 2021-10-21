$(function(){

    const szuloElem = $('article');
    const sablonElem = $('.lampa');
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const lampaTomb = [];
    //const lampa = new Lampa();
    const meret = 9;
    $("article").empty();
    for (let index = 0; index < meret; index++) {
        const ujElem=sablonElem.clone().appendTo(szuloElem);
        const lampa = new Lampa(ujElem, index);
        lampaTomb.push(lampa);
    }
    sablonElem.remove();
    console.log(lampaTomb);

    $(window).on("lampaFelkapcsol",(esemeny) =>{
        let elemID = esemeny.detail;

        if(lampaTomb[elemID] < 8){
            lampaTomb[elemID+1].setAllapot();
        }else{
           
        }
        
    });
});