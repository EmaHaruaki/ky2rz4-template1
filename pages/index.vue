<template>
<div>
	<div class="home-header site-header" :style="{ backgroundImage: `url(${response.details.ext_1})` }">
        <div class="home-header-overlay">
            <div class="home-header-content">
              <h2 v-html="response.details.ext_2" class="home-header-title"></h2>
              <div v-html="response.details.ext_3" class="home-header-text"></div>
              <div class="home-header-button">
                <nuxt-link v-for="(n, idx) in response.details.ext_4" :key="n.idx" :to="n.url" class="home-header-button">{{n.title}}</nuxt-link>
              </div>
			      </div><!-- .home-header-content -->
        </div><!-- .home-header-overlay -->
    </div><!-- .home-header -->
	
	<div data-rsssl=1 class="home page hide-blogname hide-blogdescription no-sidebar has-avatars">
		<div id="page" class="site">

			<div id="content" class="site-content">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">
						<article class="page hentry">

							<div class="entry-content">
								<p style="text-align:center" class="subheader">{{response.details.ext_5}}</p>
								<h2 style="text-align:center">{{response.details.ext_6}}</h2>
								<div style="height:15px" aria-hidden="true" class="wp-block-spacer"></div>
								<p class="intro">{{response.details.ext_7}}</p>

								<div class="container-wrapper">
									<div class="container-content">
										<p style="text-align:center" class="subheader">{{response.details.ext_8}}</p>
										<h2 style="text-align:center">{{response.details.ext_9}}</h2>
										<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
										<div class="wp-block-columns alignwide has-3-columns">
											<div v-for="(n, idx) in response.details.ext_10" :key="n.idx" class="wp-block-column">
												<h3 style="text-align:center">{{n.ext_10}}</h3>
												<p style="text-align:left">{{n.ext_11}}</p>
												<div class="wp-block-button aligncenter">
													<nuxt-link class="wp-block-button__link has-background has-vivid-cyan-blue-background-color" :to=n.ext_12.url>{{n.ext_12.title}}</nuxt-link>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!--
								<p style="text-align:center" class="subheader">Contact Form</p>
								<h2 style="text-align:center">お問い合わせフォーム</h2>
								<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
								<p>お問い合わせはヘッドレスCMSで管理します。柔軟なパーソナライズ、自動返信といった機能が簡単に利用可能です。</p>
								<div role="form" class="wpcf7" id="wpcf7-f2324-p2365-o1" lang="ja" dir="ltr">
									<div class="screen-reader-response"></div>
									<form class="wpcf7-form">
										<p><label> お名前 (必須)<br /><span class="wpcf7-form-control-wrap your-name">
											<input v-model="nameEntered" type="text" name="your-name" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label></p>
										<p><label> メールアドレス (必須)<br /><span class="wpcf7-form-control-wrap your-email">
											<input v-model="emailEntered" type="email" name="your-email" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> </label></p>
										<p><label> 題名<br /><span class="wpcf7-form-control-wrap your-subject">
											<input v-model="titleEntered" type="text" name="your-subject" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" /></span> </label></p>
										<p><label> メッセージ本文<br /><span class="wpcf7-form-control-wrap your-message">
											<textarea v-model="bodyEntered" name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span> </label></p>
										<p><input @click="handleOnSubmit" type="button" value="送信" class="wpcf7-form-control wpcf7-submit" /></p>
										<div class="wpcf7-response-output wpcf7-display-none"></div>
										
										<div v-if="resultMessage">
										    <p>メッセージ：{{ resultMessage }}</p>
										</div>
										<div v-if="errorMessages">
										    <p v-for="(msg, idx) in errorMessages" :key="idx">
												メッセージ：{{ msg.message }}
											</p>
										</div>
									</form>
								</div>
								-->
								
								<!--
								<div style="height:60px" aria-hidden="true" class="wp-block-spacer"></div>
								<ul class="wp-block-gallery alignfull columns-3 is-cropped">
									<li class="blocks-gallery-item">
										<figure>
											<picture>
												<source media="(max-width: 799px)" srcset="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_119513944.jpeg?with=320&height=240" />
												<source media="(min-width: 800px)" srcset="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_119513944.jpeg?with=1280&height=960" />
												<img src="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_119513944.jpeg" alt="" class="wp-image-2298" width="1280" height="960" loading="lazy"/>
											</picture>
										</figure>
									</li>
									<li class="blocks-gallery-item">
										<figure>
											<picture>
												<source media="(max-width: 799px)" srcset="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_379681331.jpeg?with=320&height=240" />
												<source media="(min-width: 800px)" srcset="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_379681331.jpeg?with=1280&height=960" />
												<img src="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_379681331.jpeg" alt="" class="wp-image-2298" width="1280" height="960" loading="lazy"/>
											</picture>
										</figure>
									</li>
									<li class="blocks-gallery-item">
										<figure>
											<picture>
												<source media="(max-width: 799px)" srcset="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_126091314.jpeg?with=640&height=480" />
												<source media="(min-width: 800px)" srcset="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_126091314.jpeg?with=1280&height=960" />
												<img src="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_126091314.jpeg" alt="" class="wp-image-2298" width="1280" height="960" loading="lazy"/>
											</picture>
										</figure>
									</li>
								</ul>
								-->

								<div style="height:45px" aria-hidden="true" class="wp-block-spacer"></div>
								<p style="text-align:center" class="subheader">NEWS</p>
								<h2 style="text-align:center">最新のお知らせ</h2>
								<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
								<ul class="wp-block-latest-posts has-dates">
									<li v-for="n in response2.list" :key="n.topics_id">
										<div class="news_item_info">
									    <time class="wp-block-latest-posts__post-date">{{ n.ymd }}</time>
										<span :style="`background-color: ${n.contents_type_ext_col_01}`">{{ n.contents_type_nm }}</span>
										</div>
										<nuxt-link :to="`/news/detail/${n.topics_id}`">{{ n.subject }}</nuxt-link>
									</li>
								</ul>

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
	data () {
		return {
			nameEntered: '',
			emailEntered: '',
			titleEntered: '',
			bodyEntered: '',
			resultMessage: null,
			errorMessages: null,
			}
	},
	methods: {
		async handleOnSubmit() {
			try {
				const payload = {
					name: this.nameEntered,
					email: this.emailEntered,
					ext_01: this.titleEntered,
					body: this.bodyEntered
                }
				// post data
				const response = await this.$axios.$post(`/rcms-api/3/form/send `, payload)
				this.resultMessage = response.messages[0]
				this.errorMessages = null
			} catch (error) {
				this.resultMessage = null
				this.errorMessages = error.response.data.errors
			}
		}
	},
	async asyncData({ $axios }) {
		return { 
			response: await $axios.$get('/rcms-api/3/content/detail/4'),
			response2: await $axios.$get('/rcms-api/3/news/list'),
			response3: await $axios.$get('/rcms-api/3/form/detail/3') 
		};
	},
};
</script>