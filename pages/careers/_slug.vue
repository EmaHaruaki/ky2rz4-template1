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
									<div class="job-box">
										<div class="job-box-inner">
											<div class="job-box-heading">
												<h2 class="job-box-heading__main" style="text-align: center;">{{res_detail.details.subject}}</h2>
											</div>
											<div class="job-box-content">
												<dl class="job-box-content__list">
													<dt class="job-box-content__title">職種</dt>
													<dd class="job-box-content__text">
														<p>{{res_detail.details.ext_1}}</p>
													</dd>
												</dl>
												<dl class="job-box-content__list">
													<dt class="job-box-content__title">雇用形態</dt>
													<dd class="job-box-content__text">
														<p>{{res_detail.details.ext_2}}</p>
													</dd>
												</dl>
												<dl v-for="(n,index) in res_detail.details.ext_6" :key="index" class="job-box-content__list">
													<dt class="job-box-content__title">{{n.ext_6}}</dt>
													<dd v-html="n.ext_7" class="job-box-content__text"></dd>
												</dl>

											</div>
										</div>

										<div class="job_detail_btn">
											<nuxt-link to="/contact/" class="wp-block-button__link has-background has-vivid-cyan-blue-background-color">お問い合わせ</nuxt-link>
											<nuxt-link to="/careers/" class="wp-block-button__link has-background has-vivid-cyan-blue-background-color">一覧に戻る</nuxt-link>
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
	async asyncData({ $axios, params }) {
		return {
			response: await $axios.$get('/rcms-api/3/content/detail/27'),
			res_detail: await $axios.$get(`/rcms-api/3/content/detail/${params.slug}`),
		};
	},
};
</script>
