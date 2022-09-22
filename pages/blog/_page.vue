<template>
<div>
	<div class="jumbotron site-header" :style="{ backgroundImage: `url(${response_header.details.ext_4})` }">
		<div class="jumbotron-overlay">
			<div class="jumbotron-content">
				<div class="subheader">{{response_header.details.ext_1}}</div>
				<h2 class="jumbotron-title">{{response_header.details.ext_2}}</h2>
			</div><!-- .jumbotron-content -->
		</div><!-- .jumbotron-overlay -->
	</div><!-- .jumbotron -->

	<div data-rsssl=1 class="blog hide-blogname hide-blogdescription three-column has-avatars">
		<div id="page" class="site">
			<div id="content" class="site-content">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">
						<div class="loop-wrapper">

							<div v-for="n in response.list" :key="n.topics_id" class="post-grid">
								<article class="post hentry">
									<header class="entry-header">
										<div class="post-thumbnail">
											<nuxt-link :to="`/blog/detail/${n.topics_id}`">
												<img width="482" height="318" :src="`${n.ext_1.url}?width=482&height=318`" alt=""  />
											</nuxt-link>
										</div><!-- .post-thumbnail -->
										<div class="cat-links">
											<nuxt-link :to="`/blog/category/${n.contents_type}`" rel="category tag">{{n.contents_type_nm}}</nuxt-link>
										</div><!-- .cat-links -->
										<h2 class="entry-title"><nuxt-link :to="`/blog/detail/${n.topics_id}`" rel="bookmark">{{n.subject}}</nuxt-link></h2>
										<div class="entry-meta">
											<span class="posted-on">
												<nuxt-link :to="`/blog/detail/${n.topics_id}`" rel="bookmark"><time class="entry-date published updated" >{{n.ymd}}</time></nuxt-link>
											</span>
										</div><!-- .entry-meta -->
									</header><!-- .entry-header -->
									<div class="entry-summary">
										<p>{{n.ext_2}}</p>
									</div><!-- .entry-summary -->
								</article><!-- #post-## -->
							</div><!-- .post-grid -->

						</div><!-- .loop-wrapper -->

						<nav class="navigation pagination" role="navigation">
							<h2 class="screen-reader-text">投稿ナビゲーション</h2>
							<div class="nav-links">
								<nuxt-link v-if="response.pageInfo.pageNo != response.pageInfo.startPageNo" class="prev page-numbers" :to="`/blog/${response.pageInfo.pageNo - 1}`">&laquo; 前へ</nuxt-link>
								<nuxt-link v-for="i in response.pageInfo.totalPageCnt" :key="i" class='page-numbers' :to="`/blog/${i}`" :class="{'current':response.pageInfo.pageNo  === i, }" >{{i}}</nuxt-link>
								<nuxt-link v-if="response.pageInfo.pageNo != response.pageInfo.endPageNo" class="next page-numbers" :to="`/blog/${response.pageInfo.pageNo + 1}`">次へ &raquo;</nuxt-link>
							</div>
						</nav>
						
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
			response: await $axios.$get('/rcms-api/3/blog/list',{params:{pageID:params.page}}),
			response_header: await $axios.$get('/rcms-api/3/content/detail/16'),
		};
	},
};
</script>



