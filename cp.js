class Popup{
    popupElem = null
    headElem = null
    titleElem = null
    contentElem = null
    closeElem = null
    setupNodes(){
        this.headElem.appendChild(this.titleElem)
        this.headElem.appendChild(this.closeElem)
        this.popupElem.appendChild(this.headElem)
        this.popupElem.appendChild(this.contentElem)
    }
    buildPopupNode(){
        this.nodeElem = document.createElement('section')
        this.nodeElem.classList.add('cp-popup')
        this.buildPopupHeadNode()
        this.buildPopupContentNode()
    }
    buildPopupTitleNode(){
        this.titleElem = document.createElement('h2')
        this.titleElem.classList.add('cp-title')
        this.titleElem.innerHTML = this.title
    }
    buildPopupHeadNode(){   
        this.headElem = document.createElement('div')
        this.headElem.classList.add('cp-head')
        this.buildPopupTitleNode()
        this.buildPopupCloseNode()
    }
    buildPopupCloseNode(){
        this.closeElem = document.createElement('span')
        this.closeElem.classList.add('cp-close')
        this.closeElem.innerHTML = 'x'
    }
    buildPopupContentNode(){
        this.contentElem = document.createElement('section')
        this.contentElem.classList.add('cp-content')
    }

    constructor(title,parent){
        //construct a new Popup instance
        this.title = title
        this.parent = parent
        this.buildPopupNode()
        this.setupNodes()
    }
}



window.createPopup = (title,parent)=>{
    //create a new Popup instance
    const popup = new Popup(title,parent)

    //return the newly created Popup instance
    return Popup
}