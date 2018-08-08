// Docu : http://wiki.moxiecode.com/index.php/TinyMCE:Create_plugin/3.x#Creating_your_own_plugins

(function() {
	// Load plugin specific language pack
	//tinymce.PluginManager.requireLangPack('mtfExtensions');
	
	tinymce.create('tinymce.plugins.mtfShortcodesInterface', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			
			//Portfolio
			ed.addCommand('mcePortfolio', function() {
				ed.windowManager.open({
					file : url + '/portfolio.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfPortfolio', {
				title : 'Portfolio',
				cmd : 'mcePortfolio',
				image : url + '/images/ui-slideshow.png'
			});
			
			//Kwicks
			ed.addCommand('mceKwicks', function() {
				ed.windowManager.open({
					file : url + '/kwicks.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 100 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfKwicks', {
				title : 'Kwicks slider',
				cmd : 'mceKwicks',
				image : url + '/images/image_arrow.png'
			});
			
			//prettyPhoto
			ed.addCommand('mcePrettyPhoto', function() {
				ed.windowManager.open({
					file : url + '/prettyphoto.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 270 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfPrettyPhoto', {
				title : 'prettyPhoto',
				cmd : 'mcePrettyPhoto',
				image : url + '/images/ui-prettyphoto.png'
			});
			
			//tooltip
			ed.addCommand('mceTooltip', function() {
				ed.windowManager.open({
					file : url + '/tooltip.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 190 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfTooltip', {
				title : 'Tooltip',
				cmd : 'mceTooltip',
				image : url + '/images/ui-tooltip-balloon.png'
			});
			
			//message
			ed.addCommand('mceMessage', function() {
				ed.windowManager.open({
					file : url + '/message.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 200 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfMessage', {
				title : 'Info message',
				cmd : 'mceMessage',
				image : url + '/images/ui-message.png'
			});
			
			//image preview
			ed.addCommand('mceImagePreview', function() {
				ed.windowManager.open({
					file : url + '/imagepreview.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 260 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfImagePreview', {
				title : 'Image preview',
				cmd : 'mceImagePreview',
				image : url + '/images/ui-image_preview.png'
			});
			
			//large button
			ed.addCommand('mceLargeButton', function() {
				ed.windowManager.open({
					file : url + '/largebutton.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfLargeButton', {
				title : 'Large button',
				cmd : 'mceLargeButton',
				image : url + '/images/ui-button.png'
			});
			
			//Toggle
			ed.addCommand('mceToggle', function() {
				ed.windowManager.open({
					file : url + '/toggle.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfToggle', {
				title : 'Toggle content (FAQ)',
				cmd : 'mceToggle',
				image : url + '/images/ui-faq.png'
			});
			
			//Floating Box
			ed.addCommand('mceFloatingBox', function() {
				ed.windowManager.open({
					file : url + '/box.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfFloatingBox', {
				title : 'Floating box',
				cmd : 'mceFloatingBox',
				image : url + '/images/ui-box.png'
			});
			
			//Columns
			ed.addCommand('mceColumns', function() {
				ed.windowManager.open({
					file : url + '/columns.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 280 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfColumns', {
				title : 'Columns',
				cmd : 'mceColumns',
				image : url + '/images/ui-column.png'
			});
			
			
			//Tab
			ed.addCommand('mceTab', function() {
				ed.windowManager.open({
					file : url + '/tab.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfTab', {
				title : 'Tab',
				cmd : 'mceTab',
				image : url + '/images/ui-tab.png'
			});
			
			//Tabs
			ed.addCommand('mceTabs', function() {
				var sel = ed.selection.getContent();
				sel = ' [tabs]' + sel + '[/tabs] ';
				ed.selection.setContent(sel);
			});
			
			ed.addButton('mtfTabs', {
				title : 'Wrap tabs',
				cmd : 'mceTabs',
				image : url + '/images/ui-tabs.png'
			});
			
			
			//Slide
			ed.addCommand('mceSlide', function() {
				ed.windowManager.open({
					file : url + '/slide.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			
			ed.addButton('mtfSlide', {
				title : 'Slide',
				cmd : 'mceSlide',
				image : url + '/images/ui-slide.png'
			});
			
			//Tabs
			ed.addCommand('mceSlides', function() {
				var sel = ed.selection.getContent();
				sel = ' [slideshow]' + sel + '[/slideshow] ';
				ed.selection.setContent(sel);
			});
			
			ed.addButton('mtfSlides', {
				title : 'Wrap slides',
				cmd : 'mceSlides',
				image : url + '/images/ui-slides.png'
			});
			
			
			//Facebook like button
			ed.addCommand('mceFB_like', function() {
				ed.windowManager.open({
					file : url + '/fb_like.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			ed.addButton('mtfFB_like', {
				title : 'Facebook like button',
				cmd : 'mceFB_like',
				image : url + '/images/fb_like.png'
			});
			
			//Tweetmeme button
			ed.addCommand('mceTweetmeme', function() {
				ed.windowManager.open({
					file : url + '/tweetmeme.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			ed.addButton('mtfTweetmeme', {
				title : 'Tweetmeme counter',
				cmd : 'mceTweetmeme',
				image : url + '/images/tweetmeme.png'
			});
			
			//Digg button
			ed.addCommand('mceDigg', function() {
				ed.windowManager.open({
					file : url + '/digg.php',
					width : 400 + ed.getLang('example.delta_width', 0),
					height : 250 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
				});

			});
			ed.addButton('mtfDigg', {
				title : 'Digg button',
				cmd : 'mceDigg',
				image : url + '/images/digg.png'
			});

			
			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, e, collapsed) {
				cm.setDisabled('mtfTabs', collapsed);
				cm.setDisabled('mtfSlides', collapsed);
			});
		},
		
		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
					longname  : 'WPBakery - shortcodes for tinyMCE',
					author 	  : 'Michael M',
					authorurl : 'http://wpbakery.com',
					infourl   : 'http://wpbakery.com',
					version   : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('mtfShortcodesInterface', tinymce.plugins.mtfShortcodesInterface);
})();

function portfolioShortcode(count, category, view_type) {
	var output, params;
	params = '';
	if (view_type != 'page') params += ' view_type="'+view_type+'"';
	if (count != 10) params += ' items_count="'+count+'"';
	if (category != 'all') {
		category = ' category="'+category+'"';
	} else if (category == 'all') {
		category = '';
	}
	
	output = tinyMCE.activeEditor.selection.getContent();
	output = ' [portfolio'+category+params+'] ';
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function kwicksShortcode(category) {
	var output;
	output = tinyMCE.activeEditor.selection.getContent();
	if (category != 'all') {
		category = ' category="'+category+'"';
	} else if (category == 'all') {
		category = '';
	}
	output = ' [kwicks'+category+'] ';
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function prettyPhotoShortcode(url, title, content) {
	var output, params;
	params = '';
	output = tinyMCE.activeEditor.selection.getContent();
	
	if (content == '' && output == '') {
		content = 'ENTER PRETTY LINK HERE';
	} else if (content == '' && output != '') {
		content = output;
	}
	if (url == '') { url = 'ENTER URL TO THE IMAGE OR YOUTUBE/VIMEO VIDEO HERE'; }
	if (title != '') { params = ' title="'+title+'"'; }
	
	output = ' [prettyPhoto'+params+' url="'+url+'"]'+content+'[/prettyPhoto] ';
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function tooltipShortcode(text, content) {
	var output;
	output = tinyMCE.activeEditor.selection.getContent();
	
	if (text == '' && output != '') {
		text = output;
	} else if (text == '' && output == '') { text = 'ENTER TOOLTIP HERE'; }
	
	if (content == '') {
		content = 'ENTER TOOLTIP MESSAGE HERE';
	}
	
	output = ' [tooltip text="'+content+'"]'+text+'[/tooltip] ';
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function messageShortcode(type, content) {
	var output;
	output = tinyMCE.activeEditor.selection.getContent();
	if (content == '' && output != '') {
		content = output;
	}
	output = ' [message color="'+type+'"]'+content+'[/message] ';
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function imagePreviewShortcode(url, title, content) {
	var output, img_title;
	output = tinyMCE.activeEditor.selection.getContent();
	if (url == '') url = 'ENTER IMAGE URL HERE';
	if (title != '') img_title = ' image_title="'+title+'"'; else img_title = '';
	if (content == '' && output != '') {
		content = output;
	} else if (content == '' && output == '') {
		content = 'ENTER YOUR MESSAGE HERE';
	}
	
	output = ' [image_preview image_url="'+url+'"'+img_title+']'+content+'[/image_preview] ';
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function largeButtonShortcode(text, url, type, color, target) {
	var output, params, sel;
	params = '';
	sel = tinyMCE.activeEditor.selection.getContent();
	if (text != '') {
		params += ' text="'+text+'"';
	} else if (text == '' && sel != '') {
		params += ' text="'+sel+'"';
	}
	if (url == '') url = "http://www.YOUR-LINK-HERE.com";
	params += ' href="'+url+'"';
	
	if (type != '') params += ' type="'+type+'"';
	
	if (color == '') color = "yellow";
	params += ' color="'+color+'"';
	
	if (target != '_self') params += ' target="'+target+'"';
	
	output = ' [large_button'+params+'] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function toggleShortcode(title, content) {
	var title, content;
	params = '';
	sel = tinyMCE.activeEditor.selection.getContent();
	
	if (title != '') {
		params += ' title="'+title+'"';
	} else if (title == '' && sel != '') {
		params += ' title="'+sel+'"';
	} else if (title == '' && sel == '') {
		params += ' title="ENTER TITLE HERE"';
	}
	if (content == '') content = "PLACE YOUR CONTENT HERE";
	
	output = ' [toggle'+params+']'+content+'[/toggle] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function floatingBoxShortcode(orientation, content) {
	
	sel = tinyMCE.activeEditor.selection.getContent();
	
	if (content == '' && sel != '') {
		content = sel;
	}

	output = ' [box_'+orientation+']'+content+'[/box_'+orientation+'] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function columnsShortcode(column_size, last, content) {
	
	var params;
	params = '';
	
	sel = tinyMCE.activeEditor.selection.getContent();
	
	if (content == '' && sel != '') {
		content = sel;
	}
	if (last == 'last') {
		params += ' last="last"';
	}

	output = ' [column width="'+column_size+'"'+params+']'+content+'[/column] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function tabShortcode(title, content) {
	var title, content;
	params = '';
	sel = tinyMCE.activeEditor.selection.getContent();
	
	if (title != '') {
		params += ' title="'+title+'"';
	} else if (title == '' && sel != '') {
		params += ' title="'+sel+'"';
	} else if (title == '' && sel == '') {
		params += ' title="ENTER TAB TITLE HERE"';
	}
	if (content == '') content = "PLACE TAB CONTENT HERE";
	
	output = ' [tab'+params+']'+content+'[/tab] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function slideShortcode(title, image, url) {
	var title, image, url;
	params = '';
	sel = tinyMCE.activeEditor.selection.getContent();
	
	if (image != '') {
		params += ' image="'+image+'"';
	} else if (image == '' && sel != '') {
		params += ' image="'+sel+'"';
	}
	
	if (url != '') {
		params += ' url="'+url+'"';
	}
	
	output = ' [slide'+params+']'+title+'[/slide] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function fb_likeShortcode(type) {
	var params;
	params = '';
	if (type != '') {
		params += ' type="'+type+'"';
	}
	output = ' [fb_like'+params+'] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function tweetmemeShortcode(type) {
	var params;
	params = '';
	if (type != '') {
		params += ' type="'+type+'"';
	}
	output = ' [tweetmeme'+params+'] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}

function diggShortcode(type) {
	var params;
	params = '';
	if (type != '') {
		params += ' type="'+type+'"';
	}
	output = ' [digg'+params+'] ';
	
	tinyMCE.activeEditor.selection.setContent(output);
	tinyMCEPopup.close();
}