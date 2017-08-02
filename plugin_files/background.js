// ==UserScript==
//
//Displayable Name of your script 
// @name           ThoughtbackSaver
//
// brief description
// @description    Chrome userscript to save highlighted text to new item on thoughtback.com  
//
//URI (preferably your own site, so browser can avert naming collisions
// @namespace      http://timmytimj.com/ctbsaver
//
// Your name, userscript userid link (optional)   
// @author         TimmyTimJ (http://timmytimj.com/~ttj) 
//
// If you want to license out
// @license        Creative Commons Attribution-NonCommericial-ShareAlike 4.0 International License (http://creativecommons.org/licenses/by-nc-sa/4.0/) 
//
//(optional) may be used by browsers to display an about link
// @homepage       http://timmytimj.com/ctbsaver/#info
//
//Version Number
// @version        0.001
//
// Urls process this user script on
// @include        http://*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
//
// @history        1.0 first version
// @history        1.0b first beta version, who knew!!
//
// ==/UserScript==



// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "ThoughtbackSaver";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
//  var sText = info.selectionText;
  var sText = getThought();
 // var url = "http://thoughtback.com/ajax/add_thought?thought=" + encodeURIComponent(sText); 
 // window.open(url, '_blank');
(function(){var w=600,h=300,l=Math.round((screen.width-w)/2),t=Math.round((screen.height-h)/2),d=document,s=w.getSelection?w.getSelection():d.title;if(s=='')s=d.title;window.ft=window.open('http://thoughtback.com/b/?s='+encodeURIComponent(sText),'','left='+l+',top='+(t>0?t:0)+',width='+w+',height='+h+',personalbar=0,toolbar=0,scrollbars=0,resizable=1');})();
};

function getThought() {
		var selected = 'Enter a thought.';
			if (window.getSelection) {
					selected = window.getSelection();
			}	else if (document.getSelection) {
					selected = document.getSelection)
			}	else if ( document.selection) {
					selected = document.selection.createRange().text;
			}
	return selected.

}
