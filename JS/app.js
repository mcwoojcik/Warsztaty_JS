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
		moreButton[i].addEventListener('click',showHide);
	}

	function showHide(){
			var textArea = this.previousElementSibling;			
			if ( textArea.style.display === 'none' || textArea.style.display === '' ){
				textArea.style.display = 'block';
				this.innerHTML = 'mniej <span class="glyphicon glyphicon-chevron-up"></span>';
			} else {
				textArea.style.display = 'none';
				this.innerHTML = 'wiecej <span class="glyphicon glyphicon-chevron-down"></span>';
			}
		}
	
	window.addEventListener('scroll',function(){
		console.log('działa przy scrollu');

		var changeBottomBorder = document.querySelector('.navbar-brand');
		changeBottomBorder.style.borderBottom = '3px solid red';	
	});


	
/*	var menuBorder = document.querySelector('.navbar-brand');
	window.addEventListener('scroll',function(){
		menuBorder.style.borrderBottom = '1px solid red'});*/

	//ZADANIE 4

	var upButton = document.querySelector('.button1');
		upButton.addEventListener('click',function(){
			window.scroll(0,0);
		});


	//ZADANIE 5
	var items = document.querySelectorAll('.org');
	var dots = document.querySelectorAll('.dot');
	

	//for(var k=0;k<4;k++){

		dots[0].addEventListener('click',function(){
			for(var i=0;i<4;i++){
				if(i!=0){
					dots[i].classList.remove('active');
					items[i].classList.remove('visible');
				}
			}
			this.classList.add('active');
			items[0].classList.add('visible');
		});

		
		dots[1].addEventListener('click',function(){
			for(var i=0;i<4;i++){
				if(i!=1){
					dots[i].classList.remove('active');
					items[i].classList.remove('visible');
				}
			}
			this.classList.add('active');
			items[1].classList.add('visible');
		});
		
		dots[2].addEventListener('click',function(){
			for(var i=0;i<4;i++){
				if(i!=2){
					dots[i].classList.remove('active');
					items[i].classList.remove('visible');
				}
			}
			this.classList.add('active');
			items[2].classList.add('visible');
		});
	
		dots[3].addEventListener('click',function(){
			for(var i=0;i<4;i++){
				if(i!=3){
					dots[i].classList.remove('active');
					items[i].classList.remove('visible');
				}
			}
			this.classList.add('active');
			items[3].classList.add('visible');
		});
	

	//ZADANIE 6 (CHYBA)
	var input = document.querySelector('.input1');
	var taskButton = document.querySelector('.button2');
	var tasksList = document.querySelector('.tasksList');
	taskButton.addEventListener('click',addTask);
	
	function addTask(){
		if(input.value != ''){
			var newTask = document.createElement('li');
			var deleteButton = document.createElement('button');
			var newTaskContent = document.createElement('div');
			var doneButton = document.createElement('button');

			newTaskContent.innerHTML=input.value;
			deleteButton.innerHTML="USUN";
			doneButton.innerHTML="ZROBIONE";
			newTask.appendChild(newTaskContent);
			newTask.appendChild(deleteButton);
			newTask.appendChild(doneButton);
			deleteButton.classList.add('deleteButton','btn');
			doneButton.classList.add('doneButton','btn');
			input.value=''; // moze byc document.queryselector('.placeholder') <- dziala tak samo
			
			tasksList.appendChild(newTask);
			
			deleteButton.addEventListener('click',function(){
				this.parentElement.parentNode.removeChild(this.parentElement);

			});

			doneButton.addEventListener('click',function(){
				this.parentElement.style.background = 'green';


			});
		}else alert("Weźże coś napisz")
	}

});

//function



























































