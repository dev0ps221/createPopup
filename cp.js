class Popup{

    buildPopupNode(){

    }
    buildPopupTitleNode(){

    }
    buildPopupHeadNode(){

    }
    buildPopupCloseNode(){
        
    }
    buildPopupContentNode(){
        
    }

    constructor(title,parent){
        //construct a new Popup instance
        this.title = title
        this.parent = parent
    }
}



window.createPopup = (title,parent)=>{
    //create a new Popup instance
    const popup = new Popup(title,parent)

    //return the newly created Popup instance
    return Popup
}