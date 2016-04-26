var myVoice = new p5.Speech();

var saySomething = function() {
	var text = getSelectionText();
	myVoice.speak(text);
}

var getSelectionText = function() {
    var text = '';
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
        text = document.selection.createRange().text;
    }
    return text;
}

$(function() {
    $.contextMenu({
        selector: '.context-menu-one',
        callback: function(key, options) {
            console.log('clicked: ' + key);
            var text = getSelectionText();
			myVoice.speak(text);
        },
        items: {
            'speak': {
            	name: 'Speak',
            	icon: 'speak'
           	}
        }
    });

    $('.context-menu-one').on('click', function(e){
        console.log('clicked', this);
    })
});