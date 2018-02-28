
/*
 *  Intended for use with a button object, called by the onclick event.
 *  EX:
 *      <img id="toggle">
 *      <button onclick="toggle('toggle', 'small.png', 'big.png')">Click to view other image</button>
 *
 *  @param id : the ID of the img tag, the contents of which we want to toggle
 *  @param small : the url of the small image (the image preview)
 *  @param big : the url of the large image (full size image)
 */
function toggleImg(id, small, big){
	var targetNode 	= document.getElementById(id); 	        // get this HTML Object
	var attribs 	= targetNode.attributes; 				// get the NamedNodeMap
	var imgName 	= attribs.getNamedItem("src").value; 	// gives us the img src (i.e. "img_name.png" )

	if(imgName == small){
		imgName = big;      // give the target the big img 
	}else if(imgName == big){
		imgName = small;    // give the target the small img
	}else{
		imgName = small;    // give the target the small img as a default
	}
	
    // finally, set the src attribute
	attribs.getNamedItem("src").value = imgName;
}
