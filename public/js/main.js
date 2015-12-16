function searchItUp() {
var access_token = "8724353.1677ed0.7db58679781a49d898d017e10fb2f93e",
	access_parameter = { access_token: access_token };

var hashTag = $("#tag_name").val();
var instaUrl = "https://api.instagram.com/v1/tags/" + hashTag + "/media/recent?access_token=" + access_token;

var instaResults = $("#results");

var instaStart = convertDate($("#start_date").val());
var instaEnd = convertDate($("#end_date").val());

pullImages();	


function convertDate(x) {
	var myDate = x;
	myDate=myDate.split("-");
	var newDate=myDate[1]+"/"+myDate[2]+"/"+myDate[0];
	var returnDate = (new Date(newDate).getTime())/1000;
	returnDate = returnDate.toString();
	returnDate = returnDate.slice(0, 5) + "99999";
	return returnDate;
}


function pullImages(){

	var type = "video/mp4";
	var width = "320px";
	var height = "320px";

	instaResults.show();


	$.ajax ({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: instaUrl,

		success: function(data) {

			console.log(instaStart);
			console.log(instaEnd);

				$(".feed").html("");
				for (var i = 0; i < 6; i++) {
					console.log(data.data[i].caption.created_time);
					if (data.data[i].caption.created_time  >= instaStart && data.data[i].caption.created_time <= instaEnd){
						console.log("inside");
						if(data.data[i].type == 'image'){
							$(".feed").append("<li><div><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a> <p>" + data.data[i].caption.from.username + "</p></div></li>");
						} else if (data.data[i].type == 'video') {
							$(".feed").append("<li><div><a target='_blank' href='" + data.data[i].link + "'><video width=" + width +" height=" + height +" controls><source src='" + data.data[i].videos.low_resolution.url + "'></source></video></a> <p>" + data.data[i].caption.from.username + "</p></div></li>");
						}
					} else { console.log("outside") }
				}

				$(".loadmore").show();
				$(".loadmore").click(function(){
					instaUrl = data.pagination.next_url;
					pullImages();
				})

	}
});

  	}
};

