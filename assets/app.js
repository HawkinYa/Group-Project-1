var key="AIzaSyDa1T6i-oZRysekxLrAGqbpH5kuJvYAkdk";
// var playlistId="UU29ju8bIPH5as8OGnQzwJyA";
var URL="https://www.googleapis.com/youtube/v3/search";


function loadvideos(queryString){
    var options={
        part:'snippet',
        key: key,
        maxResults:5,
        q:queryString.data.subject
    };
    $.getJSON(URL,options,function(data){
        console.log(data);
        console.log("hello");
        showVideos(data);
    });
}
function loadBooks(books){
    
    var h=books.data.subject;
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q="+h, function(data){
        console.log(data);
        showBooks(data);
    });
        
}

// function htmlvideos(){
//      loadBooks();
//     // loadvideos("html");
// }
// function cssvideos(){
//     loadvideos("css");
// }
// function jsvideos(){
//     loadvideos("javascript");
// }
// function jqvideos(){
//     loadvideos("jQuery");
// }
// function nodevideos(){
//     loadvideos("node.js");
// }
// function reactvideos(){
//     loadvideos("react.js");
// }
    
function showVideos(data){
    $("main").empty();
    console.log(data);
    for(var i=0; i<data.items.length; i++){
        $("main").append("<article><iframe width='200px' height='100px' src='https://www.youtube.com/embed/"+data.items[i].id.videoId+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><div class='details'><h4>"+data.items[i].snippet.title+"</h4><p>"+data.items[i].snippet.description.substring(0,100)+"</p></div></article>");
     }
}

function showBooks(data){
    console.log(data);
    $("main").empty();
    for(var i=0; i<10; i++){
        // console.log("no "+i+"."+data.items[i].volumeInfo.description);
        $("main").append("<article><img src='"+data.items[i].volumeInfo.imageLinks.thumbnail+"'><div class='details'><h4>"+data.items[i].volumeInfo.title+"</h4><br><a target='blank' href='"+data.items[i].volumeInfo.previewLink+"'><button class='btn btn-dark'>Preview</button></a><a target='blank' href='"+data.items[i].saleInfo.buyLink+"'><button class='btn btn-dark'>Buy</button></a></div></article>");
     }
}


// $("#htm").on("click", {subject: "html"},loadvideos);
// $("#cs").on("click", {subject: "css"},loadvideos);
// $("#js").on("click", {subject: "javascript"},loadvideos);
// $("#jq").on("click", {subject: "jQuery"},loadvideos);
// $("#rt").on("click", {subject: "react.js"},loadvideos);
// $("#node").on("click", {subject: "node.js"},loadvideos);

$("#htm").on("click", {subject: "html basics"},loadBooks);
// $("#cs").on("click", {subject: "css"},loadvideos);
// $("#js").on("click", {subject: "javascript"},loadvideos);
// $("#jq").on("click", {subject: "jQuery"},loadvideos);
// $("#rt").on("click", {subject: "react.js"},loadvideos);
// $("#node").on("click", {subject: "node.js"},loadvideos);
