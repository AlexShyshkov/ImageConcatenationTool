'use strict'

let obj = (function(){
	
	let imageHeight = 100;
	let imageArr = [];

	function drawImage(arr) {
		let canvas = document.getElementById("myCanvas"),
		context = canvas.getContext("2d");

		let offsetX = 0;
		for(let i = 0; i < arr.length; i++) {
			if(arr[i]) {
				let imageWidth = (imageHeight * arr[i].width) / arr[i].height;
				context.drawImage(arr[i], offsetX, 0, imageWidth, imageHeight);
				offsetX = imageWidth;
			}
		}
	}

	return {
		loadLeftImage: function() {
			if(this.files && this.files[0]) {
				let reader = new FileReader();
				reader.onload = function(event) {
					let img = new Image();
					img.addEventListener("load", function() {
						imageArr[0] = this;
						drawImage(imageArr);
					});
					img.src = event.target.result;
				};
				reader.readAsDataURL(this.files[0]);
			}
		},

		loadRightImage: function() {
			if(this.files && this.files[0]) {
				let reader = new FileReader();
				reader.onload = function(event) {
					let img = new Image();
					img.addEventListener("load", function() {
						imageArr[1] = this;
						drawImage(imageArr);				
					});
					img.src = event.target.result;
				};
				reader.readAsDataURL(this.files[0]);
			}
		}		
	}
})();

let inputLeft = document.getElementById("leftImgInput");
inputLeft.addEventListener("change", obj.loadLeftImage);

let inputRight = document.getElementById("rightImgInput");
inputRight.addEventListener("change", obj.loadRightImage);