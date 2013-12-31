<?php

function teach_it_dframe_form_system_theme_settings_alter(&$form, $form_state) {
  $form['settings'] = array(
      '#type' => 'vertical_tabs',
      '#title' => t('Theme settings'),
      '#weight' => 2,
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );

 

  $form['settings']['social_links'] = array(
      '#type' => 'fieldset',
      '#title' => t('Social links settings'),
      '#collapsible' => TRUE,
      '#collapsed' => FALSE,
  );

  $form['settings']['social_links']['twitter_url'] = array(
      '#type' => 'textfield',
      '#title' => t('Twitter URL'),
      '#default_value' => theme_get_setting('twitter_url', 'teach_it_dframe'),
  );
  $form['settings']['social_links']['facebook_url'] = array(
      '#type' => 'textfield',
      '#title' => t('Facebook URL'),
      '#default_value' => theme_get_setting('facebook_url', 'teach_it_dframe'),
  );
  $form['settings']['social_links']['google_plus_url'] = array(
      '#type' => 'textfield',
      '#title' => t('Google+ URL'),
      '#default_value' => theme_get_setting('google_plus_url', 'teach_it_dframe'),
  );
  $form['settings']['social_links']['instagram_url'] = array(
      '#type' => 'textfield',
      '#title' => t('Instagram URL'),
      '#default_value' => theme_get_setting('instagram', 'teach_it_dframe'),
  );
  $form['settings']['social_links']['pinterest_url'] = array(
      '#type' => 'textfield',
      '#title' => t('Pinterest URL'),
      '#default_value' => theme_get_setting('pinterest_url', 'teach_it_dframe'),
  );
  $form['settings']['social_links']['youtube_url'] = array(
      '#type' => 'textfield',
      '#title' => t('Youtube URL'),
      '#default_value' => theme_get_setting('youtube_url', 'teach_it_dframe'),
  );


  
  if (isset($form_state['build_info']['args'][0]) && ($theme = $form_state['build_info']['args'][0]) && color_get_info($theme) && function_exists('gd_info')) {
        $form['images'] = array(
            '#type' => 'fieldset',
            '#title' => t('Images scheme'),
            '#weight' => -1,
            '#attributes' => array('id' => 'images_scheme_form'),
        );
        $form['images'] += images_scheme_form($form, $form_state, $theme);
        //$form['#validate'][] = 'images_scheme_form_validate';
        $form['#submit'][] = 'images_scheme_form_submit';
    }

}