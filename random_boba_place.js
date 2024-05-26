// randomly pick a location 


let bobaDictionary = {
	"1": {"name": "Pink Pig", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106183.6809632925!2d-117.95940039520305!3d33.72860881013405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf3f6369bb11%3A0x7d3a81487f31cf8!2sPink%20Pig!5e0!3m2!1sen!2sus!4v1716677283317!5m2!1sen!2sus"},
	"2": {"name": "Share Tea", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.25482695801!2d-117.84069262461634!3d33.650558473310845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf98b6b55025%3A0x7fa3d80446bf70df!2sSharetea%20UCI!5e0!3m2!1sen!2sus!4v1716677335933!5m2!1sen!2sus"},
	"3": {"name": "Cha for Tea", "link":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53145.94467189475!2d-117.86415847783758!3d33.641053660345875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0d0952bd8f%3A0x2b63ef5c41495b8a!2sCha%20For%20Tea%20-%20University%20Center!5e0!3m2!1sen!2sus!4v1716674353612!5m2!1sen!2sus"},
	"4": {"name": "Tan-Cha", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.920688704785!2d-117.80602382461592!3d33.65921687330761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd633be9a7e1%3A0xef5e0d7c14e27489!2sTan-Cha!5e0!3m2!1sen!2sus!4v1716677368691!5m2!1sen!2sus"},
	"5": {"name": "Happy Lemon", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23215.901863394436!2d-117.89285184586045!3d33.63187840875226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce12eca3b9425%3A0xa7ca747ca9494366!2sHappy%20Lemon!5e0!3m2!1sen!2sus!4v1716677915912!5m2!1sen!2sus"},
	"6": {"name": "Elixir Wizard Academy", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.701459764006!2d-117.92412592461687!3d33.638981973315445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf6a804d0de1%3A0xce3ba6622c7e06ea!2sElixir%20Wizard%20Academy%2C%20Boba%20Tea%20Bar%20%26%20Enchanted%20Ice%20Cream!5e0!3m2!1sen!2sus!4v1716677954752!5m2!1sen!2sus"},
	"7": {"name": "Boba Junkie Costa Mesa", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.016885104227!2d-117.92120332461593!3d33.65672437330843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf7925890827%3A0x532e4b613c35333f!2sBoba%20Junkie%20Costa%20Mesa!5e0!3m2!1sen!2sus!4v1716677982603!5m2!1sen!2sus"},
	"8": {"name": "Boba Guys", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53136.27439766688!2d-117.95982814512688!3d33.65671751327129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdfe44b76d4cb%3A0x8bc70246b836c671!2sBoba%20Guys%20Costa%20Mesa!5e0!3m2!1sen!2sus!4v1716678066317!5m2!1sen!2sus"},
	"9": {"name": "That Boba Place", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.358907490272!2d-117.92349322461524!3d33.673769673301784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf609474ddf1%3A0xd4f14e0bf9cdff66!2sThat%20Boba%20Place!5e0!3m2!1sen!2sus!4v1716678080928!5m2!1sen!2sus"},
	"10": {"name": "BOBER Tea and Coffee", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106192.35512292646!2d-117.9920848671446!3d33.72159763945306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf93c9ff850b%3A0xc7d0e3791db51aa9!2sBOBER%20TEA%20%26%20COFFEE!5e0!3m2!1sen!2sus!4v1716678126210!5m2!1sen!2sus"},
	"11": {"name": "Tea Maru", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.114171190344!2d-117.7810596246162!3d33.65420347330949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd5f3a5149af%3A0xc06071227e3c4e76!2sTea%20Maru%20-%20Housemade%20Boba!5e0!3m2!1sen!2sus!4v1716678145939!5m2!1sen!2sus"},
	"12": {"name": "Boba Tea Planets", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24872.277780128043!2d-117.89589014772568!3d33.6957686548498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdfd1d581b07f%3A0x24730b1ed47f7dc3!2sBoba%20Tea%20Planets!5e0!3m2!1sen!2sus!4v1716678163880!5m2!1sen!2sus"},
	"13": {"name": "TP Tea Irvine", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24872.277780128043!2d-117.89589014772568!3d33.6957686548498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf642ee30531%3A0x8a902674998bdd29!2sTP%20TEA%20Irvine!5e0!3m2!1sen!2sus!4v1716678177746!5m2!1sen!2sus"},
	"14": {"name": "Super Boba", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4418125076886!2d-117.83063362461421!3d33.69751487329266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdc21d5ac69c9%3A0x334e58107fd02445!2sSuper%20Boba!5e0!3m2!1sen!2sus!4v1716678190761!5m2!1sen!2sus"},
	"15": {"name": "TasteTea Irvine", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.93076107987!2d-117.81312542461478!3d33.6848569732976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdc344b2654ad%3A0x5321fef0139beb5b!2sTastea%20Irvine!5e0!3m2!1sen!2sus!4v1716678212864!5m2!1sen!2sus"},
	"16": {"name": "Omomo", "link": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51839.9178564383!2d-117.8198220878637!3d33.694503440947734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd80a27f962b%3A0x8c47a3fa21092ac7!2sOMOMO%20TEA%20SHOPPE!5e0!3m2!1sen!2sus!4v1716678234993!5m2!1sen!2sus"}
	}

let randomProp = function (object) {
	let keys = Object.keys(object)
	let picked = Math.floor(keys.length * Math.random())
	return object[keys[picked]] // randomly picks the index of or number for a boba place in the object dictionary
}

const teaColors = ["rgba(219, 199, 179, 1)", "rgba(238, 219, 253, 1)", "rgba(255, 216, 177, 1)", "rgba(212, 241, 209, 1)"];
let flavors = function(object) {
	let picked = teaColors[Math.floor(teaColors.length * Math.random())];
	document.getElementById('replacetea').style.borderBottomColor = picked;
	document.getElementById('exit').style.background = picked;
	var info = document.head.appendChild(document.createElement("style"));
	info.innerHTML = "#popup:before {background: " + picked + ";}";
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
	store = randomProp(bobaDictionary);
	getMap(store);
	document.getElementById('replace-me').innerText = store.name;
	buttonControl(true);
	show('popup')
}

function getMap(store) {
	document.getElementById('map').src=store.link;
}

var show = function(id) {
$(id).style.display ='block';
}

var hide = function(id) {
$(id).style.display ='none';
buttonControl(false);
document.getElementById('map').src="";
}

function buttonControl(bool) {
	let buttons = document.getElementsByClassName('button');
	for(let i = 0; i < buttons.length; i++) {
		buttons[i].disabled = bool;
	}
}