import { $doc } from './selectors';

const url = `${window.SITE_GLOBALS.root}/wp-admin/admin-ajax.php`;

const $addToCartButtons = $('.k-add-to-cart');
const $cartNum = $('#k-cartnum');
const $removeFromCartTrigger = $('.k-cart-remove-item');
const $removeAllTrigger = $('#k-cart-remove-all');

function onDocReady() {
  const request = {
    method: 'POST',
    url,
    data: {
      action: 'nopriv_get_cart',
    },
    dataType: 'json',
    success: cart => updateCartStatus(Object.values(cart)),
    error: err => console.log(err),
  };

  $.ajax(request);
}

function numItemsInCart(items) {
  let numInCart = 0;

  items.forEach(item => {
    numInCart += item.quantity;
  });

  return numInCart;
}

async function removeItemFromCart(id) {
  const request = {
    method: 'POST',
    url,
    data: {
      action: 'nopriv_remove_cart_item',
      product_id: id,
    },
    dataType: 'json',
    success: cart => updateCartStatus(Object.values(cart)),
    error: err => console.log(err),
  };

  return $.ajax(request);
}

async function emptyCart() {
  const request = {
    method: 'GET',
    url,
    data: {
      action: 'nopriv_remove_all_cart_items',
    },
    dataType: 'json',
    success: cart => updateCartStatus(Object.values(cart)),
    error: err => console.log(err),
  };

  return $.ajax(request);
}

function updateCartStatus(cartItems) {
  console.log('cart updated:', cartItems);

  const n = numItemsInCart(cartItems);
  
  if (n) {
    $cartNum.text(n);
    $cartNum.addClass('k-has-value');
  } else {
    $cartNum.text(0);
    $cartNum.removeClass('k-has-value');
  }
}

function onCartAddFailure() {

}

// == event listeners == //
$doc.ready(onDocReady);

$addToCartButtons.click(function(e) {
  e.preventDefault();

  const $t = $(this);
  const productId = $t.attr('rel');
  const data = {
    action: 'nopriv_add_product',
    product_id: productId,
  };

  $t.attr('disabled', true);

  $.ajax({
    type: 'POST',
    url,
    data,
    dataType: 'json',
    success: cart => updateCartStatus(Object.values(cart)),
    error: function(err) {
      console.log('error', err);
    },
    complete: () => {
      $t.attr('disabled', false);
    },
  });
});

$removeFromCartTrigger.click(async function() {
  const $t = $(this);
  const id = $t.data('product-id');

  await removeItemFromCart(id);
  window.location.reload();
});

$removeAllTrigger.click(async function() {
  await emptyCart();
  window.location.reload();
});
