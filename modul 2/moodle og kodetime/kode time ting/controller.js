function changeName(){
    model.person.name = model.input.name;
    viewSelector();
};

function selectMenuOption(pageIndex){
    if (pageIndex == "Info"){
        infoPageSelect()
        console.log(pageIndex)
    }
    if (pageIndex == "Products") {
        productPageSelect()
    }
    

}
function productPageSelect(){
    model.currentPage = "productPage";
    viewSelector();
}

function infoPageSelect(){
    model.currentPage =  "infoPage"
    viewSelector();
}