<?php require_once( '../../../../../wp-load.php' ); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php _e("Portfolio"); ?></title>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js?ver=1.4.2'></script>
<script type="text/javascript" src="../../../../../wp-includes/js/tinymce/tiny_mce_popup.js" ></script>
<script type="text/javascript" src="editor_plugin.js" ></script>
<script type="text/javascript">
jQuery(document).ready(function(){
	
	jQuery('#sub').click( function() {
		var count, category, view_type, layout_type;
		//layout_type = jQuery('#layout_type').val();
		count = jQuery('#count').val();
		category = jQuery('#category').val();
		view_type = jQuery('#view_type').val();
		//
		portfolioShortcode(count, category, view_type);
	});
});
</script>
</head>

<body>
    <p>
            <?php _e("Items count"); ?>:
            <select id="count" name="count" style="width:380px;">
              <option value="1">1</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="8">8</option>
              <option value="10" selected="selected">10</option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <br/><small><?php _e("How many items to show?"); ?></small>
    </p>
    <p>
    	<?php _e("Category"); ?>:
        <select id="category" name="category" style="width:380px;">
        	<option value="all"><?php _e("All portfolio items"); ?></option>
			<?php 
				$cat = get_categories('taxonomy=portfolio_category');
				foreach($cat as $c) {
					$cats .= '<option value="'.$c->slug.'">'.$c->name.'</option>';
				}
			?>
        	<?php echo $cats; ?>
        </select>
        <br/><small><?php _e("Choice from which category take posts"); ?></small>
	</p>
    <p>
    	<?php _e("On click"); ?>:
        <select id="view_type" name="view_type" style="width:380px;">
          <option value="page"><?php _e("Open new page"); ?></option>
          <option value="lightbox"><?php _e("Open Lightbox"); ?></option>
        </select>
        <br/><small><?php _e("Choice click behaviour"); ?></small>
	</p>

<input id="sub" name="" type="submit" value="<?php _e("Insert"); ?>" />

</body>
</html>
