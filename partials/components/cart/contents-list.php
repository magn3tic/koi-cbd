<div class="k-cartcontents">
  <div class="k-cartcontents--liner">

    <div class="k-cartcontents--titlerow">
      <div class="k-cartcontents--col k-cartcontents--image">
        <h1 class="k-headline k-headline--sm">Cart</h1>
      </div>
      <div class="k-cartcontents--col k-cartcontents--name">
        <p class="k-upcase">Name</p>
      </div>
      <div class="k-cartcontents--col k-cartcontents--quantity k-align--right">
        <p class="k-upcase">Quantity</p>
      </div>
      <div class="k-cartcontents--col k-cartcontents--price k-align--right">
        <p class="k-upcase">Price</p>
      </div>
    </div>

    <div class="k-cartcontents--main">
    <?php
    
    foreach($items_in_cart as $item) {
      $_product = wc_get_product($item['product_id']);
      $id = $_product->get_id();
      $name = $_product->name;
      $num_in_cart = $item['quantity'];
      $item_subtotal = $item['line_subtotal'];
      $strength = wc_get_product($item['variation_id'])->attributes['strength'];
    ?>

    <div class="k-cartcontents--item">

      <div class="k-cartcontents--col k-cartcontents--image">
        <div class="k-cartcontents--col__liner">
          <figure class="k-figure">
            <div class="k-figure--liner">
              <img src="<?php echo get_the_post_thumbnail_url($id); ?>" alt="" class="k-figure--img" />
            </div>
          </figure>
        </div>
      </div>

      <div class="k-cartcontents--col k-cartcontents--name">
        <div class="k-cartcontents--col__liner">
          <h3 class="k-headline k-headline--mini"><?php echo $name; ?></h3>
          <p><?php echo $strength; ?></p>
          <p class="k-upcase k-accent-text k-cart-remove-item" data-product-id="<?php echo $id; ?>">Remove</p>
        </div>
      </div>

      <div class="k-cartcontents--col k-cartcontents--quantity k-productform--quantity k-align--right">
        <div class="k-cartcontents--col__liner">
          <button id="k-reduce">-</button>
          <input id="k-num-to-add" type="number" value="<?php echo $num_in_cart; ?>" />
          <button id="k-increase">+</button>
        </div>
      </div>

      <div class="k-cartcontents--col k-cartcontents--price k-align--right">
        <div class="k-cartcontents--col__liner">
          <p>$<?php echo $item_subtotal; ?></p>
        </div>
      </div>

    </div>

    <?php
    }
    ?>
    </div>
    
  </div>
  <?php
  if ($items_in_cart) { ?>
    <p class="k-upcase k-accent-text" id="k-cart-remove-all">Remove All</p>
  <?php  
  }
  ?>
  
</div>