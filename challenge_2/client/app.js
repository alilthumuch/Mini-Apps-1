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
			dataType:'json',
			data: JSON.stringify(message), //need to send things in strings
			contentType: 'application/json',
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
		var $csv = $("#csv");

		$csv.append('<table>')
		$csv.append(`<tr></tr>`)
		for (var i = 0; i < data.length; i++) {
			 $csv.append("<tr>")
			for (var x = 0; x < data[i].length; x ++){
				$csv.append(`<td>${data[i][x]}</td>`)
			}
			$csv.append("</tr>");
		}

	}

};




