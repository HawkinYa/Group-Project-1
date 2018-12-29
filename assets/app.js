//Initialize Firebase
var config = {
    apiKey: "AIzaSyBzX5L4ZuMt0CMnlzfHWUPXPdAifCFzYug",
    authDomain: "tidder-94e9c.firebaseapp.com",
    databaseURL: "https://tidder-94e9c.firebaseio.com",
    projectId: "tidder-94e9c",
    storageBucket: "tidder-94e9c.appspot.com",
    messagingSenderId: "1030070446854"
<<<<<<< HEAD
  };
  firebase.initializeApp(config);
  $("#s-button").hide();

  var database = firebase.database();
=======
};
firebase.initializeApp(config);
$("#s-button").hide();
var database = firebase.database();
>>>>>>> a45818fb39fa0e21cfbe8f33e4177db848f1b9cf

var name = "";
var feedback = "";
var name1 = "";
var feedback1 = "";



<<<<<<< HEAD
  
  $("#s-button").on("click", function(event) {
      event.preventDefault();
      $("#complete").show();
      $("#s-button").hide();
       name = $("#UserName").val().trim();
       feedback = $("#Feedback").val().trim();
       console.log(name+feedback);
       $("#UserName").val("");
       $("#Feedback").val("");
       storeValues();
       
       
=======
>>>>>>> a45818fb39fa0e21cfbe8f33e4177db848f1b9cf


<<<<<<< HEAD

$("#s-button").on("click", function (event) {
    event.preventDefault();
    $("#s-button").hide();
    $("#complete").show();
    name = $("#UserName").val().trim();
    feedback = $("#Feedback").val().trim();
    console.log(name + feedback);
    $("#UserName").val("");
    $("#Feedback").val("");
    storeValues();
    

    

=======
    });
       function storeValues(){
           database.ref().push({
               name:name,
               feedback:feedback
               
               
            })
            
        }

        
$('#UserName').on('input', function() {
    var input=$(this);
    var re=/^[A-Za-z]{2,15}$/;
	var is_name=re.test(input.val());
	if(is_name){input.removeClass("invalid").addClass("valid");$("#s-button").hide();$("#complete").show();}
	else{input.removeClass("valid").addClass("invalid");$("#s-button").hide();$("#complete").show();}
});

$('#Feedback').on('input', function() {
    var input=$(this);
    var re=/^[A-Za-z ]{5,40}$/;
	var is_feed=re.test(input.val());
	if(is_feed){input.removeClass("invalid").addClass("valid");$("#s-button").show();$("#complete").hide();}
	else{input.removeClass("valid").addClass("invalid");$("#s-button").hide();$("#complete").show();}
});


        
        
        
        
        
        
        database.ref().on("child_added", function(snapChild){
            console.log(snapChild.val().feedback);
            console.log(snapChild.val().name);
            var row = $("<tr>");
            // var nameTd=$("<th>").text(snapChild.val().name);
            // var feedTd=$("<td>").text(snapChild.val().feedback);
            // row.append(nameTd).append(feedTd);
            // $("tbody").append(row);
            

            row.append('<div class="card"><div class="card-header" id="reviewHaeder">'+snapChild.val().name+'</div><div class="card-body"><p class="card-text">'+snapChild.val().feedback+'</p></div></div><br>');
            $("tbody").append(row);
    });
>>>>>>> 17ce63fa5af442a04c0d2506de101539eab9cf58
    
});
function storeValues() {
    database.ref().push({
        name: name,
        feedback: feedback
    })
}

database.ref().on("child_added", function (snapChild) {
    console.log(snapChild.val().feedback);
    console.log(snapChild.val().name);
    var row = $("<tr>");
    var nameTd = $("<td>").text(snapChild.val().name);
    var feedTd = $("<td>").text(snapChild.val().feedback);
    row.append(nameTd).append(feedTd);
    $("thead").append(row);
});


$('#UserName').on('input', function() {
    var input=$(this);
    var re = /^[A-Za-z]{2,15}$/;
    var is_name = re.test(input.val());
    if(is_name){input.removeClass("invalid").addClass("valid");$("#s-button").hide();}
    else{input.removeClass("valid").addClass("invalid");$("#s-button").hide();}
});

$('#Feedback').on('input', function() {
    var input=$(this);
    var re = /^[A-Za-z ]{4,40}$/;
    var is_feed = re.test(input.val());
    if(is_feed){input.removeClass("invalid").addClass("valid");$("#s-button").show();$("#complete").hide();}
    else{input.removeClass("valid").addClass("invalid");$("#s-button").hide();}
});


































var key = "AIzaSyDa1T6i-oZRysekxLrAGqbpH5kuJvYAkdk";
var URL = "https://www.googleapis.com/youtube/v3/search";


function loadvideos(queryString) {
    var options = {
        part: 'snippet',
        key: key,
        maxResults: 10,
        q: queryString.data.subject
    };
    $.getJSON(URL, options, function (data) {
        console.log(data);
        console.log("hello");
        showVideos(data);
    });
}
function loadBooks(books) {

    var h = books.data.subject;
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + h, function (data) {
        console.log(data);
        showBooks(data);
    });

}






