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
$("#complete").show();
$("#s-button").hide();
$("#Feedback").hide();







$("#s-button").on("click", function (event) {
    event.preventDefault();
    $("#complete").show();
    $("#s-button").hide();
    name = $("#UserName").val().trim();
    feedback = $("#Feedback").val().trim();
    console.log(name + feedback);
    $("#UserName").val("");
    $("#Feedback").val("");
    storeValues();





});

$("#feedbackBt").on("click", function() {
    $("#UserName").val("");
    $("#Feedback").val("");
    $("#Feedback").removeClass("valid");
    $("#UserName").removeClass("valid");
    $("#UserName").addClass("invalid");
    $("#Feedback").addClass("invalid");
    $("#complete").show();
    $("#s-button").hide();
    $("#Feedback").hide();
     

});
function storeValues() {
    database.ref().push({
        name: name,
        feedback: feedback


    })

}


$('#UserName').on('input', function () {
    var input = $(this);
    var re = /^[A-Za-z ]{5,25}$/;
    var is_name = re.test(input.val());
    if (is_name) { input.removeClass("invalid").addClass("valid"); $("#s-button").hide(); $("#complete").show(); $("#Feedback").show(); }
    else { input.removeClass("valid").addClass("invalid"); $("#s-button").hide(); $("#complete").show(); $("#Feedback").hide(); }
});

$('#Feedback').on('input', function () {
    var input = $(this);
    var re = /^[A-Za-z ]{5,40}$/;
    var is_feed = re.test(input.val());
    if (is_feed) { input.removeClass("invalid").addClass("valid"); $("#s-button").show(); $("#complete").hide(); }
    else { input.removeClass("valid").addClass("invalid"); $("#s-button").hide(); $("#complete").show(); }
});







database.ref().on("child_added", function (snapChild) {
    console.log(snapChild.val().feedback);
    console.log(snapChild.val().name);
    var row = $("<tr>");
    // var nameTd=$("<th>").text(snapChild.val().name);
    // var feedTd=$("<td>").text(snapChild.val().feedback);
    // row.append(nameTd).append(feedTd);
    // $("tbody").append(row);


    row.append('<div class="card"><div class="card-header" id="reviewHaeder">' + snapChild.val().name + '</div><div class="card-body"><p class="card-text">' + snapChild.val().feedback + '</p></div></div><br>');
    $("tbody").append(row);
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

//function to display videos on page
function showVideos(data){
    $("#main").empty();
    console.log(data);
    for (var i = 0; i < data.items.length; i++) {
        $("#main").append('<div class="container" id ="mainDisplaySection"><div class="row align-items-center"><div class="col-12 col-md-3"><iframe  src="https://www.youtube.com/embed/' + data.items[i].id.videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="col-12 col-md-9"><h4>' + data.items[i].snippet.title + '</h4><p>' + data.items[i].snippet.description.substring(0, 100) + '</p></div></div></div><br>');
    }
}
  

//function to display books on page
function showBooks(data){
    console.log(data);
    $("#main").empty();
    for(var i=0; i<10; i++){
        $("#main").append('<div class="container" id ="mainDisplaySection"><div class="row align-items-center"><div class="col-12 col-md-4"><img src="'+data.items[i].volumeInfo.imageLinks.thumbnail+'" alt="image not found" id="bookImage"></div><div class="col-12 col-md-8"><h4>'+data.items[i].volumeInfo.title+'</h4><p>'+data.items[i].searchInfo.textSnippet.substring(0,100)+'</p><a href="'+data.items[i].volumeInfo.previewLink+'" target="_blank"><button class="btn btn-info" id="bookPreviewBt">Preview</button></a></div></div></div><br>');
     }
}


//On click events for videos that calls the load video function to call youtube api

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

//On click events for books that calls the load books function to call google books api

$("#htmlBooks").on("click", {subject: "html basics"},loadBooks);
$("#cssBooks").on("click", {subject: "css"},loadBooks);
$("#bsBooks").on("click", {subject: "bootstrap"},loadBooks);
$("#jsBooks").on("click", {subject: "javascript"},loadBooks);
$("#jqBooks").on("click", {subject: "jquery"},loadBooks);
$("#exBooks").on("click", {subject: "express. js"},loadBooks);
$("#reactBooks").on("click", {subject: "react.js"},loadBooks);
$("#nodeBooks").on("click", {subject: "node.js"},loadBooks);
$("#mongoBooks").on("click", {subject: "mongo Db"},loadBooks);
$("#sqlBooks").on("click", {subject: "my sql"},loadBooks);
$("#gitBooks").on("click", {subject: "git hub"},loadBooks);
$("#javaBooks").on("click", {subject: "java"},loadBooks);

