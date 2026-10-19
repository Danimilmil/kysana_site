<?php get_header(); ?>
<section class="page-content"><div class="shell"><p class="eyebrow">Kysana</p><h1><?php bloginfo( 'name' ); ?></h1><?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?><article class="card"><h2><?php the_title(); ?></h2><?php the_content(); ?></article><?php endwhile; endif; ?></div></section>
<?php get_footer(); ?>
