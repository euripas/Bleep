(function() {
	'use strict';

	angular
		.module('supermodular.rss', [
			'ionic',
			'supermodular.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.rss-articles', {
					url: '/rss-articles',
					views: {
						'menuContent': {
							templateUrl: 'scripts/rss/rss-articles.html',
							controller: 'rssArticlesController as vm'
						}
					}
				})
				.state('app.rss-article', {
					url: '/rss-articles/:articleId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/rss/rss-article.html',
							controller: 'rssArticleController as vm'
						}
					}
				});
		});
})();
