//Initializing Firebase Database
var config = {
    apiKey: "AIzaSyBzX5L4ZuMt0CMnlzfHWUPXPdAifCFzYug",
    authDomain: "tidder-94e9c.firebaseapp.com",
    databaseURL: "https://tidder-94e9c.firebaseio.com",
    projectId: "tidder-94e9c",
    storageBucket: "tidder-94e9c.appspot.com",
    messagingSenderId: "1030070446854"
};
firebase.initializeApp(config);
//Declaring variables
var database = firebase.database();
var name = "";
var feedback = "";






//Function to grab UserName and Feedback input values, store them in the database, reset form, and close modal
$("#s-button").on("click", function (event) {
    event.preventDefault();
    name = $("#UserName").val().trim();
    feedback = $("#Feedback").val().trim();
    console.log(name + feedback);
    resetForm();
    $(".close").click();
    storeValues();





});
//On click function to reset form when feedback button or submit button are clicked
$("#feedbackBt").on("click", function () {
    resetForm();


});
//Function to reset, empty, set form input classes to invalid, and set #check classes
function resetForm() {
    $("#UserName").val("");
    $("#Feedback").val("");
    $("#Feedback").removeClass("valid");
    $("#UserName").removeClass("valid");
    $("#UserName").addClass("invalid");
    $("#Feedback").addClass("invalid");
    $("#check").removeClass("far fa-check-circle");
    $("#check").addClass("fas fa-ban");
    $("#nameValid").show();
    $("#fbValid").show();
    $("#s-button").prop("disabled", true);
    $("#Feedback").prop("disabled", true);
    

}


//Function to store UserName and Feedback values in the database
function storeValues() {
    database.ref().push({
        name: name,
        feedback: feedback


    })

}
//Function for hide/show form instruction spans, set #check classes, and disable submit/enable Feedback input when UserName is valid
function nameValid() {
        $("#s-button").prop("disabled", true);
        $("#check").removeClass("far fa-check-circle");
        $("#check").addClass("fas fa-ban");
        $("#nameValid").hide();
        $("#Feedback").prop("disabled", false);
        

}
//Function for hide/show form instruction spans, set #check classes, and disable submit and Feedback input when UserName is invalid
function nameInvalid() {
        $("#s-button").prop("disabled", true);
        $("#check").removeClass("far fa-check-circle");
        $("#check").addClass("fas fa-ban");
        $("#nameValid").show();
        $("#Feedback").prop("disabled", true);
    

}
//Function for hide/show form instruction spans, set #check classes, and enable submit when feedback is valid
function feedValid() {
        $("#s-button").prop("disabled", false);
        $("#check").addClass("far fa-check-circle");
        $("#check").removeClass("fas fa-ban");
        $("#fbValid").hide();

}
//Function for hide/show form instruction spans, set #check classes, and disable submit when feedback is invalid
function feedInvalid() {
        $("#s-button").prop("disabled", true);
        $("#check").removeClass("far fa-check-circle");
        $("#check").addClass("fas fa-ban");
        $("#fbValid").show();

}





//Function to listen for UserName Form Data Validation 
$('#UserName').on('input', function () {
    var input = $(this);
    var re = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    var is_name = re.test(input.val());
    if (is_name) {
        input.removeClass("invalid").addClass("valid");
        nameValid();
    }
    else {
        input.removeClass("valid").addClass("invalid");
        nameInvalid();
    }
    
});
//Function to listen for Feedback Form Data Validation
$('#Feedback').on('input', function () {
    var input = $(this);
    var re = /^[A-Za-z 0-9 (.!?,;"'@#$%&)]{5,100}$/;
    var is_feed = re.test(input.val());
    if (is_feed) {
        input.removeClass("invalid").addClass("valid");
        feedValid();
        
    }
    else {
        input.removeClass("valid").addClass("invalid");
        feedInvalid();

        
    }
});






//Function to listen for additions to database and append them to Reviews section
database.ref().on("child_added", function (snapChild) {
    console.log(snapChild.val().feedback);
    console.log(snapChild.val().name);
    var row = $("<tr>");
    row.append('<div class="card"><div class="card-header" id="reviewHaeder">' + snapChild.val().name + '</div><div class="card-body"><p class="card-text">' + snapChild.val().feedback + '</p></div></div><br>');
    $("tbody").append(row);
});




















//APi key and url for youtube api
var key = "AIzaSyDa1T6i-oZRysekxLrAGqbpH5kuJvYAkdk";
var URL = "https://www.googleapis.com/youtube/v3/search";

//Function to call youtube api for videos
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

//Function to call google books api for books
function loadBooks(books) {

    var h = books.data.subject;
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + h, function (data) {
        console.log(data);
        showBooks(data);
    });

}

//Function to display videos on page
function showVideos(data) {
    $("#main").empty();
    console.log(data);
    for (var i = 0; i < data.items.length; i++) {
        $("#main").append('<div class="container" id ="mainDisplaySection"><div class="row align-items-center"><div class="col-12 col-md-3"><iframe  src="https://www.youtube.com/embed/' + data.items[i].id.videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="col-12 col-md-9"><h4>' + data.items[i].snippet.title + '</h4><p>' + data.items[i].snippet.description.substring(0, 100) + '</p></div></div></div><br>');
    }
}


//Function to display books on page
function showBooks(data) {
    console.log(data);
    $("#main").empty();
    for (var i = 0; i < 10; i++) {
        $("#main").append('<div class="container" id ="mainDisplaySection"><div class="row align-items-center"><div class="col-12 col-md-4"><img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '" alt="image not found" id="bookImage"></div><div class="col-12 col-md-8"><h4>' + data.items[i].volumeInfo.title + '</h4><p>' + data.items[i].searchInfo.textSnippet.substring(0, 100) + '</p><a href="' + data.items[i].volumeInfo.previewLink + '" target="_blank"><button class="btn btn-info" id="bookPreviewBt">Preview</button></a></div></div></div><br>');
    }
}

//On click events for videos that calls the load video function to call youtube api

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

//On click events for books that calls the load books function to call google books api

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





//Function for introduction displayed on page 
function introduction() {
    $("#main").empty();
    $("#main").append("<h1>Introduction</h1><br>");
    $("#main").append("<h2>*Resources for anyone learning Web Development</h2><br><h2>*Forum to offer feedback reviews</h2><br><h2>*Click/touch a topic to the left (top on mobile) to choose a list of either videos or books for the selected topic</h2><br><h2>*To add your review/feedback/suggestions for the site, click/touch the Feedback Button to the right (scroll down on mobile)</h2><br><h2>*Enter a valid first and/or last name and your message of 5-100 characters</h2>");
    $("#main").append("<p>Site design ©Satinder, Hunter, Luis, Mat<br>Selected icons ©FontAwesome<br></p>");
    
}


introduction();