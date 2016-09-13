window.onerror = function(text, file, line){
	alert('An error occured in file ' + file
		+ ' at line ' + line
		+ ':\n'
		+ text
		);
	}	