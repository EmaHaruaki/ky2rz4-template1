<template>
<div>
	<div class="jumbotron site-header" :style="{ backgroundImage: `url(${response2.details.ext_4})` }">
			<div class="jumbotron-overlay">
				<div class="jumbotron-content">
					<div class="subheader">{{response2.details.ext_1}}</div>
					<h2 class="jumbotron-title">{{response2.details.ext_2}}</h2>
				</div><!-- .jumbotron-content -->
			</div><!-- .jumbotron-overlay -->
		</div><!-- .jumbotron -->

	<div data-rsssl=1 class="page-template-default page page-id-1806 page-parent wp-custom-logo hide-blogname hide-blogdescription no-sidebar has-avatars">
		<div id="page" class="site">
			<div id="content" class="site-content">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">
						<article id="post-1806" class="post-1806 page type-page status-publish has-post-thumbnail hentry">
							
							<div class="entry-content">

								<h2>{{response.details.subject}}</h2>
								<div class="news_item_info">
									<time class="wp-block-latest-posts__post-date">{{ response.details.ymd }}</time>
									<span :style="`background-color: ${response.details.contents_type_ext_col_01}`">{{response.details.contents_type_nm }}</span>
								</div>
								<div v-html="response.details.ext_1"></div>
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
	async asyncData({ $axios, params }) {
		return { 
			response: await $axios.$get(`/rcms-api/3/content/detail/${params.slug}`),
			response2: await $axios.$get('/rcms-api/3/content/detail/24'),
		};
	},
};
</script>
