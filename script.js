let index = 0;

function initialize(flag, nextPos) {
	var lineSymbol = {
		path: "M 0,-1 0,1",
		strokeOpacity: 1,
		scale: 4
	};

	var markers = [];
	var paths = [];

	var centerlatlng = new google.maps.LatLng(40.110588, -88.20727);
	if (flag) {
		centerlatlng = new google.maps.LatLng(nextPos[0], nextPos[1]);
	}
	var myOptions = {
		zoom: 13,
		center: centerlatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		myOptions
	);

	var latlng = new google.maps.LatLng(40.76414, -73.98078);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.68782, -74.18196);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.088534, -88.238369);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112763, -88.227257);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112752, -88.22744);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112758, -88.227611);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112737, -88.227286);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112761, -88.227163);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.110257, -88.233079);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.110485, -88.227835);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.109748, -88.228987);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112762, -88.227313);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.875864, -87.626212);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067991, -88.238774);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.109081, -88.232261);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112763, -88.227298);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.103456, -88.230377);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112822, -88.225405);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067914, -88.238747);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.109512, -88.228893);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067911, -88.238728);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.100526, -88.22652);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067979, -88.238749);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.59982, -90.214095);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.610046, -90.227692);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.636634, -90.292441);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.640134, -90.262168);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.610027, -90.227788);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.632479, -90.199604);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.61003, -90.227727);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067978, -88.23867);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067997, -88.238793);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.777602, -80.203588);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.778136, -80.187625);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.727847, -80.245047);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.74533, -80.211608);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.79387, -80.253329);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.779992, -80.131786);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.419881, -81.476377);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.473553, -81.463477);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.42015, -81.476807);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.44047, -81.476018);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.474463, -81.450722);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.420316, -81.476449);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.791642, -87.58325);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.59919, -122.30694);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.617819, -122.330294);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.580358, -122.407256);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.622515, -122.201549);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.66405, -122.31309);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.61789, -122.33036);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.11686, -88.22404);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.10908, -88.22127);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(29.951125, -90.065751);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(29.99692, -90.05936);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.71511, -74.01598);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.75147, -73.994);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.75429, -73.99566);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.1172, -88.22406);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.117074, -88.224008);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.147162, -88.255625);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.138382, -88.195845);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.116777, -88.204353);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.036479, -88.263602);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.955975, -87.882863);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.423182, -86.900727);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425303, -86.922448);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.423552, -86.852472);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.42392, -86.907552);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.643647, -79.351618);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.662369, -79.382482);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.645619, -79.387448);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.652404, -79.380412);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.789192, -87.740987);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.893711, -87.615122);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.893504, -87.615331);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.883968, -87.642728);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.976752, -87.904214);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.976926, -87.876302);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.644801, -73.78186);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.728438, -73.981794);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.422206, -86.898653);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.416631, -86.877861);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.891416, -87.624067);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.891035, -87.623941);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.791668, -87.582872);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.891132, -87.624368);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.89247, -87.624273);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.890076, -87.627877);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.891206, -87.624063);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.892512, -87.626385);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.661211, -87.756595);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424735, -86.923362);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.419461, -86.829223);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.419128, -86.887836);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425696, -86.925817);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.419506, -86.829312);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424889, -86.923456);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.459512, -86.94086);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.513869, -80.222508);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425951, -86.910315);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425011, -86.923369);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.899022, -87.635949);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.665867, -73.735797);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.639712, -73.743471);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.422828, -86.90555);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.422022, -86.901451);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.422775, -86.905372);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.752195, -73.853808);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.757679, -73.834202);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.752195, -73.853871);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.729552, -73.99324);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.752656, -73.984835);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.764972, -73.974526);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.764924, -73.974412);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.764873, -73.972414);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.763725, -73.973697);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.235073, -76.841191);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.890039, -87.63732);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.880236, -117.232529);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.872638, -117.218607);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.75335, -117.195805);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.716202, -117.167332);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.730882, -117.202975);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.060389, -118.437401);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.143394, -118.254943);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.15018, -118.24522);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.062336, -118.447562);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.038657, -118.441823);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.060376, -118.437529);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.073422, -118.376848);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(33.942511, -118.406113);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.357892, -81.492763);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.403882, -81.578273);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.473403, -81.463639);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.333225, -81.494936);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.473478, -81.463516);
	var img = new google.maps.MarkerImage("figs/marker_blue.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.71274, -74.03374);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.75599, -73.98087);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112702, -88.2258);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.06754, -88.239868);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067584, -88.239858);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067573, -88.240083);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067588, -88.239964);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.07349, -88.250822);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067585, -88.23987);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.073488, -88.250932);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067587, -88.24002);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067549, -88.239919);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.898423, -87.623114);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.129955, -88.220888);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.109083, -88.23219);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067556, -88.239986);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067503, -88.238716);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067992, -88.238826);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.112706, -88.226151);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067429, -88.239703);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.109636, -88.228897);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.067541, -88.238746);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.106935, -88.225494);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.624161, -90.203977);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.599437, -90.214295);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.610042, -90.227664);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.639106, -90.293695);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.641926, -90.255077);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.610213, -90.227865);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(38.62367, -90.187637);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.104727, -88.22385);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.100582, -88.226386);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.896069, -80.324854);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.771783, -80.228054);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.777033, -80.18428);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.727777, -80.244843);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.7454, -80.211223);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(25.793844, -80.255572);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.547683, -81.413314);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.419833, -81.476471);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.473865, -81.46302);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.419797, -81.476423);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.440622, -81.475881);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.472605, -81.454226);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.866585, -87.61435);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.61243, -122.33476);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.59881, -122.307044);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.617937, -122.330468);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.617653, -122.330262);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.61802, -122.33061);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(47.59669, -122.32248);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.10903, -88.22114);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.11713, -88.22406);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(29.951674, -90.068524);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(29.995283, -90.059593);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.69482, -74.17703);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.71524, -74.01584);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.75339, -73.99631);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.10908, -88.22113);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.138148, -88.195899);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.117142, -88.223549);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.146816, -88.2556);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.138198, -88.195846);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.116695, -88.222007);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.885516, -87.618947);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424887, -86.923363);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.423185, -86.901035);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424873, -86.923363);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.423551, -86.852624);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.651528, -79.37889);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.643662, -79.351674);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.66251, -79.382535);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(43.652442, -79.380071);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.661201, -87.756644);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.89166, -87.634019);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.891127, -87.631101);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.893618, -87.615177);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.88399, -87.642728);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.976341, -87.877006);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.770468, -73.870141);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.643955, -73.782995);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424839, -86.923414);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.41723, -86.875468);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.976346, -87.902682);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.905588, -87.670001);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.890945, -87.623495);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.836938, -87.646246);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.892282, -87.624267);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.890075, -87.627944);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.884435, -87.643556);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.892135, -87.625388);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.880691, -87.631309);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.422854, -86.905566);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.427447, -86.914885);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424953, -86.924556);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424883, -86.923463);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.419493, -86.829322);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.430363, -86.913105);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.419456, -86.829345);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424785, -86.923464);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.495914, -80.256553);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.424929, -86.923444);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425805, -86.909906);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.89117, -87.618937);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.639729, -73.743724);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.661128, -73.704018);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425133, -86.923375);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425334, -86.92455);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.425243, -86.923476);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.759492, -73.832234);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.752362, -73.853307);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.759962, -73.832513);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.747796, -73.987031);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.755993, -74.001845);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.752629, -73.98477);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.765035, -73.974983);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.764873, -73.972414);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.763347, -73.973694);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(40.292536, -76.975887);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(41.85375, -87.633382);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.72283, -117.168316);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.873599, -117.218291);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.709987, -117.17109);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.753177, -117.196054);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(32.716177, -117.167581);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(33.942493, -118.406626);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.143611, -118.255703);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.142688, -118.254362);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.063909, -118.305314);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.059848, -118.437658);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.038493, -118.441748);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.087975, -118.475801);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(34.060309, -118.437453);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.43028, -81.308183);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.357923, -81.492906);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.357884, -81.492944);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.473637, -81.46349);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var latlng = new google.maps.LatLng(28.356893, -81.494684);
	var img = new google.maps.MarkerImage("figs/marker_red.png");
	var marker = new google.maps.Marker({
		title: "no implementation",
		icon: img,
		position: latlng
	});
	marker.setMap(map);
	markers.push(marker);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.11656, -88.22895),
		new google.maps.LatLng(40.12993, -88.21986)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#CE381E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.129919, -88.219897),
		new google.maps.LatLng(40.116489, -88.229513)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#201B65",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.11424, -88.238701),
		new google.maps.LatLng(40.116319, -88.237874)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#A7719E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.111022, -88.280562),
		new google.maps.LatLng(40.11272, -88.227757)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#57A0AA",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.116659, -88.22886),
		new google.maps.LatLng(40.111431, -88.244463)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#311DF6",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.11165, -88.24414),
		new google.maps.LatLng(40.12999, -88.21989)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#4A5CB7",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.13007, -88.21998),
		new google.maps.LatLng(40.11165, -88.28032)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#AE0600",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.115495, -88.242194),
		new google.maps.LatLng(40.129842, -88.219885)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#BE7E5C",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.130032, -88.219967),
		new google.maps.LatLng(40.11549, -88.24182)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#07A4B6",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(25.77316, -80.13233),
		new google.maps.LatLng(25.79658, -80.2758)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#13797E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(25.773163, -80.132556),
		new google.maps.LatLng(25.773163, -80.132556)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#D26AFD",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(25.79611, -80.2234),
		new google.maps.LatLng(25.76563, -80.2208)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#6E02F7",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(25.745489, -80.211291),
		new google.maps.LatLng(25.771006, -80.188061)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#BDAEF8",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(25.78814, -80.13186),
		new google.maps.LatLng(25.74538, -80.21128)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#EC96B2",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(28.42899, -81.451783),
		new google.maps.LatLng(28.473486, -81.463576)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#FB1E2B",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(28.433769, -81.471803),
		new google.maps.LatLng(28.449063, -81.485631)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#DA424F",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(28.405391, -81.578439),
		new google.maps.LatLng(28.420315, -81.460522)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#E41DF5",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(28.42897, -81.45184),
		new google.maps.LatLng(28.44907, -81.48561)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#FCAF6E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.129932, -88.219909),
		new google.maps.LatLng(40.115486, -88.241988)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#C5C244",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.115622, -88.241945),
		new google.maps.LatLng(40.129848, -88.219898)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#B51AB0",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.12994, -88.21987),
		new google.maps.LatLng(40.11578, -88.24139)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#1E64D8",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.11168, -88.224),
		new google.maps.LatLng(40.12989, -88.21986)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#DF9404",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.03667, -88.26395),
		new google.maps.LatLng(40.12992, -88.21984)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#17ECC8",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.11572, -88.24148),
		new google.maps.LatLng(40.13004, -88.21988)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#83D207",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.13003, -88.21994),
		new google.maps.LatLng(40.11591, -88.24141)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#6C444C",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.1472, -88.25558),
		new google.maps.LatLng(40.13004, -88.21997)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#2A0B5A",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.144704, -88.260066),
		new google.maps.LatLng(40.130024, -88.219943)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#5A986E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.101489, -88.23594),
		new google.maps.LatLng(40.10146, -88.235951)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#84E87F",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.130031, -88.219948),
		new google.maps.LatLng(40.101511, -88.236172)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#AD7E51",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.11305, -88.225653),
		new google.maps.LatLng(40.140755, -88.24359)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#E28097",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.036655, -88.263799),
		new google.maps.LatLng(40.129926, -88.219814)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#5E6712",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.129989, -88.2199),
		new google.maps.LatLng(40.036735, -88.263701)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#BEE57E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.110309, -88.232746),
		new google.maps.LatLng(40.129999, -88.219974)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#20CCD8",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.036552, -88.263897),
		new google.maps.LatLng(40.110091, -88.232055)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#D8BA6A",
		strokeOpacity: 0.3,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.129876, -88.219835),
		new google.maps.LatLng(40.036629, -88.263744)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#8D883B",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.112814, -88.204985),
		new google.maps.LatLng(40.13, -88.219973)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#6244DC",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.113533, -88.225478),
		new google.maps.LatLng(40.147175, -88.259949)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#356079",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.105106, -88.24358),
		new google.maps.LatLng(40.129898, -88.219886)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#B48F62",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.145076, -88.260124),
		new google.maps.LatLng(40.129775, -88.220004)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#1A912A",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.111368, -88.24436),
		new google.maps.LatLng(40.129878, -88.219912)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],

		strokeColor: "#2AD54F",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.115801, -88.232075),
		new google.maps.LatLng(40.130021, -88.219857)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#9CD21D",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(40.141383, -88.255487),
		new google.maps.LatLng(40.129832, -88.219926)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#9C76C9",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(18.781085, 98.986431),
		new google.maps.LatLng(18.793471, 98.971463)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#5F1F6E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(18.775734, 98.977983),
		new google.maps.LatLng(18.775827, 98.97805)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#493CAC",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var PolylineCoordinates = [
		new google.maps.LatLng(18.777068, 99.000078),
		new google.maps.LatLng(18.781259, 98.986214)
	];

	var Path = new google.maps.Polyline({
		clickable: false,
		geodesic: true,
		path: PolylineCoordinates,
		icons: [{ icon: lineSymbol, offset: "0", repeat: "20px" }],
		strokeColor: "#50F78E",
		strokeOpacity: 0,
		strokeWeight: 3
	});

	Path.setMap(map);
	paths.push(Path);

	var heatmap_points = [
		new google.maps.LatLng(40.76414, -73.98078),
		new google.maps.LatLng(40.68782, -74.18196),
		new google.maps.LatLng(40.088534, -88.238369),
		new google.maps.LatLng(40.112763, -88.227257),
		new google.maps.LatLng(40.112752, -88.22744),
		new google.maps.LatLng(40.112758, -88.227611),
		new google.maps.LatLng(40.112737, -88.227286),
		new google.maps.LatLng(40.112761, -88.227163),
		new google.maps.LatLng(40.110257, -88.233079),
		new google.maps.LatLng(40.110485, -88.227835),
		new google.maps.LatLng(40.109748, -88.228987),
		new google.maps.LatLng(40.112762, -88.227313),
		new google.maps.LatLng(41.875864, -87.626212),
		new google.maps.LatLng(40.067991, -88.238774),
		new google.maps.LatLng(40.109081, -88.232261),
		new google.maps.LatLng(40.112763, -88.227298),
		new google.maps.LatLng(40.103456, -88.230377),
		new google.maps.LatLng(40.112822, -88.225405),
		new google.maps.LatLng(40.067914, -88.238747),
		new google.maps.LatLng(40.109512, -88.228893),
		new google.maps.LatLng(40.067911, -88.238728),
		new google.maps.LatLng(40.100526, -88.22652),
		new google.maps.LatLng(40.067979, -88.238749),
		new google.maps.LatLng(38.59982, -90.214095),
		new google.maps.LatLng(38.610046, -90.227692),
		new google.maps.LatLng(38.636634, -90.292441),
		new google.maps.LatLng(38.640134, -90.262168),
		new google.maps.LatLng(38.610027, -90.227788),
		new google.maps.LatLng(38.632479, -90.199604),
		new google.maps.LatLng(38.61003, -90.227727),
		new google.maps.LatLng(40.067978, -88.23867),
		new google.maps.LatLng(40.067997, -88.238793),
		new google.maps.LatLng(25.777602, -80.203588),
		new google.maps.LatLng(25.778136, -80.187625),
		new google.maps.LatLng(25.727847, -80.245047),
		new google.maps.LatLng(25.74533, -80.211608),
		new google.maps.LatLng(25.79387, -80.253329),
		new google.maps.LatLng(25.779992, -80.131786),
		new google.maps.LatLng(28.419881, -81.476377),
		new google.maps.LatLng(28.473553, -81.463477),
		new google.maps.LatLng(28.42015, -81.476807),
		new google.maps.LatLng(28.44047, -81.476018),
		new google.maps.LatLng(28.474463, -81.450722),
		new google.maps.LatLng(28.420316, -81.476449),
		new google.maps.LatLng(41.791642, -87.58325),
		new google.maps.LatLng(47.59919, -122.30694),
		new google.maps.LatLng(47.617819, -122.330294),
		new google.maps.LatLng(47.580358, -122.407256),
		new google.maps.LatLng(47.622515, -122.201549),
		new google.maps.LatLng(47.66405, -122.31309),
		new google.maps.LatLng(47.61789, -122.33036),
		new google.maps.LatLng(40.11686, -88.22404),
		new google.maps.LatLng(40.10908, -88.22127),
		new google.maps.LatLng(29.951125, -90.065751),
		new google.maps.LatLng(29.99692, -90.05936),
		new google.maps.LatLng(40.71511, -74.01598),
		new google.maps.LatLng(40.75147, -73.994),
		new google.maps.LatLng(40.75429, -73.99566),
		new google.maps.LatLng(40.1172, -88.22406),
		new google.maps.LatLng(40.117074, -88.224008),
		new google.maps.LatLng(40.147162, -88.255625),
		new google.maps.LatLng(40.138382, -88.195845),
		new google.maps.LatLng(40.116777, -88.204353),
		new google.maps.LatLng(40.036479, -88.263602),
		new google.maps.LatLng(41.955975, -87.882863),
		new google.maps.LatLng(40.423182, -86.900727),
		new google.maps.LatLng(40.425303, -86.922448),
		new google.maps.LatLng(40.423552, -86.852472),
		new google.maps.LatLng(40.42392, -86.907552),
		new google.maps.LatLng(43.643647, -79.351618),
		new google.maps.LatLng(43.662369, -79.382482),
		new google.maps.LatLng(43.645619, -79.387448),
		new google.maps.LatLng(43.652404, -79.380412),
		new google.maps.LatLng(41.789192, -87.740987),
		new google.maps.LatLng(41.893711, -87.615122),
		new google.maps.LatLng(41.893504, -87.615331),
		new google.maps.LatLng(41.883968, -87.642728),
		new google.maps.LatLng(41.976752, -87.904214),
		new google.maps.LatLng(41.976926, -87.876302),
		new google.maps.LatLng(40.644801, -73.78186),
		new google.maps.LatLng(40.728438, -73.981794),
		new google.maps.LatLng(40.422206, -86.898653),
		new google.maps.LatLng(40.416631, -86.877861),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(41.891416, -87.624067),
		new google.maps.LatLng(41.891035, -87.623941),
		new google.maps.LatLng(41.791668, -87.582872),
		new google.maps.LatLng(41.891132, -87.624368),
		new google.maps.LatLng(41.89247, -87.624273),
		new google.maps.LatLng(41.890076, -87.627877),
		new google.maps.LatLng(41.891206, -87.624063),
		new google.maps.LatLng(41.892512, -87.626385),
		new google.maps.LatLng(41.661211, -87.756595),
		new google.maps.LatLng(40.424735, -86.923362),
		new google.maps.LatLng(40.419461, -86.829223),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(40.419128, -86.887836),
		new google.maps.LatLng(40.425696, -86.925817),
		new google.maps.LatLng(40.419506, -86.829312),
		new google.maps.LatLng(40.424889, -86.923456),
		new google.maps.LatLng(40.459512, -86.94086),
		new google.maps.LatLng(40.513869, -80.222508),
		new google.maps.LatLng(40.425951, -86.910315),
		new google.maps.LatLng(40.425011, -86.923369),
		new google.maps.LatLng(41.899022, -87.635949),
		new google.maps.LatLng(40.665867, -73.735797),
		new google.maps.LatLng(40.639712, -73.743471),
		new google.maps.LatLng(40.422828, -86.90555),
		new google.maps.LatLng(40.422022, -86.901451),
		new google.maps.LatLng(40.422775, -86.905372),
		new google.maps.LatLng(40.752195, -73.853808),
		new google.maps.LatLng(40.757679, -73.834202),
		new google.maps.LatLng(40.752195, -73.853871),
		new google.maps.LatLng(40.729552, -73.99324),
		new google.maps.LatLng(40.752656, -73.984835),
		new google.maps.LatLng(40.764972, -73.974526),
		new google.maps.LatLng(40.764924, -73.974412),
		new google.maps.LatLng(40.764873, -73.972414),
		new google.maps.LatLng(40.763725, -73.973697),
		new google.maps.LatLng(40.235073, -76.841191),
		new google.maps.LatLng(41.890039, -87.63732),
		new google.maps.LatLng(32.880236, -117.232529),
		new google.maps.LatLng(32.872638, -117.218607),
		new google.maps.LatLng(32.75335, -117.195805),
		new google.maps.LatLng(32.716202, -117.167332),
		new google.maps.LatLng(32.730882, -117.202975),
		new google.maps.LatLng(34.060389, -118.437401),
		new google.maps.LatLng(34.143394, -118.254943),
		new google.maps.LatLng(34.15018, -118.24522),
		new google.maps.LatLng(34.062336, -118.447562),
		new google.maps.LatLng(34.038657, -118.441823),
		new google.maps.LatLng(34.060376, -118.437529),
		new google.maps.LatLng(34.073422, -118.376848),
		new google.maps.LatLng(33.942511, -118.406113),
		new google.maps.LatLng(28.357892, -81.492763),
		new google.maps.LatLng(28.403882, -81.578273),
		new google.maps.LatLng(28.473403, -81.463639),
		new google.maps.LatLng(28.333225, -81.494936),
		new google.maps.LatLng(28.473478, -81.463516),
		new google.maps.LatLng(40.71274, -74.03374),
		new google.maps.LatLng(40.75599, -73.98087),
		new google.maps.LatLng(40.112702, -88.2258),
		new google.maps.LatLng(40.06754, -88.239868),
		new google.maps.LatLng(40.067584, -88.239858),
		new google.maps.LatLng(40.067573, -88.240083),
		new google.maps.LatLng(40.067588, -88.239964),
		new google.maps.LatLng(40.07349, -88.250822),
		new google.maps.LatLng(40.067585, -88.23987),
		new google.maps.LatLng(40.073488, -88.250932),
		new google.maps.LatLng(40.067587, -88.24002),
		new google.maps.LatLng(40.067549, -88.239919),
		new google.maps.LatLng(41.898423, -87.623114),
		new google.maps.LatLng(40.129955, -88.220888),
		new google.maps.LatLng(40.109083, -88.23219),
		new google.maps.LatLng(40.067556, -88.239986),
		new google.maps.LatLng(40.067503, -88.238716),
		new google.maps.LatLng(40.067992, -88.238826),
		new google.maps.LatLng(40.112706, -88.226151),
		new google.maps.LatLng(40.067429, -88.239703),
		new google.maps.LatLng(40.109636, -88.228897),
		new google.maps.LatLng(40.067541, -88.238746),
		new google.maps.LatLng(40.106935, -88.225494),
		new google.maps.LatLng(38.624161, -90.203977),
		new google.maps.LatLng(38.599437, -90.214295),
		new google.maps.LatLng(38.610042, -90.227664),
		new google.maps.LatLng(38.639106, -90.293695),
		new google.maps.LatLng(38.641926, -90.255077),
		new google.maps.LatLng(38.610213, -90.227865),
		new google.maps.LatLng(38.62367, -90.187637),
		new google.maps.LatLng(40.104727, -88.22385),
		new google.maps.LatLng(40.100582, -88.226386),
		new google.maps.LatLng(25.896069, -80.324854),
		new google.maps.LatLng(25.771783, -80.228054),
		new google.maps.LatLng(25.777033, -80.18428),
		new google.maps.LatLng(25.727777, -80.244843),
		new google.maps.LatLng(25.7454, -80.211223),
		new google.maps.LatLng(25.793844, -80.255572),
		new google.maps.LatLng(28.547683, -81.413314),
		new google.maps.LatLng(28.419833, -81.476471),
		new google.maps.LatLng(28.473865, -81.46302),
		new google.maps.LatLng(28.419797, -81.476423),
		new google.maps.LatLng(28.440622, -81.475881),
		new google.maps.LatLng(28.472605, -81.454226),
		new google.maps.LatLng(41.866585, -87.61435),
		new google.maps.LatLng(47.61243, -122.33476),
		new google.maps.LatLng(47.59881, -122.307044),
		new google.maps.LatLng(47.617937, -122.330468),
		new google.maps.LatLng(47.617653, -122.330262),
		new google.maps.LatLng(47.61802, -122.33061),
		new google.maps.LatLng(47.59669, -122.32248),
		new google.maps.LatLng(40.10903, -88.22114),
		new google.maps.LatLng(40.11713, -88.22406),
		new google.maps.LatLng(29.951674, -90.068524),
		new google.maps.LatLng(29.995283, -90.059593),
		new google.maps.LatLng(40.69482, -74.17703),
		new google.maps.LatLng(40.71524, -74.01584),
		new google.maps.LatLng(40.75339, -73.99631),
		new google.maps.LatLng(40.10908, -88.22113),
		new google.maps.LatLng(40.138148, -88.195899),
		new google.maps.LatLng(40.117142, -88.223549),
		new google.maps.LatLng(40.146816, -88.2556),
		new google.maps.LatLng(40.138198, -88.195846),
		new google.maps.LatLng(40.116695, -88.222007),
		new google.maps.LatLng(41.885516, -87.618947),
		new google.maps.LatLng(40.424887, -86.923363),
		new google.maps.LatLng(40.423185, -86.901035),
		new google.maps.LatLng(40.424873, -86.923363),
		new google.maps.LatLng(40.423551, -86.852624),
		new google.maps.LatLng(43.651528, -79.37889),
		new google.maps.LatLng(43.643662, -79.351674),
		new google.maps.LatLng(43.66251, -79.382535),
		new google.maps.LatLng(43.652442, -79.380071),
		new google.maps.LatLng(41.661201, -87.756644),
		new google.maps.LatLng(41.89166, -87.634019),
		new google.maps.LatLng(41.891127, -87.631101),
		new google.maps.LatLng(41.893618, -87.615177),
		new google.maps.LatLng(41.88399, -87.642728),
		new google.maps.LatLng(41.976341, -87.877006),
		new google.maps.LatLng(40.770468, -73.870141),
		new google.maps.LatLng(40.643955, -73.782995),
		new google.maps.LatLng(40.424839, -86.923414),
		new google.maps.LatLng(40.41723, -86.875468),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(41.976346, -87.902682),
		new google.maps.LatLng(41.905588, -87.670001),
		new google.maps.LatLng(41.890945, -87.623495),
		new google.maps.LatLng(41.836938, -87.646246),
		new google.maps.LatLng(41.892282, -87.624267),
		new google.maps.LatLng(41.890075, -87.627944),
		new google.maps.LatLng(41.884435, -87.643556),
		new google.maps.LatLng(41.892135, -87.625388),
		new google.maps.LatLng(41.880691, -87.631309),
		new google.maps.LatLng(40.422854, -86.905566),
		new google.maps.LatLng(40.427447, -86.914885),
		new google.maps.LatLng(40.424953, -86.924556),
		new google.maps.LatLng(40.424883, -86.923463),
		new google.maps.LatLng(40.419493, -86.829322),
		new google.maps.LatLng(40.430363, -86.913105),
		new google.maps.LatLng(40.419456, -86.829345),
		new google.maps.LatLng(40.424785, -86.923464),
		new google.maps.LatLng(40.495914, -80.256553),
		new google.maps.LatLng(40.424929, -86.923444),
		new google.maps.LatLng(40.425805, -86.909906),
		new google.maps.LatLng(41.89117, -87.618937),
		new google.maps.LatLng(40.639729, -73.743724),
		new google.maps.LatLng(40.661128, -73.704018),
		new google.maps.LatLng(40.425133, -86.923375),
		new google.maps.LatLng(40.425334, -86.92455),
		new google.maps.LatLng(40.425243, -86.923476),
		new google.maps.LatLng(40.759492, -73.832234),
		new google.maps.LatLng(40.752362, -73.853307),
		new google.maps.LatLng(40.759962, -73.832513),
		new google.maps.LatLng(40.747796, -73.987031),
		new google.maps.LatLng(40.755993, -74.001845),
		new google.maps.LatLng(40.752629, -73.98477),
		new google.maps.LatLng(40.765035, -73.974983),
		new google.maps.LatLng(40.764873, -73.972414),
		new google.maps.LatLng(40.763347, -73.973694),
		new google.maps.LatLng(40.292536, -76.975887),
		new google.maps.LatLng(41.85375, -87.633382),
		new google.maps.LatLng(32.72283, -117.168316),
		new google.maps.LatLng(32.873599, -117.218291),
		new google.maps.LatLng(32.709987, -117.17109),
		new google.maps.LatLng(32.753177, -117.196054),
		new google.maps.LatLng(32.716177, -117.167581),
		new google.maps.LatLng(33.942493, -118.406626),
		new google.maps.LatLng(34.143611, -118.255703),
		new google.maps.LatLng(34.142688, -118.254362),
		new google.maps.LatLng(34.063909, -118.305314),
		new google.maps.LatLng(34.059848, -118.437658),
		new google.maps.LatLng(34.038493, -118.441748),
		new google.maps.LatLng(34.087975, -118.475801),
		new google.maps.LatLng(34.060309, -118.437453),
		new google.maps.LatLng(28.43028, -81.308183),
		new google.maps.LatLng(28.357923, -81.492906),
		new google.maps.LatLng(28.357884, -81.492944),
		new google.maps.LatLng(28.473637, -81.46349),
		new google.maps.LatLng(28.356893, -81.494684)
	];

	var pointArray = new google.maps.MVCArray(heatmap_points);
	var heatmap = new google.maps.visualization.HeatmapLayer({
		data: pointArray
    });
    
	heatmap.setMap(map);
	heatmap.set("threshold", 100);
	heatmap.set("radius", 200);
	heatmap.set("opacity", 0.6);
	heatmap.set("dissipating", true);

	let locations = [];
	locations.push(
		[40.110588, -88.20727],
		[25.76168, -80.19179],
		[28.4114555, -81.4638934],
		[18.7746292, 98.9765261]
	);
	const next = document.getElementById("next");
	const up = document.getElementById("up");
	const bar = document.getElementById("bar");
	const stroke = document.getElementById("stroke");
	const markerButton = document.getElementById("marker");
    const heatButton = document.getElementById("heat");
    const legend = document.getElementById("legend-wrapper");

	const nextHandler = () => {
        index++;
		if (index >= locations.length) index = 0;
		locationNext = locations[index];
		initialize(true, locationNext);
	};
	const upHandler = () => {
		index--;
		if (index < 0) index = locations.length - 1;
		locationPrev = locations[index];
		initialize(true, locationPrev);
	};
	const barHandler = () => {
		window.location.href = "Data Analysis.html";
	};
	const strokeHandler = () => {
		if (stroke.innerHTML === "Show Personal Route") {
			stroke.innerHTML = "Hide Personal Route";
			for (let i = 0; i < paths.length; i++) {
				paths[i].setMap(map);
			}
		} else {
			stroke.innerHTML = "Show Personal Route";
			for (let i = 0; i < paths.length; i++) {
				paths[i].setMap(null);
			}
		}
	};
	const markerHandler = () => {
		if (markerButton.innerHTML === "Show Friend Marker") {
			markerButton.innerHTML = "Hide Friend Marker";
			for (let i = 0; i < markers.length; i++) {
				markers[i].setMap(map);
            }
            legend.style.opacity = 1;
		} else {
			markerButton.innerHTML = "Show Friend Marker";
			for (let i = 0; i < markers.length; i++) {
				markers[i].setMap(null);
            }
            legend.style.opacity = 0;
		}
	};
	const heatMapHandler = () => {
		if (heatButton.innerHTML === "Show Heat Map") {
			heatButton.innerHTML = "Hide Heat Map";
			heatmap.setMap(map);
		} else {
			heatButton.innerHTML = "Show Heat Map";
			heatmap.setMap(null);
		}
	};

	markerButton.innerHTML = "Hide Friend Marker";
	stroke.innerHTML = "Hide Personal Route";
	heatButton.innerHTML = "Hide Heat Map";

	next.onclick = nextHandler;
	up.onclick = upHandler;
	bar.onclick = barHandler;
	stroke.onclick = strokeHandler;
	markerButton.onclick = markerHandler;
    heatButton.onclick = heatMapHandler;
    legend.style.opacity = 1;
}
