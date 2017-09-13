/**/
var t = 60;



document.getElementById('item').innerHTML = 0;
document.getElementById('dates').innerHTML = '-  ' + t + '  -';
document.getElementById('item').innerHTML = 0;
var progressBar = document.getElementById('myBar');
var pWidth = 0;
progressBar.style.width = 0 + "%";

document.getElementById('run_button').addEventListener('click', function(){


		
		function Timer (){
		
		// начать повторы с интервалом 2 сек
		var timerId = setInterval(function() {
			t = t - 1;
			document.getElementById('dates').innerHTML = '-  ' + t + '  -';
			}, 1000);

			// через 5 сек остановить повторы
			setTimeout(function() {
			clearInterval(timerId);
			alert( 'Время вышло! Ваш результат: ' + i );
			window.location.reload()
			}, 60000);
		}	
		


		
		var progressBar = document.getElementById('myBar');
		var pWidth = 0;
		progressBar.style.width = 0 + "%";


		var i = 0;


		document.getElementById('tap_button').addEventListener('click', function(){
			i = i + 1;
			document.getElementById('item').innerHTML = i;
			progressBar.style.width = i/8 + "%";

		});

		Timer();
});


