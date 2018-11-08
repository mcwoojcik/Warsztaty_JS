'use strict';

document.addEventListener('DOMContentLoaded',function(){

	var matDrop = document.querySelector("li.for-dropdown");
	var dropList = document.querySelector("div.dropdown");

	matDrop.addEventListener('mouseover',function(){
		dropList.style.display = 'block';
	
	});
	matDrop.addEventListener('mouseout',function(){
		dropList.style.display = 'none';
	
	});



	var moreButton = document.querySelectorAll('.read-more');
	for( var i=0;i<3;i++){
		moreButton[i].addEventListener('click',function(){
			var textArea = this.previousElementSibling;			
			if ( textArea.style.display === 'none' || textArea.style.display === '' ){
				textArea.style.display = 'block';
				this.innerHTML = 'mniej <span class="glyphicon glyphicon-chevron-up"></span>';
			} else {
				textArea.style.display = 'none';
				this.innerHTML = 'mniej <span class="glyphicon glyphicon-chevron"></span>';
			}
		});
	}
});


























































