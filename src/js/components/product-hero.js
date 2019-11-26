import { $doc } from '../global/selectors';
import wasEnter from '../helpers/wasEnter';
import preventScrollOnDrag from '../helpers/FlickityEvents';

const $productHero = $('.k-producthero');
const $productHeroCarousel = $('.k-producthero--gallery');
const $variantSelects = $(
  '.k-productform--variants .k-productform--variantselect'
);
const $productForm = $('.k-productform');
const $priceTarget = $('.k-productform--pricetarget');
const $pricePrefix = $('#k-bundle-price-prefix');
const $bundledItemSelects = $(
  '.k-producthero--bundle .k-productform--select-bundled-item'
);
const $bundleOptionLabels = $(
  '.k-producthero--bundle .k-productform--bundleselect__item > label'
);
const $bundledVariants = $(
  '.k-producthero--bundle .k-productform--varianttoggle'
);
const $addToCartTrigger = $('.k-productform .k-add-to-cart');
const $quantity = $('#k-num-to-add');
const $prev = $productHeroCarousel.find('.k-producthero__prev');
const $next = $productHeroCarousel.find('.k-producthero__next');

const minItems = $productHero.data('min-items');
let flkty;

$doc.ready(() => {
  /*
    for simple products: since no variantSelects exist, instead pull the product price for the priceTarget from the dataset.
  */
  if ($addToCartTrigger.data('price')) {
    $quantity.data(
      'variant-price',
      parseFloat($addToCartTrigger[0].dataset.price)
    );
  }

  if ($variantSelects.length > 0) {
    const $firstAvailableVariant = getFirstAvailableVariant();
    // the first available variant gets its input marked as checked from server-side.
    setVariant($firstAvailableVariant);
  }
});

function getFirstAvailableVariant() {
  let first = null;

  $variantSelects.each(function() {
    // can't return from a jQuery each().
    if (!$(this).data('outOfStock') && first === null) {
      first = $(this);
    }
  });

  return first;
}

$quantity.change(function() {
  checkQuantityAgainstPrice();
});

function checkQuantityAgainstPrice() {
  let quantity = parseInt($quantity.val());
  let price = $quantity.data('variant-price');
  $priceTarget.text(`$${(quantity * price).toFixed(2)}`);
}

$variantSelects.click(function(e) {
  setVariant($(this));
});

$variantSelects.keypress(function(e) {
  if (wasEnter(e)) {
    setVariant($(this), true);
  }
});

function setVariant(context, wasKeypress = false) {
  let $t;

  if (wasKeypress) {
    const $checkbox = context.find('input');
    $checkbox.prop('checked', !$checkbox[0].checked);
  }

  // if variant is out of stock, disable the button.
  if (context.data('outOfStock')) {
    $addToCartTrigger.attr('disabled', 'disabled');
  } else if ($addToCartTrigger.attr('disabled')) {
    $addToCartTrigger.removeAttr('disabled');
  }

  $t = context.find('.k-productform--varianttoggle');
  const variantPrice = $t.data('variant-price');
  const variantId = $t.data('variant-id');
  $priceTarget.text(`$${variantPrice}`);
  $quantity.data('variant-price', variantPrice);
  checkQuantityAgainstPrice();

  $addToCartTrigger.attr('data-product-id', variantId);
}

/**
 * Handle drawer state when selecting an item from a Product Bundle
 */
$bundledItemSelects.click(function() {
  handleBundleOption($(this));
});

$bundleOptionLabels.keypress(function(e) {
  if (wasEnter(e)) {
    const $checkbox = $(this).siblings('input');
    $checkbox.prop('checked', !$checkbox[0].checked);
    handleBundleOption($checkbox);
  }
});

function handleBundleOption(contextElement) {
  const $t = contextElement;

  const $targetDrawer = $t.siblings().last();
  const targetHeight = $targetDrawer
    .children()
    .first()
    .outerHeight();

  if ($t.is(':checked')) {
    const $labels = $targetDrawer.find('label');
    // make open labels tab accessible
    $labels.attr('tabindex', '0');

    $targetDrawer.height(targetHeight);
  } else {
    /**
     * When the user un-selects a bundled item, we need to remove the selected variant
     * of that previously selected bundled item. That way we can correctly calculate the
     * price visually.
     *
     * EG: User initially selects a "Lemon-Lime" tincture as part of this bundle, and
     *     selects a variant for the tincture; "250mg".
     *
     *     The user later removes the "Lemon-Lime" tincture from their selections.
     *
     *     In this case, we need to remove the active class from the variant ("250mg") from
     *     the bundled item ("Lemon-Lime" tincture) so that the final price calc works as
     *     expected.
     *
     *     The final price calc looks at bundled item variants that have the class
     *     ".bundled-variant-selected"
     */

    // Find selected variant for this bundled item
    const _variantSelects = $t
      .siblings()
      .find('.k-productform--varianttoggle.bundled-variant-selected');

    // remove 'checked' attr from sibling <input />
    _variantSelects.prev().prop('checked', false);

    // remove active class from selected variants
    _variantSelects.removeClass('bundled-variant-selected');
    $targetDrawer.height(0);

    // make closed labels non-tabbable
    const $closedLabels = $targetDrawer.find($bundledVariants);
    $closedLabels.attr('tabindex', '-1');
  }
}

$bundledVariants.keypress(function(e) {
  if (wasEnter(e)) {
    const $checkbox = $(this).siblings('input');
    $checkbox.prop('checked', !$checkbox[0].checked);
  }
});

/**
 * This calculates the final price (visually, doesn't affect price for actual payment)
 * to be shown in the Product Hero after a user has selected the minimum number of items
 * in a Product Bundle.
 */
$bundledVariants.click(function() {
  const $t = $(this);
  let $selectedBundledVariants;

  $t.addClass('bundled-variant-selected');

  /**
   * Find other variant selects that may have been previously
   * selected and remove the active class from them.
   */
  $t.parent()
    .siblings()
    .find('.bundled-variant-selected')
    .removeClass('bundled-variant-selected');

  /**
   * Keep track of selected variants
   */
  $selectedBundledVariants = $productForm.find(
    '.k-productform--varianttoggle.bundled-variant-selected'
  );

  /**
   * Once the num of selected variants matches the num of min
   * items for this bundle, sum the price of all selected variants
   * and update the price element with that sum.
   *
   * Also update price prefix to be a little more clear once all items
   * are selected.
   */
  if ($selectedBundledVariants.length === minItems) {
    let priceWithSelectedItems = 0;

    $selectedBundledVariants.each(function() {
      priceWithSelectedItems += $(this).data('variant-price');
    });

    $pricePrefix.text('with selected items:');
    $priceTarget.text(`$${priceWithSelectedItems.toFixed(2)}`);
  }
});

$doc.ready(function() {
  if (!$productHeroCarousel.length) return;

  flkty = new Flickity($productHeroCarousel[0], {
    cellSelector: '.k-producthero--slide',
    pageDots: false,
    contain: true,
    dragThreshold: 10,
    imagesLoaded: true,
    prevNextButtons: false,
  });

  preventScrollOnDrag(flkty);

  $prev.click(() => flkty.previous());
  $next.click(() => flkty.next());

  $variantSelects.each(function() {
    const $t = $(this);

    if (
      $t
        .siblings()
        .first()
        .is(':checked')
    ) {
      const variantPrice = $t.data('variant-price');
      const variantId = $t.data('variant-id');

      $quantity.data('variant-price', parseFloat(variantPrice));
      $priceTarget.text(`$${variantPrice}`);
      $addToCartTrigger.attr('data-product-id', variantId);
    }
  });
});
