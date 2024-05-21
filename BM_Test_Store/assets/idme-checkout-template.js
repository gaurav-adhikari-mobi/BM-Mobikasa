(function() {
  var cartContainer = document.getElementById("CartContainer");
  var checkouts = document.getElementsByClassName('order-summary__section--discount')
  var checkout = checkouts[checkouts.length - 1];

  var idme = `<div class="idme">
    <div class="idme-shopify">
      <p class='idme-btn-affinity'>Medical Providers, Military, Nurses, First Responders, and Teachers receive 40% off</p>
      <a class="idme-btn-unify" href="javascript:void(0)" onclick="idmePopUp()">
        <img src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/img/verify.svg" alt="ID.me" style="height:42px"/>
      </a>
    </div>
  </div>`;


   checkout && checkout.insertAdjacentHTML("afterend", idme);
})();

function idmePopUp() {
  var body = document.body;
  var html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

  var top   = (height - 780) / 4;
  var left  = (width - 800) / 2;

  window.open("https://discountify.id.me/oauth/checkpoint/bear-mattress", "", "scrollbars=yes,menubar=no,status=no,location=no,toolbar=no,width=800,height=780,top=" + top + ",left=" + left);
};

var urlParams = new URLSearchParams(window.location.search)

if (urlParams.get('popup')) {
  if (window.opener) {
    window.opener.location.href = "https://bear-mattress.myshopify.com/checkout";
  	window.close();
  }
  else {
  	window.location.href = "https://bear-mattress.myshopify.com/checkout";
  }
};

if (urlParams.get('error')) {
  window.close();
};

