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

		<div data-rsssl=1
			class="page-template-default page page-id-1806 page-parent wp-custom-logo hide-blogname hide-blogdescription no-sidebar has-avatars">
			<div id="page" class="site">
				<div id="content" class="site-content">
					<div id="primary" class="content-area">
						<main id="main" class="site-main">
							<article id="post-1806"
								class="post-1806 page type-page status-publish has-post-thumbnail hentry">

								<div>
									<div v-for="n in response_list.list" :key="n.topics_id" class="wp-block-columns alignwide">
										<div class="service-column">
											<figure class="wp-block-image">
												<img width="840" height="560" :src="`${n.ext_1}?width=840&height=560`" alt="">
											</figure>
										</div>

										<div class="service-column">
											<h3 class="service-title">{{n.ext_2}}</h3>
											<p v-html="n.ext_3"></p>
											<div class="wp-block-button">
												<a class="wp-block-button__link has-text-color has-vivid-cyan-blue-background-color has-background" rel="noopener" :href="n.ext_4.url" target="_blank">{{n.ext_4.title}}</a>
											</div>
										</div>
									</div>
								</div>

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
			response: await $axios.$get('/rcms-api/3/content/detail/5'),
			response_list: await $axios.$get('/rcms-api/3/service/list'),
		};
	},
};
</script>
