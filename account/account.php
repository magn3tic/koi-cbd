<?php check_login();
/**
 * Template Name: Account
 */ get_header(); ?>
<div class="account">
  <nav class="account-breadcrumbs">
    <ul class="account-breadcrumbs-inside">
      <li>
        <a href="<?php echo home_url(); ?>">
          Home
        </a>
      </li>
      <li>
        <span>
          Account
        </span>
      </li>
    </ul>
  </nav>
  <div class="account-inside">
    <main class="account-content">
      <h1>Account Overview</h1>
      <form class="form" id="update-account" data-customer="<?php echo get_current_user_id(); ?>">
        <?php global $current_user; ?>
        <div class="field">
          <label for="account_display_name" class="field-label">
            <?php esc_html_e( 'Display name', 'woocommerce' ); ?>
          </label>
          <input id="account_display_name" name="account_display_name" type="text" class="field-input" value="<?php echo $current_user->display_name; ?>" disabled>
        </div>

        <div class="field">
          <label for="firstname" class="field-label">
            First Name
          </label>
          <input id="firstname" name="firstname" type="text" class="field-input" value="<?php echo $current_user->first_name; ?>">
        </div>

        <div class="field">
          <label for="lastname" class="field-label">
            Last Name
          </label>
          <input id="lastname" name="lastname" type="text" class="field-input" value="<?php echo $current_user->last_name; ?>">
        </div>

        <div class="field">
          <label for="email" class="field-label">
            E-mail Address
          </label>
          <input id="email" name="email" type="text" class="field-input" value="<?php echo $current_user->user_email; ?>">
        </div>

        <div class="field field-buttons">
          <button class="btn btn-submit" type="submit">Update</button>
        </div>

      </form>
    </main>
    <?php include(locate_template('account/partials/sidebar.php')); ?>
  </div>
</div>
<?php get_footer(); ?>
