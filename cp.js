class CpPopup{
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
        this.popupElem = document.createElement('section')
        this.popupElem.classList.add('cp-popup')
        this.buildPopupHeadNode()
        this.buildPopupContentNode()
    }
    buildPopupTitleNode(){
        //build the popup title node (display the title of the actual popup)
        this.titleElem = document.createElement('h2')
        this.titleElem.classList.add('cp-title')
        this.titleElem.innerHTML = this.title
    }
    buildPopupHeadNode(){   
        //build the popup header
        this.headElem = document.createElement('div')
        this.headElem.classList.add('cp-head')
        this.buildPopupTitleNode()
        this.buildPopupCloseNode()
    }
    buildPopupCloseNode(){
        //build the close button
        this.closeElem = document.createElement('span')
        this.closeElem.classList.add('cp-close')
        this.closeElem.innerHTML = 'x'
        this.closeElem.addEventListener(
            'click',e=>{
                this.hide()
            }
        )
    }
    buildPopupContentNode(){
        //build the content element (this is where mainly the data will be shown in the popup)
        this.contentElem = document.createElement('section')
        this.contentElem.classList.add('cp-content')
    }
    setContent(content){
        //update the innerHTML content of the popup content node (can be dangerous, be cautious when loading data from ajax requests and with dynamic content injection)
        this.contentElem.innerHTML = content
    }
    show(){
        //show the popup
        this.popupElem.classList.add('visible')
    }
    hide(){
        //hide the popup
        this.popupElem.classList.remove('visible')
    }
    isVisible(){
        //check if the popup is visible
        return this.popupElem.classList.contains('visible')
    }
    isNotVisible(){
        //check if the popup is not visible
        return !this.isVisible()
    }
    switchVisibility(){
        //show the popup if not visible and vice versa
        if(this.isVisible()){
            this.hide()
        }else{
            this.show()
        }
    }
    appendPopup(){
        //append the popup to its parent elem
        this.parent.appendChild(this.popupElem)
    }
    unhookPopup(){
        //try to remove the popup from it's parents children (try in case the elem is already removed, we don't want that kind of Exception to stop our script for running)
        try{
            this.parent.remove(this.popupElem)
        }catch(e){
            console.log('error when remove popup from the children of '+this.parent)
        }
    }
    
    destroy(){
        //get rid of everything about this
        this.unhookPopup()
        
        // [ this section is not necessary
        this.contentElem = null
        this.closeElem = null
        this.titleElem = null
        this.headElem = null
        this.popupElem = null
        this.title = null
        this.content = null
        //end of this section is not necessary ]    
        
        delete(this.contentElem)
        delete(this.closeElem)
        delete(this.titleElem)
        delete(this.headElem)
        delete(this.popupElem)
        delete(this.title)
        delete(this.content)
        
    }

    //style and customisation
    changeHeaderBg(color){
        this.headElem.style.setProperty('--cp-head-bg',color)
    }
    changeHeaderFg(color){
        this.headElem.style.setProperty('--cp-head-fg',color)
    }
    changeCloseButtonBg(color){
        this.closeElem.style.setProperty('--cp-close-bg',color)
    }
    changeCloseButtonFg(color){
        this.closeElem.style.setProperty('--cp-close-fg',color)
    }

    constructor(title,parent){
        //construct a new Popup instance
        this.title = title
        this.parent = parent
        this.buildPopupNode()
        this.setupNodes()
        this.appendPopup()
    }
}
window.createPopup = (title,parent)=>{
    //create a new Popup instance
    const popup = new CpPopup(title,parent)

    //return the newly created Popup instance
    return popup
}