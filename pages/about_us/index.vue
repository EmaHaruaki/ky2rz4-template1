<template>
<div>
	<div class="jumbotron site-header" :style="{ backgroundImage: `url(${response.details.ext_4})` }">
		<div class="jumbotron-overlay">
			<div class="jumbotron-content">
				<div class="subheader">{{response.details.ext_1}}</div>
				<h2 class="jumbotron-title">{{response.details.ext_2}}</h2>
			</div><!-- .jumbotron-content -->
		</div><!-- .jumbotron-overlay -->
	</div><!-- .jumbotron -->

	<div data-rsssl=1 class="page-template-default page page-id-1718 wp-custom-logo hide-blogname hide-blogdescription no-sidebar has-avatars">
		<div id="page" class="site">
			<div id="content" class="site-content">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">
						<article id="post-1718" class="post-1718 page type-page status-publish has-post-thumbnail hentry">
							<div class="entry-content">
								<div v-html="response.details.ext_3"></div>
							</div><!-- .entry-content -->
						</article><!-- #post-## -->
					</main><!-- #main -->
				</div><!-- #primary -->
			</div><!-- #content -->
		</div><!-- #page -->
	</div>
</div>
</template>

<script>
export default {
	async asyncData({ $axios }) {
		return { 
			response: await $axios.$get('/rcms-api/3/content/detail/15'),
		};
	},
};
</script>