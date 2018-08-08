<?php require_once( '../../../../../wp-load.php' ); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php _e("Column"); ?></title>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js?ver=1.4.2'></script>
<script type="text/javascript" src="../../../../../wp-includes/js/tinymce/tiny_mce_popup.js" ></script>
<script type="text/javascript" src="editor_plugin.js" ></script>
<script type="text/javascript">
jQuery(document).ready(function(){
	
	jQuery('#sub').click( function() {
		column_size = jQuery('#column_size').val();
		last = jQuery('input:checked').val();//:checked
		content = jQuery('#content').val();
		//
		columnsShortcode(column_size, last, content);
	});
});
</script>
</head>

<body>
    <p>
    	<?php _e("Column size"); ?>:
        <select id="column_size" name="column_size" style="width:380px;">
          <option value="1">Column 1x</option>
          <option value="2" selected="selected">Column 2x</option>
          <option value="3">Column 3x</option>
          <option value="4">Column 4x</option>
          <!--<option value="5">Column 5x - 405px</option>
          <option value="6" selected="selected">Column 6x - 495px</option>
          <option value="7">Column 7x - 585px</option>
          <option value="8">Column 8x - 675px</option>
          <option value="9">Column 9x - 755px</option>
          <option value="10">Column 10x - 855px</option>
          <option value="11">Column 11x - 945px</option>
          <option value="12">Column 12x - 1035px</option>-->
        </select>
	</p>
    <p>
    </p>
    	<input id="last" name="last" type="checkbox" value="last" /> <?php _e("Check this if column is last in the row"); ?>
    <p>
    	<?php _e("Box content"); ?>:
        <textarea id="content" name="content" cols="" rows="" style="width:380px; height:150px;"></textarea>
    </p>
	<input id="sub" name="" type="submit" value="<?php _e('Insert'); ?>" />

</body>
</html>
