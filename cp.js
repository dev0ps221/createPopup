class Popup{
    popupElem = null
    headElem = null
    titleElem = null
    contentElem = null
    closeElem = null
    buildPopupNode(){
        this.nodeElem = document.createElement('section')
        this.nodeElem.classList.add('cp-popup')
        this.buildPopupTitleNode()
    }
    buildPopupTitleNode(){
        this.titleElem = document.createElement('h2')
        this.titleElem.classList.add('cp-title')
        this.titleElem.innerHTML = this.title
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