<template>
	<div>
		<div data-rsssl=1
			class="archive category hide-blogname hide-blogdescription has-sidebar has-avatars">
			<div id="page" class="site">
				<header id="masthead">
					<!--
				<div class="top-bar">
					<div class="top-bar-content">
						<ul class="top-bar-main">
							<li class="top-bar-main-phone">03-1234-XXXX</li>
							<li class="top-bar-main-contact"><nuxt-link to="/contact/">お問い合わせ{{response_homeheader}}</nuxt-link></li>
							<li class="top-bar-main-access"><nuxt-link to="/contact/">アクセス</nuxt-link></li>
						</ul>
						<nav class="header-social-link social-link-menu">
							<div class="menu-social-container">
								<ul id="menu-social" class="menu">
									<li id="" class="menu-item   ">
										<a href="https://twitter.com/wordpress"><span class="screen-reader-text">Twitter</span></a>
									</li>
									<li id="" class="menu-item   ">
										<a href="https://www.facebook.com/WordPress/"><span class="screen-reader-text">Facebook</span></a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				-->

					<div class="main-header main-header-original"
						:class="{ 'main-header-clone main-header-clone-show': scrollY > 200, 'drawer-opened':active01 }">
						<div class="main-header-content">
							<div class="site-branding">
								<div class="site-logo">
									<nuxt-link to="/" rel="home">
										<img alt="デモサイト"
											src="https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_442660225-2.png?width=800&height=160"
											width="250" height="50" />
									</nuxt-link>
								</div>
								<h1 class="site-title">
									<nuxt-link to="/" rel="home">デモサイト</nuxt-link>
								</h1>
								<div class="site-description">高速・高機能・高セキュリティ それJamStackで実現できます。</div>
							</div><!-- .site-branding -->
							<nav class="main-navigation">
								<div class="menu-demo-container">
									<ul id="menu-demo" class="menu">
										<li class="menu-item page_item"
											:class="{'current-menu-item current_page_item':$route.path === path_home}">
											<nuxt-link to="/">ホーム</nuxt-link>
										</li>
										<li class="menu-item menu-item-has-children"
											:class="{'current-menu-item current_page_item':$route.path === path_service}">
											<nuxt-link to="/service">サービス</nuxt-link>
											<ul class="sub-menu">
												<li class="menu-item  ">
													<nuxt-link to="/service#1">機能紹介</nuxt-link>
												</li>
											</ul>
										</li>
										<li class="menu-item menu-item-has-children"
											:class="{'current-menu-item current_page_item':$route.path === path_aboutus}">
											<nuxt-link to="/about_us">企業情報</nuxt-link>
											<ul class="sub-menu">
												<li class="menu-item  ">
													<nuxt-link to="/about_us#1">会社概要</nuxt-link>
												</li>
												<li class="menu-item  ">
													<nuxt-link to="/about_us#2">代表者メッセージ</nuxt-link>
												</li>
											</ul>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_news}">
											<nuxt-link to="/news">お知らせ</nuxt-link>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_contact}">
											<nuxt-link to="/contact">お問い合わせ</nuxt-link>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_blog}">
											<nuxt-link to="/blog">ブログ</nuxt-link>
										</li>
									</ul>
								</div>
							</nav><!-- .main-navigation -->
							<button class="drawer-hamburger" @click='active01=!active01'>
								<span class="screen-reader-text">メニュー</span>
								<span class="drawer-hamburger-icon"></span>
							</button>
						</div><!-- .main-header-content -->
						<div class="drawer-overlay"></div>
						<div class="drawer-navigation">
							<div class="drawer-navigation-content">
								<nav class="main-navigation">
									<div class="menu-demo-container">
										<ul id="menu-demo-1" class="menu">
											<li @click="closemenu"
												class="menu-item page_item"
												:class="{'current-menu-item current_page_item':$route.path === path_home}">
												<nuxt-link to="/">ホーム</nuxt-link>
											</li>
											<li>
												<div @click="closemenu"
													class="menu-item menu-item-has-children"
													:class="{'current-menu-item current_page_item':$route.path === path_service}">
													<nuxt-link to="/service">サービス</nuxt-link>
												</div>
												<button class="dropdown-toggle" :class="{'toggled-on':toggle01 }"
													:aria-expanded="toggle01 ? 'true':'false'"
													@click='toggle01=!toggle01'>
													<span class="screen-reader-text">子メニュー開閉</span>
												</button>
												<ul class="sub-menu" :class="{'toggled-on':toggle01 }">
													<li @click="closemenu"
														class="menu-item">
														<nuxt-link to="/service#1">機能紹介</nuxt-link>
													</li>
												</ul>
											</li>
											<li>
												<div @click="closemenu"
													class="menu-item menu-item-has-children"
													:class="{'current-menu-item current_page_item':$route.path === path_aboutus}">
													<nuxt-link to="/about_us">企業情報</nuxt-link>
												</div>
												<button class="dropdown-toggle" :class="{'toggled-on':toggle02 }"
													:aria-expanded="toggle02 ? 'true':'false'"
													@click='toggle02=!toggle02'>
													<span class="screen-reader-text">子メニュー開閉</span>
												</button>
												<ul class="sub-menu" :class="{'toggled-on':toggle02 }">
													<li @click="closemenu"
														class="menu-item">
														<nuxt-link to="/about_us#1">会社概要</nuxt-link>
													</li>
													<li @click="closemenu"
														class="menu-item">
														<nuxt-link to="/about_us#2">代表者メッセージ</nuxt-link>
													</li>
												</ul>
											</li>
											<li @click="closemenu"
												class="menu-item"
												:class="{'current-menu-item current_page_item':$route.path === path_news}">
												<nuxt-link to="/news">お知らせ</nuxt-link>
											</li>
											<li @click="closemenu"
												class="menu-item"
												:class="{'current-menu-item current_page_item':$route.path === path_contact}">
												<nuxt-link to="/contact">お問い合わせ</nuxt-link>
											</li>
											<li @click="closemenu"
												class="menu-item"
												:class="{'current-menu-item current_page_item':$route.path === path_blog}">
												<nuxt-link to="/blog">ブログ</nuxt-link>
											</li>
										</ul>
									</div>
								</nav><!-- .main-navigation -->
								<nav class="header-social-link social-link-menu">
									<div class="menu-social-container">
										<ul id="menu-social-1" class="menu">
											<li class="menu-item">
												<a href="https://twitter.com/wordpress"><span
														class="screen-reader-text">Twitter</span></a>
											</li>
											<li class="menu-item">
												<a href="https://www.facebook.com/WordPress/"><span
														class="screen-reader-text">Facebook</span></a>
											</li>
										</ul>
									</div>
								</nav><!-- .header-social-link -->
							</div><!-- .drawer-navigation-content -->
						</div><!-- .drawer-navigation -->
					</div><!-- .main-header -->
				</header>
				<div v-show="buttonActive" :class="{ 'back-to-top': scrollY > 300 }" @click="returnTop"></div>
			</div>
		</div>
		<Nuxt />

		<footer id="colophon" class="site-footer">
			<div id="supplementary" class="footer-widget-area" role="complementary">
				<div class="footer-widget-content">
					<div class="footer-widget-wrapper">
						<div class="footer-widget-1 footer-widget widget-area">
							<aside id="text-2" class="widget widget_text">
								<h2 class="widget-title">Footer</h2>
								<div class="textwidget">
									<p>ここにフッター文面やリンクを設定します。</p>
								</div>
							</aside>
						</div><!-- .footer-widget-1 -->
						<div class="footer-widget-2 footer-widget widget-area">
							<aside id="nav_menu-2" class="widget widget_nav_menu">
								<h2 class="widget-title">Menu</h2>
								<div class="menu-footer-container">
									<ul id="menu-footer" class="menu">
										<li class="menu-item page_item"
											:class="{'current-menu-item current_page_item':$route.path === path_home}">
											<nuxt-link to="/">ホーム</nuxt-link>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_service}">
											<nuxt-link to="/service">サービス</nuxt-link>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_aboutus}">
											<nuxt-link to="/about_us">企業情報</nuxt-link>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_news}">
											<nuxt-link to="/news">お知らせ</nuxt-link>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_contact}">
											<nuxt-link to="/contact">お問い合わせ</nuxt-link>
										</li>
										<li class="menu-item"
											:class="{'current-menu-item current_page_item':$route.path === path_blog}">
											<nuxt-link to="/blog">ブログ</nuxt-link>
										</li>
									</ul>
								</div>
							</aside>
						</div><!-- .footer-widget-2 -->
						<div class="footer-widget-3 footer-widget widget-area">
							<aside id="nav_menu-3" class="widget widget_nav_menu">
								<h2 class="widget-title">Get in touch</h2>
								<div class="menu-social-container">
									<ul id="menu-social-2" class="menu">
										<li class="menu-item">
											<a href="https://twitter.com/wordpress">Twitter</a>
										</li>
										<li class="menu-item">
											<a href="https://www.facebook.com/WordPress/">Facebook</a>
										</li>
									</ul>
								</div>
							</aside>
						</div><!-- .footer-widget-3 -->
					</div><!-- .footer-widget-wrapper -->
				</div><!-- .footer-widget-content -->
			</div><!-- #supplementary -->
			<div class="site-bottom">
				<div class="site-bottom-content">
					<div class="footer-menu">
						<nav class="footer-navigation">
							<div class="menu-footer-container">
								<ul id="menu-footer-1" class="menu">
									<li class="menu-item page_item"
										:class="{'current-menu-item current_page_item':$route.path === path_home}">
										<nuxt-link to="/">ホーム</nuxt-link>
									</li>
									<li class="menu-item"
										:class="{'current-menu-item current_page_item':$route.path === path_service}">
										<nuxt-link to="/service">サービス</nuxt-link>
									</li>
									<li class="menu-item"
										:class="{'current-menu-item current_page_item':$route.path === path_aboutus}">
										<nuxt-link to="/about_us">企業情報</nuxt-link>
									</li>
									<li class="menu-item"
										:class="{'current-menu-item current_page_item':$route.path === path_news}">
										<nuxt-link to="/news">お知らせ</nuxt-link>
									</li>
									<li class="menu-item">
										<nuxt-link to="/careers">採用情報</nuxt-link>
									</li>
									<li class="menu-item"
										:class="{'current-menu-item current_page_item':$route.path === path_contact}">
										<nuxt-link to="/contact">お問い合わせ</nuxt-link>
									</li>
									<li class="menu-item"
										:class="{'current-menu-item current_page_item':$route.path === path_blog}">
										<nuxt-link to="/blog">ブログ</nuxt-link>
									</li>
								</ul>
							</div>
						</nav><!-- .footer-navigation -->
						<nav class="footer-social-link social-link-menu">
							<div class="menu-social-container">
								<ul id="menu-social-3" class="menu">
									<li class="menu-item">
										<a href="https://twitter.com/wordpress"><span
												class="screen-reader-text">Twitter</span></a>
									</li>
									<li class="menu-item">
										<a href="https://www.facebook.com/WordPress/"><span
												class="screen-reader-text">Facebook</span></a>
									</li>
								</ul>
							</div>
						</nav><!-- .footer-social-link -->
					</div><!-- .footer-menu -->
					<div class="site-info">
						<div class="site-copyright">2022 <nuxt-link to="/" rel="home">デモサイト</nuxt-link>
						</div><!-- .site-copyright -->
					</div><!-- .site-info -->
				</div><!-- .site-bottom-content -->
			</div><!-- .site-bottom -->
		</footer><!-- #colophon -->

		<div v-show="buttonActive" :class="{ 'back-to-top': scrollY > 300 }" @click="returnTop"></div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			// 座標を指定
			scrollY: 0,
			buttonActive: false,
			top: 0,
			active01: false,
			toggle01: false,
			toggle02: false,
			path_home: "/",
			path_contact: "/contact",
			path_blog: "/blog",
			path_service: "/service",
			path_aboutus: "/about_us",
			path_news: "/news",
			response_homeheader: null
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			this.scrollY = window.scrollY
			if (300 <= this.scrollY) {
				this.buttonActive = true
			} else {
				this.buttonActive = false
			}
		},
		returnTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		},
		closemenu() {
			this.active01 = false,
				this.toggle01 = false,
				this.toggle02 = false
		}
	},
}
</script>

<style>
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}

a,
.subheader {
	color: #4693f5;
}

a:hover {
	color: #639af6;
}

a.home-header-button-main {
	background-color: #4693f5;
}

a.home-header-button-main:hover {
	background-color: #639af6;
}

code,
kbd,
tt,
var,
th,
pre,
.top-bar,
.author-profile,
.pagination .current,
.page-links .page-numbers,
.tagcloud a,
.widget_calendar tbody td a,
.container-wrapper,
.site-bottom {
	background-color: #f4f5f6;
}

.jumbotron {
	background-image: url("https://ky2rz4.g.kuroco-img.app/files/user/header_img/AdobeStock_300415457.jpeg");
}

.home-header-content {
	text-align: left;
}

@media screen and (min-width: 980px) {
	.footer-widget-1 {
		width: 49.98%;
	}

	.footer-widget-2 {
		width: 24.99%;
	}

	.footer-widget-3 {
		width: 24.99%;
	}

	.footer-widget-4 {
		width: 0%;
	}

	.footer-widget-5 {
		width: 0%;
	}

	.footer-widget-6 {
		width: 0%;
	}
}

@media screen and (max-width: 460px) {
	.home-header-title br {
		display: none;
	}
}
</style>