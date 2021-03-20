window.onload = function(){
    var refSection = document.getElementById("references");

    // get all in-text references
    var elements = document.getElementsByClassName("in-text-ref");

    var refNum = 0;

    let baseURL = window.location.href.split("#")[0]

    for (element of elements){
        refNum ++;
        var refText = element.attributes.getNamedItem("text").value; // element.text;
        var refName = element.attributes.getNamedItem("name").value;//element.name;

        // construct link
        var linkEl = document.createElement("a");
        linkEl.setAttribute("href", baseURL + "#" + refName);
        linkEl.innerHTML = "[" + refNum.toString() + "]";
        element.append(linkEl);
        
        // construct reference
        var refp = document.createElement("p");
        refp.setAttribute("id", refName);
        refp.innerHTML = refNum.toString() + ". " + refText + "<br />";

        refSection.append(refp);
    }
}