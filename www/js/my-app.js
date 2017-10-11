// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  material: true,
  modalTitle: 'Data'	
});

var sensortag,bigdata=[],recording
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
  // Do something here for "about" page

})


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
  // Get page data from event data
  var page = e.detail.page;

  if (page.name === 'about') {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
  }
  if (page.name === 'news') {
    myApp.alert('this is the new news page ')
  }
  $$('.accordion-item').on('accordion:opened', function () {
    myApp.alert('Accordion item opened');
  });


})

myApp.onPageInit('index', function (page) {
  console.log('hi')
  // Do something here for "about" page
  $$('.prompt-title-ok-cancel').on('click', function () {
   
  });

}).trigger()
myApp.onPageInit('exercise', function (page) {
  console.log('hello')
  // Do something here for "about" page
  //$$('.prompt-title-ok-cancel').on('click', function () {
   
  })

function startrecordin(){
  recording=true
  bigdata=[]
  
}

function stoprecordin(){
  recording=false
 // console.log(bigdata);
  mydata = JSON.stringify(bigdata);
  console.log(mydata);
}


function calAcc(){
	//alert(getAccResult(JSON.parse(mydata)))
	document.getElementById("Distancedata").innerHTML = "Distance Traveled:"+getAccResult(JSON.parse(mydata));
	
}
function calAbval(){
	document.getElementById("AbVelocitydata").innerHTML = "Absolute Velocity:"+getAbVelResult(JSON.parse(mydata));
}
function calAvgval(){
	document.getElementById("AvgVelocitydata").innerHTML = "Absolute Velocity:"+getAvgVelResult(JSON.parse(mydata));
}

function senddata(){
  myApp.prompt('Enter Your Email', 'Get The Data',
  function (value) {
   $.ajax({
     url:"https://www.regular.li/export/reporterForBLE.php",
     data:JSON.stringify({to:value,data:bigdata}),
     method:'post'
   }).done(function(){
     myApp.alert('data successfully sent')
     bigdata=[]
   }).fail(function(e){console.log(e)})
  }
  
  
);
}
/* // Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  myApp.alert('Here comes About page');
}) */

/* current date and time show */
/* <script>
$(document).ready(function(){
   var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear(),
       hours = currentDate.getHours(),
      minutes = currentDate.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }
  var time=day + "/" + month + "/" + year +" "+ hours + ":" + minutes ;
  document.getElementById("demo").innerHTML = time;
});  

</script>
//////time stamp event/////
$(document).ready(function(){
    var lastms, d;
    $("button").click(function(event){
        if (lastms){
            d = event.timeStamp - lastms
            $("p").text("Milliseconds since last click event: " + d);
        } else {
            $("p").text("Click the button again.");
        }
    lastms = event.timeStamp;
    document.getElementById("demo").innerHTML = lastms;
    });  
});  
</script> */