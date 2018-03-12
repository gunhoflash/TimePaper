$(document).ready(function(){
	//$(".table tr").click(function(){
	$(".btn.btn-primary").click(function(){
		/*var str = "hello"
		var tr = $(this);
		var td = tr.children();
		td.each(function(i){
			console.log(td.eq(i).text("hello"));
		})*/
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
})