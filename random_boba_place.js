// randomly pick a location 


let bobaDictionary = {
	"1": {"name": "testing", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53145.94467189475!2d-117.86415847783758!3d33.641053660345875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0d0952bd8f%3A0x2b63ef5c41495b8a!2sCha%20For%20Tea%20-%20University%20Center!5e0!3m2!1sen!2sus!4v1716674114022!5m2!1sen!2sus"}
	// "2": {"name": "Share Tea", "longitude": 33.65070569595102, "latitude": -117.8381474872048},
	// "3": {"name": "Cha for Tea", "longitude": 33.65086195966481, "latitude": -117.83889836654231},
	// "4": {"name": "Tan-Cha", "longitude": 33.65952075649224, "latitude": -117.80354671469709},
	// "5": {"name": "Happy Lemon", "longitude": 33.620194403342396, "latitude": -117.87317958046621},
	// "6": {"name": "Elixir Wizard Academy", "longitude": 33.64134794918144, "latitude": -117.9191848245779},
	// "7": {"name": "Boba Junkie Costa Mesa", "longitude": 33.66363930531916, "latitude": -117.91815485642616},
	// "8": {"name": "Boba Guys", "longitude": 33.68363945210863, "latitude": -117.88794245730803},
	// "9": {"name": "That Boba Place", "longitude": 33.67563995181501, "latitude": -117.91918482186546},
	// "10": {"name": "BOBER Tea and Coffee", "longitude": 33.67392567616879, "latitude": -117.85292353545655},
	// "11": {"name": "Tea Maru", "longitude": 33.657577768727705, "latitude": -117.77863170642495},
	// "12": {"name": "Boba Tea Planets", "longitude": 33.695845924108355, "latitude": -117.88104254977488},
	// "13": {"name": "TP Tea Irvine", "longitude": 33.685918525448486, "latitude": -117.84400561856337},
	// "14": {"name": "Super Boba", "longitude": 33.70080919338468, "latitude": -117.82784856803487},
	// "15": {"name": "TasteTea Irvine", "longitude": 33.68653902146035, "latitude": -117.81243722753074},
	// "16": {"name": "Omomo", "longitude": 33.71144838481512, "latitude": -117.78588441569701}
	}

let randomProp = function (object) {
	let keys = Object.keys(object)
	let picked = Math.floor(keys.length * Math.random())
	return object[keys[picked]] // randomly picks the index of or number for a boba place in the object dictionary
}

console.log(randomProp(bobaDictionary))

window.onscroll = function() {scroller()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function scroller() {
  if (window.pageYOffset > sticky) {
	header.classList.add("sticky");
  } else {
	header.classList.remove("sticky");
  }
}

$ = function(id) {
return document.getElementById(id);
}

function showpopup() {
	a = randomProp(bobaDictionary);
	document.getElementById('replace-me').innerText = a.name;
	show('popup')
}

function getmap(dict) {
	
}

var show = function(id) {
$(id).style.display ='block';
}

var hide = function(id) {
$(id).style.display ='none';
}