function showVideos(data) {
    $("#main").empty();
    console.log(data);
    for (var i = 0; i < data.items.length; i++) {
        $("#main").append('<div class="container" id ="mainDisplaySection"><div class="row align-items-center"><div class="col-12 col-md-3"><iframe  src="https://www.youtube.com/embed/' + data.items[i].id.videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="col-12 col-md-9"><h4>' + data.items[i].snippet.title + '</h4><p>' + data.items[i].snippet.description.substring(0, 100) + '</p></div></div></div><br>');
    }
}

function showBooks(data) {
    console.log(data);
    $("#main").empty();
<<<<<<< HEAD
    for (var i = 0; i < 10; i++) {
        $("#main").append('<div class="container" id ="mainDisplaySection"><div class="row align-items-center"><div class="col-12 col-md-3"><img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '" alt="image not found" id="bookImage"></div><div class="col-12 col-md-9"><h4>' + data.items[i].volumeInfo.title + '</h4><p>' + data.items[i].searchInfo.textSnippet.substring(0, 100) + '</p><a href="' + data.items[i].volumeInfo.previewLink + '"><button class="btn btn-info" id="bookPreviewBt">Preview</button></a></div></div></div><br>');
    }
=======
    for(var i=0; i<10; i++){
        $("#main").append('<div class="container" id ="mainDisplaySection"><div class="row align-items-center"><div class="col-12 col-md-4"><img src="'+data.items[i].volumeInfo.imageLinks.thumbnail+'" alt="image not found" id="bookImage"></div><div class="col-12 col-md-8"><h4>'+data.items[i].volumeInfo.title+'</h4><p>'+data.items[i].searchInfo.textSnippet.substring(0,100)+'</p><a href="'+data.items[i].volumeInfo.previewLink+'"><button class="btn btn-info" id="bookPreviewBt">Preview</button></a></div></div></div><br>');
     }
>>>>>>> 17ce63fa5af442a04c0d2506de101539eab9cf58
}


// function showBooks(data){
//     console.log(data);
//     $("main").empty();
//     for(var i=0; i<10; i++){
//         $("main").append('<div class="card-group"><div class="card"><div class="card-body"><img src="'+data.items[i].volumeInfo.imageLinks.thumbnail+'" alt="image not found" id="bookImage"></div></div><div class="card"><div class="card-body"><div class="details"><h4>'+data.items[i].volumeInfo.title+'</h4><p>'+data.items[i].searchInfo.textSnippet.substring(0,100)+'</p><a href="'+data.items[i].volumeInfo.previewLink+'"><button class="btn btn-secondary" id="bookPreviewBt">Preview</button></a></div></div></div></div><br>');
//      }
// }


// function showVideos(data){
//     $("main").empty();
//     console.log(data);
//     for(var i=0; i<data.items.length; i++){
//         $("main").append("<article><iframe width='200px' height='100px' src='https://www.youtube.com/embed/"+data.items[i].id.videoId+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><div class='details'><h4>"+data.items[i].snippet.title+"</h4><p>"+data.items[i].snippet.description.substring(0,100)+"</p></div></article>");
//      }
// }

// function showBooks(data){
//     console.log(data);
//     $("main").empty();
//     for(var i=0; i<10; i++){
//         $("main").append("<article><img src='"+data.items[i].volumeInfo.imageLinks.thumbnail+"' alt='image not found' id='bookImage'><div class='details'><h4>"+data.items[i].volumeInfo.title+"</h4><p>"+data.items[i].searchInfo.textSnippet.substring(0,100)+"</p><a href='"+data.items[i].volumeInfo.previewLink+"'><button class='btn btn-secondary' id='bookPreviewBt'>Preview</button></a></div></article>");
//      }
// }

$("#htmlVideos").on("click", { subject: "html basics" }, loadvideos);
$("#cssVideos").on("click", { subject: "css" }, loadvideos);
$("#bsVideos").on("click", { subject: "bootstrap" }, loadvideos);
$("#jsVideos").on("click", { subject: "javascript basics" }, loadvideos);
$("#jqVideos").on("click", { subject: "jquery" }, loadvideos);
$("#exVideos").on("click", { subject: "express. js" }, loadvideos);
$("#reactVideos").on("click", { subject: "react.js" }, loadvideos);
$("#nodeVideos").on("click", { subject: "node.js" }, loadvideos);
$("#mongoVideos").on("click", { subject: "mongo Db" }, loadvideos);
$("#sqlVideos").on("click", { subject: "my sql" }, loadvideos);
$("#gitVideos").on("click", { subject: "git hub" }, loadvideos);
$("#javaVideos").on("click", { subject: "java" }, loadvideos);



$("#htmlBooks").on("click", { subject: "html basics" }, loadBooks);
$("#cssBooks").on("click", { subject: "css" }, loadBooks);
$("#bsBooks").on("click", { subject: "bootstrap" }, loadBooks);
$("#jsBooks").on("click", { subject: "javascript" }, loadBooks);
$("#jqBooks").on("click", { subject: "jquery" }, loadBooks);
$("#exBooks").on("click", { subject: "express. js" }, loadBooks);
$("#reactBooks").on("click", { subject: "react.js" }, loadBooks);
$("#nodeBooks").on("click", { subject: "node.js" }, loadBooks);
$("#mongoBooks").on("click", { subject: "mongo Db" }, loadBooks);
$("#sqlBooks").on("click", { subject: "my sql" }, loadBooks);
$("#gitBooks").on("click", { subject: "git hub" }, loadBooks);
$("#javaBooks").on("click", { subject: "java" }, loadBooks);

