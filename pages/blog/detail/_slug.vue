<template>
<div>
	<div class="site-header"></div>

	<div data-rsssl=1 class="single hide-blogname hide-blogdescription has-sidebar has-avatars">
		<div id="page" class="site">
			<div id="content" class="site-content">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">

						<article class="post hentry">	
							
							<header class="entry-header">
								<div class="cat-links"><nuxt-link :to="`/blog/category/${res_detail.details.contents_type}`" rel="category tag">{{res_detail.details.contents_type_nm}}</nuxt-link>
								</div><!-- .cat-links -->
								<h1 class="entry-title">{{res_detail.details.subject}}</h1>
								<div class="entry-meta">
									<span class="posted-on">
										<nuxt-link :to="`/blog/detail/${$route.params.slug}`" rel="bookmark">
											<time class="entry-date published updated">{{res_detail.details.ymd}}</time>
										</nuxt-link>
									</span>
								</div><!-- .entry-meta -->
								<div class="post-thumbnail"><img width="840" height="560" :src="`${res_detail.details.ext_1.url}?width=840&height=560`" class="attachment-post-thumbnail size-post-thumbnail" alt="" /></div>
							</header><!-- .entry-header -->
							
							<div class="entry-content">
								<div v-html="res_detail.details.ext_3"></div>
							</div><!-- .entry-content -->
							
						</article><!-- #post-## -->

						<nav class="navigation post-navigation">
							<h2 class="screen-reader-text">投稿ナビゲーション</h2>
							<div class="nav-links">
								<div v-if="res_prev_next.list[1].topics_id == $route.params.slug" class="nav-previous">
									<div class="post-nav-title">前の投稿</div>
									<nuxt-link :to="`/blog/detail/${res_prev_next.list[0].topics_id}`" rel="prev">{{res_prev_next.list[0].subject}}</nuxt-link>
								</div>
								<div v-if="res_prev_next.list[0].topics_id == $route.params.slug" class="nav-next">
									<div class="post-nav-title">次の投稿</div>
									<nuxt-link :to="`/blog/detail/${res_prev_next.list[1].topics_id}`" rel="next">{{res_prev_next.list[1].subject}}</nuxt-link>
								</div>
								<div v-else-if="res_prev_next.list[1].topics_id == $route.params.slug && res_prev_next.list.length >2" class="nav-next">
									<div class="post-nav-title">次の投稿</div>
									<nuxt-link :to="`/blog/detail/${res_prev_next.list[2].topics_id}`" rel="next">{{res_prev_next.list[2].subject}}</nuxt-link>
								</div>
							</div><!-- .nav-links -->
						</nav><!-- .post-navigation -->
					
					</main><!-- #main -->
				</div><!-- #primary -->
				
				<div id="secondary" class="sidebar-area" role="complementary">
					<div class="normal-sidebar widget-area">
						<aside class="widget widget_recent_posts">
							<h2 class="widget-title">最近の投稿</h2>
							<ul>
								<li v-for="n in res_list.list" :key="n.topics_id">
									<nuxt-link :to="`/blog/detail/${n.topics_id}`">
										<div class="recent-posts-thumbnail">
											<img width="80" height="60" :src="`${n.ext_1.url}?width=80&height=60`" alt="" />
										</div><!-- .recent-posts-thumbnail -->
										<div class="recent-posts-text">
											<span class="post-title">{{n.subject}}</span>
											<span class="post-date">{{n.ymd}}</span>
										</div><!-- .recent-posts-text -->
									</nuxt-link>
								</li>
							</ul>
						</aside>
						
						<aside class="widget widget_categories">
							<h2 class="widget-title">カテゴリー</h2>
							<ul>
								<li v-for="n in res_category.list" :key="n.topics_category_id" class="cat-item cat-item-2">
									<nuxt-link :to="`/blog/category/${n.topics_category_id}`" >{{n.category_nm}}</nuxt-link>
								</li>
							</ul>
						</aside>

						<aside id="tag_cloud-2" class="widget widget_tag_cloud">
							<h2 class="widget-title">タグ</h2>
							<div class="tagcloud">
								<nuxt-link v-for="n in res_tag.list" :key="n.tag_id" :to="`/blog/tag/${n.tag_id}`" class="tag-cloud-link tag-link-4 tag-link-position-1" >{{n.tag_nm}}</nuxt-link>
							</div>
						</aside>

