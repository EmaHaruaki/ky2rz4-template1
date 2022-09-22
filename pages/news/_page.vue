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
			class="page-template page-template-nosidebar page-template-nosidebar-php page hide-blogname hide-blogdescription no-sidebar has-avatars">
			<div id="page" class="site">
				<div id="content" class="site-content">
					<div id="primary" class="content-area">
						<main id="main" class="site-main">
							<article class="page hentry">

								<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
								<ul class="wp-block-latest-posts has-dates">
									<li v-for="n in response2.list" :key="n.topics_id">
										<div class="news_item_info">
											<time class="wp-block-latest-posts__post-date">{{ n.ymd }}</time>
											<span :style="`background-color: ${n.contents_type_ext_col_01}`">{{
											n.contents_type_nm }}</span>
										</div>
										<nuxt-link :to="`/news/detail/${n.topics_id}`">{{ n.subject }}</nuxt-link>
									</li>
								</ul>

								<nav class="navigation pagination" role="navigation">
									<h2 class="screen-reader-text">投稿ナビゲーション</h2>
									<div class="nav-links">
										<nuxt-link v-if="response2.pageInfo.pageNo != response2.pageInfo.startPageNo"
											class="prev page-numbers" :to="`/news/${response2.pageInfo.pageNo - 1}`">
											&laquo; 前へ</nuxt-link>
										<nuxt-link v-for="i in response2.pageInfo.totalPageCnt" :key="i"
											class='page-numbers' :to="`/news/${i}`"
											:class="{'current':response2.pageInfo.pageNo  === i, }">{{i}}</nuxt-link>
										<nuxt-link v-if="response2.pageInfo.pageNo != response2.pageInfo.endPageNo"
											class="next page-numbers" :to="`/news/${response2.pageInfo.pageNo + 1}`">次へ
											&raquo;</nuxt-link>
									</div>
								</nav>

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
			response: await $axios.$get('/rcms-api/3/content/detail/24'),
			response2: await $axios.$get('/rcms-api/3/news/list',{params:{pageID:params.page}}),
		};
	},
};
</script>
	
