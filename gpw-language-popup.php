<?php
/*
Plugin Name: Language Popup for GTranslate
Description: Hiển thị một popup chứa một selector ngôn ngữ cho người dùng.
Version: 1.0
Author: Le Ngan
*/


// Thêm mã JavaScript và CSS cho plugin vào trang
function popup_for_gtranslate_scripts()
{
    // Thêm mã JavaScript
    wp_enqueue_script('popup-for-gtranslate-script', plugin_dir_url(__FILE__) . 'popup-for-gtranslate.js', array('jquery'), '1.0', true);

    // Thêm mã CSS
    wp_enqueue_style('popup-for-gtranslate-style', plugin_dir_url(__FILE__) . 'popup-for-gtranslate.css');
}

add_action('wp_enqueue_scripts', 'popup_for_gtranslate_scripts');

add_action('wp_footer', 'display_select_language_popup');
if (!function_exists("display_select_language_popup")) {
    function display_select_language_popup()
    {
        if (get_current_user_id()) {
            return;
        }
        $page = get_page_by_path('select-language');
        $content = apply_filters('the_content', $page->post_content);

        $content = file_get_contents(__DIR__ . '/popup-content.html');

        echo $content;
    }
}


