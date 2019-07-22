
/*
 *  Intended for use with a button object, called by the onclick event.
 *  EX:
 *      <img id="toggle">
 *      <button id="toggle-btn" onclick="toggle('toggle-btn', 'toggle', 'small.png', 'big.png')">Click to view other image</button>
 *
 *  @param btnId : id of the button which calls the function
 *  @param imgId : the ID of the img tag, the contents of which we want to toggle
 *  @param small : the url of the small image (the image preview)
 *  @param big : the url of the large image (full size image)
 */
function toggleImg(btnId, imgId, small, big){
	var targetNode 	= document.getElementById(imgId); 	        // get this HTML Object
	var attribs 	= targetNode.attributes; 			// get the NamedNodeMap
	var imgName 	= attribs.getNamedItem("src").value; 		// gives us the img src (i.e. "img_name.png" )
	var btnText 	= document.getElementById(btnId).innerHTML;

	if(imgName == small){
		imgName = big;      // give the target the big img 
		btnText = "Hide large image";
	}else if(imgName == big){
		imgName = small;    // give the target the small img
		btnText = "View large image";
	}else{
		imgName = small;    // give the target the small img as a default
		btnText = "View large image";
	}
	
    	// finally, set the attributes
	attribs.getNamedItem("src").value = imgName;
	document.getElementById(btnId).innerHTML = btnText;
}
