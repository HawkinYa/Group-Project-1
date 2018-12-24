//Initialize Firebase
var config = {
    apiKey: "AIzaSyBzX5L4ZuMt0CMnlzfHWUPXPdAifCFzYug",
    authDomain: "tidder-94e9c.firebaseapp.com",
    databaseURL: "https://tidder-94e9c.firebaseio.com",
    projectId: "tidder-94e9c",
    storageBucket: "tidder-94e9c.appspot.com",
    messagingSenderId: "1030070446854"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var name = "";
  var feedback = "";

  


  
  $("#submit-button").on("click", function(event) {
      event.preventDefault();
       name = $("#UserName").val().trim();
       feedback = $("#Feedback").val().trim();
       console.log(name+feedback);
       $("#UserName").val("");
       $("#Feedback").val("");
       storeValues();
       
       

     

    });
       function storeValues(){
           database.ref().push({
               name:name,
               feedback:feedback
               
               
            })
            
        }
        
        
        
        
        
        
        database.ref().on("child_added", function(snapChild){
            console.log(snapChild.val().feedback);
            console.log(snapChild.val().name);
            var row = $("<tr>");
            var nameTd=$("<td>").text(snapChild.val().name);
            var feedTd=$("<td>").text(snapChild.val().feedback);
            row.append(nameTd).append(feedTd);
            $("thead").append(row);
            
        
    });
    
        
        
        
      
  
      

  
  



     
     
     
 
 
  


var key="AIzaSyDa1T6i-oZRysekxLrAGqbpH5kuJvYAkdk";
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
        $("main").append("<article><img src='"+data.items[i].volumeInfo.imageLinks.thumbnail+"'><div class='details'><h4>"+data.items[i].volumeInfo.title+"</h4><a href='"+data.items[i].volumeInfo.infoLink+"'><button>Read More</button></a></div></article>");
     }
}

$("#htmlVideos").on("click", {subject: "html basics"},loadvideos);
$("#cssVideos").on("click", {subject: "css"},loadvideos);
$("#bsVideos").on("click", {subject: "bootstrap"},loadvideos);
$("#jsVideos").on("click", {subject: "javascript basics"},loadvideos);
$("#jqVideos").on("click", {subject: "jquery"},loadvideos);
$("#exVideos").on("click", {subject: "express. js"},loadvideos);
$("#reactVideos").on("click", {subject: "react.js"},loadvideos);
$("#nodeVideos").on("click", {subject: "node.js"},loadvideos);
$("#mongoVideos").on("click", {subject: "mongo Db"},loadvideos);
$("#sqlVideos").on("click", {subject: "my sql"},loadvideos);
$("#gitVideos").on("click", {subject: "git hub"},loadvideos);
$("#javaVideos").on("click", {subject: "java"},loadvideos);



$("#htmlBooks").on("click", {subject: "html basics"},loadBooks);
$("#cssBooks").on("click", {subject: "css"},loadBooks);
$("#bsBooks").on("click", {subject: "bootstrap"},loadBooks);
$("#jsBooks").on("click", {subject: "javascript basics"},loadBooks);
$("#jqBooks").on("click", {subject: "jquery"},loadBooks);
$("#exBooks").on("click", {subject: "express. js"},loadBooks);
$("#reactBooks").on("click", {subject: "react.js"},loadBooks);
$("#nodeBooks").on("click", {subject: "node.js"},loadBooks);
$("#mongoBooks").on("click", {subject: "mongo Db"},loadBooks);
$("#sqlBooks").on("click", {subject: "my sql"},loadBooks);
$("#gitBooks").on("click", {subject: "git hub"},loadBooks);
$("#javaBooks").on("click", {subject: "java"},loadBooks);
