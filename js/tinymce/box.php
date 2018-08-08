<?php require_once( '../../../../../wp-load.php' ); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php _e("Floating box"); ?></title>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js?ver=1.4.2'></script>
<script type="text/javascript" src="../../../../../wp-includes/js/tinymce/tiny_mce_popup.js" ></script>
<script type="text/javascript" src="editor_plugin.js" ></script>
<script type="text/javascript">
jQuery(document).ready(function(){
	
	jQuery('#sub').click( function() {
		orientation = jQuery('input[name=orientation]:checked').val();
		content = jQuery('#content').val();
		//
		floatingBoxShortcode(orientation, content);
	});
});
</script>
</head>

<body>
    <p>
    	<?php _e("Box orientation"); ?>: <input name="orientation" type="radio" value="left" checked /> Left <input name="orientation" type="radio" value="right" /> Right
	</p>
    <p>
    	<?php _e("Box content"); ?>:
        <textarea id="content" name="content" cols="" rows="" style="width:380px; height:150px;"></textarea>
    </p>
	<input id="sub" name="" type="submit" value="<?php _e('Insert'); ?>" />
</body>
</html>
