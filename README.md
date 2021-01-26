# createPopup
example usage :

in your html code :
<link rel='stylesheet' href='link-to-cp-style.css'/>
<script src='link-to-cp-script.js'>
</script> 

in your js code :
let popup = window.createPopup("body")
,text = "<h1>Hello world</h1>"
popup.setContent(popup.elem,text)
