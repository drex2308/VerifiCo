
var i = 0, 
    j = 0, 
    menu_items = [];
menu_items.push('upload');
menu_items.push('myuploads');
menu_items.push('query');

setTimeout(function(){
    $('div#'+menu_items[0]).css('display', 'block');
    flipDiv("upload");
}, 200);

function flipDiv(mItem){
    console.log("menu id = "+mItem);
    $("div#"+mItem).css('display', '');
    $("div#"+mItem).css('padding', '20px 0');
    $("div#"+mItem).css('height', '100%');
    i = 0;
    for(i; i < menu_items.length; i++){
        console.log("menu_items[i] = "+menu_items[i]+"mItem = "+ mItem);
        if(menu_items[i] !== mItem){
            $("div#"+menu_items[i]).css('display', 'none');
        }
    }
}



