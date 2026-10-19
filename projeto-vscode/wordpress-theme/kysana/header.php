<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<!doctype html>
<html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo( 'charset' ); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="<?php echo esc_attr( get_bloginfo( 'description' ) ?: 'Kysana — histórias novas para quando e onde quiser.' ); ?>"><?php wp_head(); ?></head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
<header class="site-header"><div class="shell nav-wrap">
<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Kysana, ir para a Home"><img src="<?php echo kysana_asset( 'assets/kysana-logo.png' ); ?>" alt="Logo Kysana: um livro aberto azul com a palavra Kysana"><span class="brand-name">KYSANA</span></a>
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="sr-only">Abrir menu</span><span></span><span></span></button>
<nav id="primary-nav" class="primary-nav" aria-label="Navegação principal">
<?php if ( has_nav_menu( 'primary' ) ) : wp_nav_menu( array( 'theme_location' => 'primary', 'container' => false, 'items_wrap' => '%3$s' ) ); else : ?>
<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a><a href="<?php echo esc_url( home_url( '/produtos/' ) ); ?>">Produtos</a><a href="<?php echo esc_url( home_url( '/identidade-visual/' ) ); ?>">Identidade visual</a><a href="<?php echo esc_url( home_url( '/quem-somos/' ) ); ?>">Quem somos</a><a class="nav-cta" href="<?php echo esc_url( home_url( '/fale-conosco/' ) ); ?>">Fale conosco <span aria-hidden="true">↗</span></a>
<?php endif; ?></nav></div></header>
<main id="conteudo" tabindex="-1">
