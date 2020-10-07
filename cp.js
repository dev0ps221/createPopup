let version = "0.1"
let cpIssue = (i,m) => {
    console.log(
    `createPopup v ${version}\n`,
    `'issue < ${i} > : "${m}"'` 
    )
    return null
}
window.addEventListener(
    'load',
    e=>{
        (
            ()=>{
                window.createPopup = (parent) => {
                    let popup = document.createElement(
                        'section'
                    )
                    popup.className = 'cp-popup'
                    popup.style = `
                        position:absolute;
                        top:0;
                        left:0;
                        margin:2%;
                        width:96%;
                        height:96%;
                        background:rgba(0,0,0,0.8);
                    `
                    let close = document.createElement('span')
                    close.className = 'cp-popup-close'
                    close.innerText = 'x'
                    close.style = `
                        position:absolute;
                        right:1%;
                        top:1%;
                        color:brown;
                        font-weight:bolder;
                    `
                    close.addEventListener(
                        'mouseout',
                        e=>{

                            e.target.style = `
                                position:absolute;
                                right:1%;
                                top:1%;
                                cursor:pointer;
                                color:brown;
                                font-weight:bolder;
                            `
                            
                        }
                    )
                    close.addEventListener(
                        'mouseon',
                        e=>{

                            e.target.style = `
                                position:absolute;
                                right:1%;
                                top:1%;
                                color:brown;
                                font-weight:bolder;
                            `
                            
                        }
                    )
                    close.addEventListener(
                        'click',
                        e=>{
                            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
                        }
                    )
                    let content = document.createElement('section')
                    content.className = 'cp-popup-content'
                    popup.appendChild(content)
                    popup.appendChild(close)
                    if (document.querySelector(parent)) return (
                        (popup,parent)=>{
                            let setContent = (popup,content) => {
                                popup.querySelector('.cp-popup-content').innerHTML = content
                            }
                            document.querySelector(parent).appendChild(popup)
                            let elem = popup
                            return {
                                elem,
                                setContent
                            }
                        }
                    ) (popup,parent)
                    else return cpIssue(
                        'argument invalide :',
                        "Le selecteur recu ne correspond a aucun element du D.O.M."
                    )
                }   
            }
        )()
    }
)