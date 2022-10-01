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

		<div data-rsssl=1 class="page hide-blogname hide-blogdescription no-sidebar has-avatars">
			<div id="page" class="site">
				<div id="content" class="site-content">
					<div id="primary" class="content-area">
						<main id="main" class="site-main">
							<article class="page hentry">

								<div class="l-content-inner">
									<div class="content-box">
										<div class="content-box-inner">

											<section class="job-section">
												<div class="job-section-heading">
													<h2 class="job-section-heading__hero" id="sales" style="text-align: center;">現在募集中のポジション</h2>
												</div>

												<article v-for="n in response_list.list" :key="n.topics_id" class="job-article">
													<h3 class="job-article__title">
														<div class="job-article__h3text">{{n.subject}}</div>
														<nuxt-link :to="`/careers/${n.topics_id}`" class="wp-block-button__link has-background has-vivid-cyan-blue-background-color">詳細を見る</nuxt-link>
												    </h3>
													<div class="job-article__content">
														<dl class="job-article__list">
															<dt class="job-box-content__title">給与</dt>
															<dd v-html="n.ext_3" class="job-article__text"></dd>
														</dl>
														<dl class="job-article__list">
															<dt class="job-box-content__title">雇用形態</dt>
															<dd class="job-article__text">{{n.ext_2}}</dd>
														</dl>
														<dl class="job-article__list">
															<dt class="job-box-content__title">勤務地</dt>
															<dd v-html="n.ext_4" class="job-article__text"></dd>
														</dl>
														<dl class="job-article__list">
															<dt class="job-box-content__title">概要</dt>
															<dd v-html="n.ext_5" class="job-article__text"></dd>
														</dl>
													</div>
												</article>

											</section>
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
			response: await $axios.$get('/rcms-api/3/content/detail/27'),
			response_list: await $axios.$get('/rcms-api/3/job/list'),
		};
	},
};
</script>
