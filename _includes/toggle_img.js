//<button onclick="toggleContent('What time is it?','time')">The time is?</button>

function toggleContent(text1, text2) {
    var text = document.getElementById("demo").innerHTML;
    if(text == text1){
    	text = text2;
    }else if(text == text2){
    	text = text1;
    }else{
    	text = text1;
    }
    document.getElementById("demo").innerHTML = text;
}
