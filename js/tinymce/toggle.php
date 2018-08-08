<?php require_once( '../../../../../wp-load.php' ); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php _e("Toggle content (FAQ)"); ?></title>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js?ver=1.4.2'></script>
<script type="text/javascript" src="../../../../../wp-includes/js/tinymce/tiny_mce_popup.js" ></script>
<script type="text/javascript" src="editor_plugin.js" ></script>
<script type="text/javascript">
jQuery(document).ready(function(){
	
	jQuery('#sub').click( function() {
		var title, content;
		title = jQuery('#title').val();
		content = jQuery('#content').val();
		//
		toggleShortcode(title, content);
	});
});
</script>
</head>

<body>
    <p>
    	<?php _e("Toggle title"); ?>:
        <br/><input id="title" name="title" type="text" style="width:380px;" />
	</p>
    <p>
    	<?php _e("Hidden content"); ?>:
        <textarea id="content" name="content" cols="" rows="" style="width:380px; height:150px;"></textarea>
    </p>
	<input id="sub" name="" type="submit" value="<?php _e('Insert'); ?>" />

</body>
</html>
