$(document).ready(function(){
	var newwindow = $(window);
	var ginny = $('.ginny');
	var ginnyimg = ginny.find('.ginnyimg')
	var pointer = $('.mousepointer');
	var eye = ginny.find('.eye');
	var weye = eye.find('.weye')
	var eyel = ginny.find('#left');
	var eye2 = ginny.find('#right');
	var pointerheight = pointer.height();
	var pointerwidth = pointer.width();
	var margin = 252;

	var screenheight;
	var screenwidth;
	var mouseX;
	var mouseY;
	var screencenterX;
	var screencenterY;
	var backX;
	var backY;
	var eyeX;
	var eyeY;

	function ginnyimgposition() {
		screenheight = newwindow.height();
		screenwidth = newwindow.width();

		ginny.css('top', screenheight - 640);
		ginny.css('left', screenwidth/2 - 262.5);
	}

	function snitchmovement(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;

		screencenterX = screenwidth/2;
		screencenterY = screenheight/2;

		pointer.css('top', mouseY - pointerheight/2);
		pointer.css('left', mouseX - pointerwidth/2);

		backX = -(screencenterX-mouseX)/20;
		backY = -(screencenterY-mouseY)/20;
		$('body').css('background-position-x', backX - 350);
		$('body').css('background-position-y', backY - 80);

		eyeX = -(screencenterX-mouseX)/40;
		eyeY = -(screencenterY-mouseY)/30;
		eyel.css('left', eyeX + 125);
		eye2.css('left', eyeX + 325);
		eye.css('top', eyeY + 280);

		weye.css('left', eyeX/2 + 15);
		weye.css('top', eyeY/2 + 15);
	}

	newwindow.mousemove(snitchmovement);
	newwindow.resize(ginnyimgposition);

	ginnyimgposition();
	
})