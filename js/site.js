var selectedLetter; 	//For customizing your letter
	var url;				//For saving the state
	var cartURL;			//For adding the state to the cart
	var removeID;			//For deleting an item off the cart
	$(document).ready(function() {
	
		$('#zipCodeText').keyup(function(event)
		{
			if(event.keyCode == 13)
			{
				checkmeout();
			}
		});
	
		$("#checkoutz").validate();

		//Activate Accordian on Home Page
		$('#accordion').accordion();
		
	
		//Home Page Portfolio
		$('ul#portfolio').innerfade({
			speed: 1000,
			timeout: 5000,
			type: 'sequence',
			containerheight: '220px'
		});
		
		//When the page loads, update the urls for state saving
		updateURL();
		
		//Word Page
		$('.letter').click(function()
		{	
			//Sets Selected Letter
			selectedLetter = $(this);
			
			//Reset High Lighting
			$(".letter").css("border", "3px solid transparent");
			
			//Highlight me
			$(this).css("border", "3px solid #7b3122");
			
			//What letter am I clicking on
			var letter = $(this).attr("rel");			
			
			//Populate the letterSelector with it's letter
			$('#letterSelector').load("/letter/display_letters/" + letter);
			
			updateURL();
		});
		
		//Handles the matte color or none
		$('.frameSelection').click(function()
		{
			var frameSelection = "frame_" + $(this).val();
			
			//$('#lettersContainer ul').removeClass().addClass(frameSelection);
			$('#lettersContainer ul').attr("class",frameSelection);
			//$('html, body').animate({scrollTop:0}, 'slow'); 
			
			updateURL();
		});
		
		//Find out which matte color is selected and then sets the actual image
		$('#lettersContainer ul').removeClass().addClass("frame_" + $('.frameSelection:checked').val());
		
		
		//Send to a friend
		$('#sendtofriend').click(function()
		{
			updateURL();
		});
		
		//Any button link, turn the text white
		$(".button a").click(function()
		{
			$(".button a").css("color","#E3E0D0");
			$(this).css("color","white");
		});
		
		//Send to a friend tab click
		$("#sendtofriend").click(function()
		{
			$('#saveModal').fadeOut("normal");
			$('#sendtoafriendModal').slideDown("normal");
		});
		
		//Save tab click button
		$("#savebtn").click(function()
		{
			$('#sendtoafriendModal').fadeOut("normal");
			$('#saveModal').slideDown("normal");
			$('#debugger_phu').html("clicked the button");
		});
		
		
	    
	    $('#sendtoafriendform').submit(function() { 
	    	$('#debugger_phu').html("aaaclicked the button");
	    	var SendToaFriendoptions = { 
		        beforeSubmit:  function()
						        {	
						        	updateURL();
						        }, 
		        success:       function(result)
						        {
						        	$('#sendtoafriendModal').html(result);
						        },  
		 
		        url:       '/letter/sendtoafriend/index.php',			// override for form's 'action' attribute 
		        type:      'post'        								// 'get' or 'post', override for form's 'method' attribute 
		    }; 
		    
		    //Submit it
	        $(this).ajaxSubmit(SendToaFriendoptions); 
	 
	        return false; 
	    }); 
	    
	    
	    //Save Form Processing
	    $('#saveForm').submit(function() { 
	    	
	    	var SaveOptions = { 
		        beforeSubmit:  function()
						        {	
						        	updateURL();
						        },
		        success:       function(result)
						        {
						        	//Return the results in the same div
						        	$('#saveModal').html(result);
						        },  
		 
		        url:       '/letter/save/index.php',					// override for form's 'action' attribute 
		        type:      'post'										// 'get' or 'post', override for form's 'method' attribute 
	    	}; 
	    	
	    	//Submit it
	        $(this).ajaxSubmit(SaveOptions); 
	 
	        return false; 
	    });
		
		  		
	    //Add to cart button
	    $('#addForm').submit(function()
		{
			var AddOptions = { 
		        beforeSubmit:  function()
						        {	updateURL();
						        	
						        },  
		        success:       function(result)
						        {
						        	//Taking you to the cart once i'm done
						        	window.location = "https://alpha-photos.com/cart";
						        },  
		 
		        url:       cartURL,         // override for form's 'action' attribute 
		        type:      'post'        // 'get' or 'post', override for form's 'method' attribute 
	    	};
	    
	    	//Submit it
			$(this).ajaxSubmit(AddOptions); 
			return false;
		});
		
		//Removing an item from the shopping cart
		$('#removeForm').submit(function()
		{
			var RemoveOptions = { 
		        beforeSubmit:  function()
						        {	
						        	
						        },  
		        success:       function(result)
						        {
						        	//Taking you back to the cart
						        	window.location = "https://alpha-photos.com/cart";
						        	
						        	//Fade out the item
						        	$("#item_"+removeID).fadeOut();
						        },  
						       
		 
		        url:      	"/cart/remove/" + removeID,         // override for form's 'action' attribute 
		        type:      'post'        // 'get' or 'post', override for form's 'method' attribute 
			};
			//Submit it
			$(this).ajaxSubmit(RemoveOptions); 
			return false;
		});
		
		//Calculates the shipping and prints it out
		$('#shippingButton').click(function()
		{
			//console.log($('#zipcodetext').val());
			
			$(this).load('/usps/index.php?zip='+$('#zipCodeText').val(), function(result)
			{
				//$('#shipping ul').html("").append("<li><input type='radio' name='shipping_option' value='Pick Up'/> Pick Up: $0.00</li>")
							//.append("<li><input type='radio' value='USPS Priority' name='shipping_option'/> USPS Priorty: "+result+"</li>");
				
				//
							
			});
			
			
		});
		
		
		
		
		//Checkout button on the cart page
		$('#checkoutbutton').click(function()
		{
			checkmeout();
			
			
			
		});
		
		//Home page submit
		$('#homeForm').submit(function()
		{
			start();
			
			return false;
		});
		
		$('#sameAsBilling').click(function()
		{
			$('#billing_firstName').val($('#shipping_firstName').val());
			$('#billing_lastName').val($('#shipping_lastName').val());
			$('#billing_company').val($('#shipping_company').val());
			$('#billing_address1').val($('#shipping_address1').val());
			$('#billing_address2').val($('#shipping_address2').val());
			$('#billing_city').val($('#shipping_city').val());
			$('#billing_zip').val($('#shipping_zip').val());
			$('#billing_state').val($('#shipping_state').val());
			$('#billing_phone').val($('#shipping_phone').val());
			$('#billing_email').val($('#shipping_email').val());
		});
	
	});
	
	//Checks the wordInput on the homepage to make sure its 3-10 letters long
	function start()
	{
		if(alphanumeric($('#wordInput').val()))
		{
			window.location = 'word/step1/' + $('#wordInput').val();
		}else
		{
			alert("Please enter 3-12 letters from A-Z");
		}
		
	}
	
	//Checks if a string is Alpha Numeric (Modified to just alpha)
	function alphanumeric(alphane)
	{
		
		var numaric = alphane;
		
			for(var j=0; j<numaric.length; j++)
				{
				  var alphaa = numaric.charAt(j);
				  var hh = alphaa.charCodeAt(0);
				  if((hh > 64 && hh<91) || (hh > 96 && hh<123) && numaric.length < 13 && numaric.length > 2)
				  {
				  }
				else	{
		                        
					 return false;
				  }
		 		}
		
		 	return true;
	 		}


	//Calls the remove form function (submits a form)
	function removeFormFunction(theIdtoremove)
	{
		removeID = theIdtoremove;
		$('#removeForm').submit();
	}
	
	function selectionLetter(id)
	{
		//console.log(id);
		$(selectedLetter).attr("src","/letter/image/"+id);
		$(selectedLetter).attr("id",id);
		
		updateURL();
		
	}
	
	function updatePrices(theValue, theShippingOption)
	{
		//console.log(theShippingOption, theValue);
		//Update Shipping Value
		$('#shippingValue').html(theValue.toFixed(2));
		$('#shipping_price').val(theValue);
		$('#shipping_option').val(theShippingOption);
		//Update SubTotal Value
		var subTotal = parseFloat($('#subTotalValue').html());
		var totalValue = subTotal + theValue;
		$('#grandTotalValue').html(totalValue.toFixed(2));
	}
	
	function updateURL()
	{
		
		url = "http://alpha-photos.com/word/step1/";
		
		//Adding Name to URL
		url += $('#lettersContainer').attr('rel') + "/populate/";
		
		cartURL = "/cart/add/" + $('#lettersContainer').attr('rel') + "/";
		
		//Loop through each letter and print out
		var lettersArray = $('#lettersContainer img');
		for(var i=0; i<$('#lettersContainer img').size();i++)
		{
			url += $(lettersArray[i]).attr('id') + "/";
			cartURL += $(lettersArray[i]).attr('id') + "/";
			
		}
		
		//matte color
		
		url += $('.frameSelection:checked').val();
		cartURL += $('.frameSelection:checked').val();
		$('#theURL').val(url);
		$('#theURL2').val(url);
		$('#theURL3').val(cartURL);
		
		//PRICE
		var letterCountDown = $('#lettersContainer img').size();
		var frameSelect = $('.frameSelection:checked').val();
		
		if(frameSelect == "black" || frameSelect == "white")
		{
			var fullprice = (letterCountDown * 10)+25;
			$('#framePrice').html(fullprice);
			
		} else
		{
			var pricey = letterCountDown * 6;
			$('#framePrice').html(pricey);
		}
		
	}
	
	function checkmeout()
	{
		var states = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];
			
			//console.log("Asdfas");
			if($('#zipCodeText').val().length == 5)
			{
				$('#shipping_zip_real').val($('#zipCodeText').val());
				$('#shipping_zip').val($('#zipCodeText').val());
				$('#checkoutbutton a').html("<img style='padding-left:26px;width:16px;height:16px' src='/images/ajax.gif'/>");
				
				$.get('/usps/index.php?zip='+$('#zipCodeText').val(), function(result)
				{
					$.get('/home/getStateFromZip/'+$('#zipCodeText').val(), function(result2)
					{
					
						for(tempS in states)
						{
							
							var checked;
							if(states[tempS] == result2)
							{
								checked="selected=\"selected\"";
								//console.log(result2 + ", " + states[tempS]);
							} else
							{
								checked="";
							}
						
							$('#shipping_state').append('<option '+checked+'>'+states[tempS]+'</option>');
							$('#billing_state').append('<option '+checked+'>'+states[tempS]+'</option>');
						}
					});
					//Populate the shipping_state dropdown
					
					
					
					$('#shipping_option').val("Pick Up");
					$('#shipping_price').val("0.00");
					$('#checkoutArea').slideUp();
					$('#shipping').show();
					
					updatePrices(parseInt(result), "adsf");
					
					$('#checkout_col1_shipping ul').html("").append("<li><input type='radio' onclick='updatePrices(0.00, \"Pick Up\");' name='ship' class='required'/> Pick Up: $0.00</li>")
								.append("<li><input type='radio' onclick='updatePrices("+result+", \"UPS Ground\");' name='ship'/> UPS Ground (1-6 business days): $"+result+"</li>");
								
				});
			} else
			{
				alert("Please enter a valid zip code.");
			}
			
	}
	
	
