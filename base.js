// This is the X function, used for callback in the JSONP
function X(json) {
  // Creating the HTML for the reference product with the JSON datas
  document.getElementById('reference-product').innerHTML = `
  <div class="reference-item">
    <div class="reference-image-section">
      <img class="reference-image" src="http:${json.data.reference.item.imageName}">
    </div>
    <div class="reference-info-section">
      <p class="reference-info-name">${json.data.reference.item.name.substring(0,65)} ...</p>
      ${json.data.reference.item.oldPrice ? `
        <p class="reference-info-oldprice">De:
          <span class="reference-info-oldprice-value">${json.data.reference.item.oldPrice}</span>
        </p>
      ` : ``}
      <p class="reference-info-price">Por:
        <span class="reference-info-price-value recommendation-info-price-value-big">${json.data.reference.item.price}</span>
      </p>
      <p class="reference-info-productinfo">
        <span class="reference-info-price-value">${json.data.reference.item.productInfo.paymentConditions}</span>
      </p>
      <p class="reference-info-productinfo">Sem juros</p>
    </div>
  </div>
  `
  // Creating the HTML for the recommendation products with the JSON datas
  document.getElementById('recommended-products').innerHTML = `${json.data.recommendation.map(function (item) {
    return `
    <a href=#>
      <div class="recommendation-item">
        <div class="recommendation-image-section">
          <img class="recommendation-image" src="http:${item.imageName}">
        </div>
        <div class="recommendation-info-section">
          <p class="recommendation-info-name">${item.name.substring(0,65)} ...</p>
          ${item.oldPrice ? `
            <p class="recommendation-info-oldprice">De:
              <span class="reference-info-oldprice-value">${item.oldPrice}</span>
            </p>
          ` : ``}
          <p class="recommendation-info-price">Por:
            <span class="recommendation-info-price-value recommendation-info-price-value-big">${item.price}</span>
          </p>
          <p class="recommendation-info-productinfo">
            <span class="recommendation-info-price-value">${item.productInfo.paymentConditions}</span>
          </p>
          <p class="recommendation-info-productinfo">Sem juros</p>
        </div>
      </div>
    </a>
    `
  }).join('')}`;

}
// Creating the script, loading the url for the JSONP file and append to the HTML
var script = document.createElement('script');
script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'
document.getElementsByTagName('body')[0].appendChild(script);


var pointerRight = document.getElementById('pointer-right');
var pointerLeft = document.getElementById('pointer-left');
var scroller = document.getElementById('recommended-products');


// Scrolling the recommendation section when clickng the right arrow and changing
// the right arrow image
pointerRight.addEventListener("click", function () {
  scroller.scrollLeft += 400;
  if (scroller.scrollLeft + 400 <= 0) {
    pointerLeft.setAttribute("src", "images/pointer-left-off.png")
  } else {
    pointerLeft.setAttribute("src", "images/pointer-left.png")
  };
  if (scroller.scrollLeft > 1076) {
    pointerRight.setAttribute("src", "images/pointer-right-off.png")
  } else {
    pointerRight.setAttribute("src", "images/pointer-right.png")
  };
});


// Scrolling the recommendation section when clickng the left arrow and changing
// the left arrow image
pointerLeft.addEventListener("click", function () {
  scroller.scrollLeft -= 400;
  if (scroller.scrollLeft - 400 <= 0) {
    pointerLeft.setAttribute("src", "images/pointer-left-off.png")
  } else {
    pointerLeft.setAttribute("src", "images/pointer-left.png")
  }
  if (scroller.scrollLeft - 400 > 1076) {
    pointerRight.setAttribute("src", "images/pointer-right-off.png")
  } else {
    pointerRight.setAttribute("src", "images/pointer-right.png")
  };
});
