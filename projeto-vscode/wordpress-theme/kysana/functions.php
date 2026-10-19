<?php
/**
 * Kysana theme helpers.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function kysana_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array( 'height' => 120, 'width' => 180, 'flex-height' => true, 'flex-width' => true ) );
    register_nav_menus( array( 'primary' => __( 'Navegação principal', 'kysana' ) ) );
}
add_action( 'after_setup_theme', 'kysana_setup' );

function kysana_assets() {
    wp_enqueue_style( 'kysana-fonts', 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap', array(), null );
    wp_enqueue_style( 'kysana-style', get_stylesheet_uri(), array( 'kysana-fonts' ), '1.0.0' );
    wp_enqueue_script( 'kysana-script', get_template_directory_uri() . '/assets/theme.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'kysana_assets' );

function kysana_asset( $path ) {
    return esc_url( get_template_directory_uri() . '/' . ltrim( $path, '/' ) );
}

function kysana_contact_form() {
    if ( 'POST' !== strtoupper( $_SERVER['REQUEST_METHOD'] ?? '' ) || empty( $_POST['kysana_contact'] ) ) {
        return;
    }
    if ( ! isset( $_POST['kysana_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['kysana_nonce'] ) ), 'kysana_contact_action' ) ) {
        return;
    }

    $name    = sanitize_text_field( wp_unslash( $_POST['name'] ?? '' ) );
    $email   = sanitize_email( wp_unslash( $_POST['email'] ?? '' ) );
    $subject = sanitize_text_field( wp_unslash( $_POST['subject'] ?? '' ) );
    $message = sanitize_textarea_field( wp_unslash( $_POST['message'] ?? '' ) );

    if ( $name && is_email( $email ) && $subject && $message ) {
        $body = "Nome: {$name}\nEmail: {$email}\n\n{$message}";
        $sent = wp_mail( get_option( 'admin_email' ), '[Kysana] ' . $subject, $body, array( 'Reply-To: ' . $email ) );
        wp_safe_redirect( add_query_arg( 'mensagem', $sent ? 'enviada' : 'erro', get_permalink() ) );
        exit;
    }
}
add_action( 'template_redirect', 'kysana_contact_form' );
