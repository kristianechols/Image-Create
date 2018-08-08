<?php
add_action('admin_init', 'action_admin_init');

function action_admin_init() {
	// only hook up these filters if we're in the admin panel, and the current user has permission
	// to edit posts and pages
	if ( current_user_can( 'edit_posts' ) && current_user_can( 'edit_pages' ) ) {
		add_filter( 'mce_buttons_3', 'filter_mce_button' );
		add_filter( 'mce_external_plugins', 'filter_mce_plugin' );
	}
}

function filter_mce_button( $buttons ) {
	// add a separation before our button, here our button's id is &quot;mygallery_button&quot;
	array_push( $buttons, '|', 'mtfPortfolio', 'mtfPrettyPhoto', 'mtfTooltip', 'mtfMessage', 'mtfImagePreview', 'mtfLargeButton', 'mtfToggle', 'mtfFloatingBox', 'mtfColumns', 'mtfTab', 'mtfTabs', 'mtfSlide', 'mtfSlides', 'mtfFB_like', 'mtfTweetmeme', 'mtfDigg'  );
	return $buttons;
}

function filter_mce_plugin( $plugins ) {
	// this plugin file will work the magic of our button
	$plugins['mtfShortcodesInterface'] = get_bloginfo("template_directory") . '/js/tinymce/editor_plugin.js';

	return $plugins;
}

?>