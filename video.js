var myMp4 = document.getElementById("mp4"),
	myWebm = document.getElementById("webm"),
	myVid = document.getElementById("myVideo"),
	mp4Url = "",
	webmUrl = "";

function playVid(ID) {
	switch (ID) {
		case "one":
			mp4Url = "https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119";
			webmUrl = "https://www.uiuxwebdev.com/projects/videoGallery/blossoms.Webm";
			break;
		case "two":
			mp4Url = "https://youtu.be/FHBziuKCHNg";
			webmUrl = "https://www.uiuxwebdev.com/projects/videoGallery/splash.Webm";
			break;
		case "three":
			mp4Url = "https://www.uiuxwebdev.com/projects/videoGallery/transport.mp4";
			webmUrl = "https://www.uiuxwebdev.com/projects/videoGallery/transport.Webm";
			break;
		case "four":
			mp4Url = "https://www.uiuxwebdev.com/projects/videoGallery/walking.mp4";
			webmUrl = "https://www.uiuxwebdev.com/projects/videoGallery/walking.Webm";
			break;
	}
	myMp4.setAttribute("src", mp4Url);
	myWebm.setAttribute("src", webmUrl);
	myVid.load();
	myVid.play();
	myVid.poster = "";
}