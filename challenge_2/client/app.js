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
				// app.RenderData(data);
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
		var dataArr = [];
		

	}

};

//app.init();



