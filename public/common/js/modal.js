$(document).ready(function(){
	$(".btn.btn-primary").click(function(){
		var string = "<div class=\"class-box\" style=\"height:";
		var name = $("#lecture").val();
		var day = $("#inputDay option:selected").val();
		var start = $("#inputStartTime option:selected").val();
		var end = $("#inputEndTime option:selected").val();
		var time = end-start;
		if(time < 0)
		{
			alert("time error");
		}
		string += time*100+100;
		string += "%;\">";
		string += name;
		string += "</div>";
		timetable.rows[start].cells[day].innerHTML = string;
		console.log(time);
	})

	$('#save').click(function(){
		console.log("html2canvas");
		html2canvas($('#timetable').get(0)).then(function(canvas)
		{
			var img = canvas.toDataURL("image/png", 1);
			$('#img').attr('src', img);
		})
	})
})