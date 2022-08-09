var xyz = $('#xyz');

var tl = new TimelineMax({
	repeat:-1,
	repeatDelay: 1.5,
	yoyo:true
});

tl
.to(xyz, .7, {
	text: "faster",
	color: "#8AD0FF"
})
.to(xyz, .7, {
	text: "collaboratively",
	color: "#25C48A"
}, "+=1.5")
.to(xyz, .7, {
	text: "dinamic",
	color: "#FAB416"
}, "+=1.5");