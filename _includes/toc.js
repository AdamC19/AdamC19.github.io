
window.addEventListener("load", toc);


/*
 *  Intended to generate a "Table of Contents" upon page load.
 *  EX:
 *  
 *  <div id="toc" onload="toc()"></div>
 */

function toc(){
    const toc_elem = document.getElementById("toc");
    const content_elem = document.getElementById("content");

    for (let elem of content_elem.children){
        if(elem.matches('h2')){
            var new_p = document.createElement("p");
            var new_link = document.createElement("a");
            new_link.href = "{{page.url}}#" + elem.id;
            new_p.appendChild(new_link);
            new_link.innerHTML = elem.innerHTML;
            new_link.style.color = "black";
            new_p.style.margin = "4px";
            new_p.style.fontSize = "1.1em";
            toc_elem.appendChild(new_p);
        }
        else if(elem.matches('h3')){
            var new_p = document.createElement("p");
            var new_link = document.createElement("a");
            new_link.href = "{{page.url}}#" + elem.id;
            new_p.appendChild(new_link);
            new_link.innerHTML = "&nbsp;&nbsp;" + elem.innerHTML;
            new_link.style.color = "black";
            new_p.style.margin = "2px";
            new_p.style.fontSize = "1.05em";
            toc_elem.appendChild(new_p);
        }
        else if(elem.matches('h4')){
            var new_p = document.createElement("p");
            var new_link = document.createElement("a");
            new_link.href = "{{page.url}}#" + elem.id;
            new_p.appendChild(new_link);
            new_link.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + elem.innerHTML;
            new_link.style.color = "black";
            new_p.style.margin = "2px";
            new_p.style.fontSize = "0.9em";
            toc_elem.appendChild(new_p);
        }
        else if(elem.matches('h5')){
            var new_p = document.createElement("p");
            var new_link = document.createElement("a");
            new_link.href = "{{page.url}}#" + elem.id;
            new_p.appendChild(new_link);
            new_link.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + elem.innerHTML;
            new_link.style.color = "black";
            new_p.style.margin = "2px";
            new_p.style.fontSize = "0.8em";
            toc_elem.appendChild(new_p);
        }
    }
// });
}