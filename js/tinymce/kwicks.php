<?php require_once( '../../../../../wp-load.php' ); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php _e("Kwicks carousel"); ?></title>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js?ver=1.4.2'></script>
<script type="text/javascript" src="../../../../../wp-includes/js/tinymce/tiny_mce_popup.js" ></script>
<script type="text/javascript" src="editor_plugin.js" ></script>
<script type="text/javascript">
jQuery(document).ready(function(){
	
	jQuery('#sub').click( function() {
		var category;
		category = jQuery('#category').val();
		//
		kwicksShortcode(category);
	});
});
</script>
</head>

<body>
    <p>
    	<?php _e("Category"); ?>:
        <select id="category" name="category" style="width:380px;">
        	<option value="all"><?php _e("All portfolio items"); ?></option>
			<?php 
				$cat = get_categories('taxonomy=portfolio_category');
				foreach($cat as $c) {
					var_dump($c);
					$cats .= '<option value="'.$c->slug.'">'.$c->name.'</option>';
				}
			?>
        	<?php echo $cats; ?>
        </select>
        <br/><small><?php _e("Choice from which category take posts"); ?></small>
	</p>
	<input id="sub" name="" type="submit" value="<?php _e("Insert"); ?>" />

</body>
</html>
