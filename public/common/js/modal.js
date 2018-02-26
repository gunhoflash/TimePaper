$(document).ready(function(){
	//$(".table tr").click(function(){
	$(".btn.btn-primary").click(function(){
		/*var str = "hello"
		var tr = $(this);
		var td = tr.children();
		td.each(function(i){
			console.log(td.eq(i).text("hello"));
		})*/
		var day = $("#inputDay option:selected").val();
		var start = $("#inputStartTime option:selected").val();
		var end = $("#inputEndTime option:selected").val();
		timetable.rows[start].cells[day].innerHTML = "this!";
		console.log($("#inputStartTime option:selected").val());
	})
})