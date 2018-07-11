var app = {
	server: 'http://localhost:3000/',

	init: function(){
		app.$message = $('#message');
		
		app.$textData = $('#textData');

		app.$submitButton = document.getElementById('submitbutton')

		//app.$message.on('submit', app.retrieveData); //event listener

		app.$submitButton.addEventListener('click', app.retrieveData)
	},

	fetch: function () {
		$.ajax({
			url: app.server + 'testing',
			type: 'GET',
			success: function(data){
				console.log(data)
				app.renderData(data);

			},
			error: function(error){
				console.error("something wrong with GET req")
			},
		});
	},

	send: function(message){
		var message = JSON.parse(message)
		$.ajax({
			url: app.server, //how do you route get request to different url?
			type: "POST",
			dataType:'json',//what you're expecting
			data: JSON.stringify(message), //need to send things in strings
			contentType: 'application/json', //what you're sending
			success: function(data) {
				app.fetch()
			},
			error: function(error) {
				console.log("something wrong with POST Req")
			},
		})
	},

	retrieveData: function(event) {
		// console.log(event)
		// console.log(app.$textData.val())
		event.preventDefault(); //stop from re-loading

		app.send(app.$textData.val())
		//app.$message.html(''); //clear data
	},

	renderData: function (data) {
		$('#table').empty();
		var $table = $("#table");
		$table.append('<table id="table2">')
		$table.append(`<tr></tr>`)
		for (var i = 0; i < data.length; i++) {
			 $table.append("<tr>")
			for (var x = 0; x < data[i].length; x ++){
				$table.append(`<td>${data[i][x]}</td>`)
			}
			$table.append("</tr>");
		}
		$table.append('</table>')


		$('#csv').empty()
		var $csv = $("#csv");
		$csv.append("<b id='csvName'>CSV</b>")
		var bigStr = "";
		for (var i = 0; i <data.length; i++) {
			var innerStr = data[i].join(',');
			console.log(innerStr)
			bigStr = bigStr + innerStr + "\n";
		} 	
		$csv.append(`<div>${bigStr}</div>`);

		app.$textData.val("");
	}

};




