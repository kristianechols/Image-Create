/*
* 
* jQuery.fn.jic( options );
* Use image checkbox based on suffix or image overlay
*
* Copyright (c) 2011 - Francesco Campana - www.bitzero.it
* 
* USAGE:
* $('#container').jic({
*   images['one','two','three','four']
* });
*
* $('#container').jic({
*   images['one','two','three','four'],
*   images_path:'my/images/path/',
*   selection_mode:'overlay',
*   images_extension: '.jpg',
*   input_type:'checkbox'
* });
*
* Version 1.0.0
* www.sandbox.bitzero.it/jic/documentation.html
*/

(function($){
    $.fn.jic = function(options){
        /** Settings **/
        var settings = $.extend({
            /**
             * input_type 
             * Estabilish the behaviour of the control
             *
             * Values
             * ------
             * radio: one selection only
             * chekbox: multi-selection
             */
            input_type: 'radio', 
            /**
             * selection_mode
             * Estabilish how to set the selection
             *
             * Values
             * ------
             * suffix: two images are used for each input. These differs by the suffix in the On state image
             * overlay: an overlay span is put on the input-image
             */
            selection_mode: 'suffix', 
            /**
             * on_suffix
             * the suffix in the images filename for the On state
             */
            on_suffix: '_on', 
            /**
             * images:
             * array of the images filenames without extension
             */
            images: null, 
            /**
             * images_path
             * the path where the images are located
             */
            images_path: "images/", 
            /**
             * images_extension
             * The images extension. All the images shoud have the same extension.
             */
            images_extension: ".png", 
            /**
             * overlay_elem
             * The html element used as overlay
             */
            overlay_elem: 'span', 
            /**
             * overlay_class
             * The class of the overlay tag
             */
            overlay_class: 'check', 
            /**
             * label_class
             * The css class of the label element
             */
            label_class: 'label_jic', 
            /** Internals **/
            _css_prefix: '_jjic_',// class prefix for styles
            _checked: '_checked',//checked class
            _unchecked: '_unchecked'//unchecked class 
            
        },options||{});

        //css properties for the label element
        this.find('label.' + settings.label_class)
            .css('display', 'inline-block')
            .css('position', 'relative')
            .css('cursor', 'pointer');

        //for jquery 1.6.0 and so we must use prop('checked') instead of attr('checked')
        var use_prop = $().prop ? true : false;

        var jset = this.find('label.' + settings.label_class + ' input:' + settings.input_type);//jquery(find string)
        
        /** Selection Callbacks **/
        var selection_callback = null;
        switch(settings.selection_mode){
            case 'overlay'://a span is overlayed on the checked item
                selection_callback = function (item) {
                    var chk = $("<" + settings.overlay_elem + " class='" + settings.overlay_class + "'></"+ settings.overlay_elem +">");
                    var is_checked = use_prop ? item.prop('checked') : item.attr('checked');
                    var prnt = item.parent();//parent
                    var ol = prnt.find(settings.overlay_elem + '.' + settings.overlay_class);//overlay
                    if(is_checked){
                        //if item is not overlayed then averlay it
                        if(! ol.attr('class')){
                            prnt.append(chk.hide().fadeIn());
                        }
                    } else {
                        ol.remove();
                    }                
                };
            break;
            
            default:
            case 'suffix'://image_on and image_off visibility are both toggled
                selection_callback = function (item) {
                    var is_checked = use_prop ? item.prop('checked') : item.attr('checked');
                    var chk = item.parent().find("img." + settings._css_prefix + settings._checked); 
                    var unchk = item.parent().find("img." + settings._css_prefix + settings._unchecked);
                    if(is_checked){
                        chk.show();                        
                        unchk.hide();
                    } else {
                        chk.hide();
                        unchk.show();
                    }
                };
            break;
        }
        
        /** Utility functions **/
        
        /**
        * choose which image to display according to state
        * @param item the input item
        * @param index the index of the item in the settings.images array
        **/
        var _set_image_by_suffix = function (item, index){
            var checked = use_prop ? item.prop('checked') : item.attr('checked');
            var img_chk = settings.images_path + settings.images[index] + settings.on_suffix + settings.images_extension;
            var img_unchk = settings.images_path + settings.images[index] + settings.images_extension;
            
            var j_unchk = $("<img class='" + settings._css_prefix + settings._unchecked + "'>").attr('src',img_unchk);
            var j_check = $("<img class='" + settings._css_prefix + settings._checked + "'>").attr('src',img_chk);

            //show and hidden images: choosing the one we've to show
            var s_img = checked ? j_check : j_unchk;
            var h_img = ! checked ? j_check : j_unchk;

            //appendig both images so they're cached
            item.parent().append(s_img).append(h_img.css('display','none'));
        };

        /**
        * Set the image to display and calls the selection_callback
        * @param item the input item
        * @param index the index of the item in the settings.images array
        **/        
        var _set_image_by_overlay = function (item, index){
            var img = settings.images_path + settings.images[index] + settings.images_extension;
            item.parent().append($("<img/>").attr('src',img));
            selection_callback(item);
        };

        
        var _set_image = function (item, index){
            var img = null;
            switch(settings.selection_mode){
                default:
                case 'suffix':
                    _set_image_by_suffix(item, index);
                break;
                
                case 'overlay':
                    _set_image_by_overlay(item, index);
                break;
                
            }
        };
        
        /** Init callback **/
        var idx = 0;//index of the first element of settings.images
        var init_callback = function(item){
            //choosing the right image according to attr(checked)
            _set_image(item,idx);
            
            //hiding actual inputs
            item.css('left','-9999px').css('position','absolute');
            ++idx;
        };
            
        /** Initialization and Event binds**/
        
        //managing check-uncheck controls
        jset.each(function(){
            init_callback($(this));
        });
       
        //looking for ie < version 9
        var is_old_ie = $.browser.msie && $.browser.version < 9 ? true : false; 

        //ie<9 we must bind the container.labels as the actual checkboxes cannot be clicked. They are out of the screen 
        var bindable = is_old_ie 
            ? this.find('label.' + settings.label_class)
            : jset;

        //on ie<9 we have to manually trigger the change event
        if(is_old_ie){
            bindable.click(function(){
                var id = '#' + $(this).attr('for');
                var item = $(this).find('input:' + settings.input_type + id); 
                if(use_prop){
                    item.prop('checked',! item.prop('checked'));
                } else {
                    item.attr('checked',! item.attr('checked'));
                }
                jset.trigger('change');
            });
        }

        
        /** Binding events **/
        if(settings.input_type == 'radio'){
            //once 1 radio button changes state, we've to un-check the others
            jset.change(function(){
                jset.each(function(){
                    selection_callback($(this));
                });
            });
        } else if(settings.input_type == 'checkbox'){
        	jset.change(function(){
                selection_callback($(this));
        	});
        }
        return this;
    };
})(jQuery);
