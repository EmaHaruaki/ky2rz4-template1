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

	<div data-rsssl=1 class="page-template page-template-nosidebar page-template-nosidebar-php page hide-blogname hide-blogdescription no-sidebar has-avatars">
		<div id="page" class="site">
			<div id="content" class="site-content">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">
						<article class="page hentry">
							
							<div class="entry-content">
								<p>このフォームはデモです。ここからメッセージを送ることはできません。</p>
								<div role="form" class="wpcf7" id="wpcf7-f2324-p1720-o1" lang="ja" dir="ltr">
									<div class="screen-reader-response"></div>
									<form class="wpcf7-form">
										<p><label> お名前 (必須)<br><span class="wpcf7-form-control-wrap your-name">
											<input v-model="nameEntered" type="text" name="your-name" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label></p>
										<p><label> メールアドレス (必須)<br><span class="wpcf7-form-control-wrap your-email">
											<input v-model="emailEntered" type="email" name="your-email" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> </label></p>
										<p><label> 題名<br><span class="wpcf7-form-control-wrap your-subject">
											<input v-model="titleEntered" type="text" name="your-subject" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" /></span> </label></p>
										<p><label> メッセージ本文<br><span class="wpcf7-form-control-wrap your-message">
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
	async asyncData({ $axios }) {
		return { 
			response: await $axios.$get('/rcms-api/3/content/detail/17'),
		};
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
};
</script>