<!--						
						<aside id="search-2" class="widget widget_search">
							<form role="search" method="get" class="search-form" action="https://ky2rz4.g.kuroco-front.app/businesspress/">
								<label>
									<span class="screen-reader-text">検索:</span>
									<input type="search" class="search-field" placeholder="検索 &hellip;" value="" name="s" />
								</label>
								<input type="submit" class="search-submit" value="検索" />
							</form>
						</aside>
-->
					</div><!-- .normal-sidebar -->
<!--					
					<div id="sticky-sidebar" class="sticky-sidebar widget-area">
						<aside id="businesspress_featured_posts-2" class="widget widget_businesspress_featured_posts">
							<h2 class="widget-title">注目の投稿</h2>
							<a href="https://ky2rz4.g.kuroco-front.app/businesspress/blog/2019/01/25/design-is-not-just-what-it-looks-like-and-feels-like-design-is-how-it-works/" rel="bookmark" class="featured-widget-entry"		 style="background-image: url('https://ky2rz4.g.kuroco-front.app/businesspress/wp-content/uploads/sites/3/2019/01/photo-1420547625303-0894752c1ffa-482x318.jpg')">
							    <div class="featured-widget-entry-overlay">
								    <div class="featured-widget-entry-content">
								    	<h3 class="featured-widget-entry-title">デザインとは単にどう見えるかやどう感じるかではない。どう機能するかだ。</h3>
									    <div class="featured-widget-entry-date">2019年1月25日</div>
								    </div>
							    </div>
							</a>
							<a href="https://ky2rz4.g.kuroco-front.app/businesspress/blog/2019/01/25/the-life-of-a-designer-is-a-life-of-fight-fight-against-the-ugliness/" rel="bookmark" class="featured-widget-entry"		 style="background-image: url('https://ky2rz4.g.kuroco-front.app/businesspress/wp-content/uploads/sites/3/2019/01/photo-1433840688634-c05a545c2594-482x318.jpg')">
							    <div class="featured-widget-entry-overlay">
									<div class="featured-widget-entry-content">
										<h3 class="featured-widget-entry-title">デザイナーの人生は戦いである。醜さとの戦い。</h3>
										<div class="featured-widget-entry-date">2019年1月25日</div>
									</div>
								</div>
							</a>
							<a href="https://ky2rz4.g.kuroco-front.app/businesspress/blog/2019/01/25/if-you-can-design-one-thing-you-can-design-everything/" rel="bookmark" class="featured-widget-entry"		 style="background-image: url('https://ky2rz4.g.kuroco-front.app/businesspress/wp-content/uploads/sites/3/2019/01/photo-1444853323897-09621e4d4f99-482x318.jpg')">
							    <div class="featured-widget-entry-overlay">
									<div class="featured-widget-entry-content">
										<h3 class="featured-widget-entry-title">もしあなたがひとつデザインできるなら、全てをデザインできる。</h3>
										<div class="featured-widget-entry-date">2019年1月25日</div>
									</div>
								</div>
							</a>
							<a href="https://ky2rz4.g.kuroco-front.app/businesspress/blog/2019/01/25/simple-is-good/" rel="bookmark" class="featured-widget-entry"		 style="background-image: url('https://ky2rz4.g.kuroco-front.app/businesspress/wp-content/uploads/sites/3/2019/01/photo-1446817852323-048fe2d5f61a-482x318.jpg')">
							    <div class="featured-widget-entry-overlay">
									<div class="featured-widget-entry-content">
										<h3 class="featured-widget-entry-title">シンプルは良い。</h3>
										<div class="featured-widget-entry-date">2019年1月25日</div>
									</div>
								</div>
							</a>
						</aside>
					</div>
				-->
				</div><!-- #secondary -->
			
			</div><!-- #content -->
		</div><!-- #page -->
	</div>
</div>
</template>

<script>
export default {
	async asyncData({ $axios, params }) {
		return { 
			res_list: await $axios.$get('/rcms-api/3/blog/list',{params:{cnt:5}}),
			res_prev_next: await $axios.$get('/rcms-api/3/blog/list',{params:{cnt:1, central_id:params.slug}}),
			res_category: await $axios.$get('/rcms-api/3/category/list'),
			res_tag: await $axios.$get('/rcms-api/3/tag/list'),
			res_detail: await $axios.$get(`/rcms-api/3/content/detail/${params.slug}`),
		};
	},
};
</script>
