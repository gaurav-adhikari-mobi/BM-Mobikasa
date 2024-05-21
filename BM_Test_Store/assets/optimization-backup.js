{% comment %}
var selectCallback = function(variant, selector) {
  // BEGIN SWATCHES
  if (variant) {
    var form = jQuery('#' + selector.domIdPrefix).closest('form');
    for (var i=0,length=variant.options.length; i<length; i++) {
      var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
      if (radioButton.size()) {
        radioButton.get(0).checked = true;
      }
    }
  }
  // END SWATCHES

  if (variant && variant.available == true) {
    // selected a valid variant
    jQuery('#purchase').removeClass('disabled').removeAttr('disabled'); // remove unavailable class from add-to-cart button, and re-enable button
    jQuery('.price-field').html(Shopify.formatMoney(variant.price, "{{shop.money_with_currency_format}}"));  // update price field
  } else {
    // variant doesn't exist
    jQuery('#purchase').addClass('disabled').attr('disabled', 'disabled');      // set add-to-cart button to unavailable class and disable button
    var message = variant ? "Sold Out" : "Unavailable";    
    jQuery('.price-field').text(message); // update price-field message
  }
};

 jQuery(function() {
   jQuery('.swatch :radio').change(function() {
     var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
     var optionValue = jQuery(this).val();
     jQuery(this)
     .closest('form')
     .find('.single-option-selector')
     .eq(optionIndex)
     .val(optionValue)
     .trigger('change');  
   });
 });
 {% endcomment %}
 
//  ajaxify.js
 //       if(standardPillow.indexOf(variant_id.toString()) > -1){
//         	changePillow("21286724239465");
//       }else if(standardPillow2.indexOf(variant_id.toString()) > -1){
// 			changePillow("21391581544553");
//       }else if(kingPillow.indexOf(variant_id.toString()) > -1){
//         	changePillow("21286724272233");
//       }else if(kingPillow2.indexOf(variant_id.toString()) > -1){
//         	changePillow("21391584755817");
//       }
 
 
//  bearmattress
 
//     var standardPillow = ["893518483","893433963","893433955","893433959","149327904782","12429321175157","12429325926517","12429325402229"];
//     var kingPillow = ["893520447","893520579","632368627726","632368660494"];

//     var standardPillow2 = ["39457507214","1127305969678"];
//     var kingPillow2 = ["39457507534","39457508238","1127306002446","1127306067982"];

//             if(standardPillow.indexOf(data.id) > -1){
//             	addPillow("21286724239465");
//             }else if(standardPillow2.indexOf(data.id) > -1){
//                 addPillow("21391581544553");
//             }else if(kingPillow.indexOf(data.id) > -1){
//              	addPillow("21286724272233");
//             }else if(kingPillow2.indexOf(data.id) > -1){
//                 addPillow("21391584755817");
//             }