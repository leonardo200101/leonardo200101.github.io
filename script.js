var xyz = $('#xyz');

var tl = new TimelineMax({
	repeat:-1,
	repeatDelay: 1.5,
	yoyo:true
});

tl
.to(xyz, .7, {
	text: "faster",
	color: "#4A357D"
})
.to(xyz, .7, {
	text: "collaboratively",
	color: "#4A357D"
}, "+=1.5")
.to(xyz, .7, {
	text: "dinamic",
	color: "#4A357D"
}, "+=1.5");