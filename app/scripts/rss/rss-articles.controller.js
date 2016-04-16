(function() {
	'use strict';

	angular
		.module('supermodular.rss')
		.controller('rssArticlesController', rssArticlesController);

	rssArticlesController.$inject = ['$state', 'rssService'];

	/* @ngInject */
	function rssArticlesController($state, rssService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate
		});

		function activate() {
			getArticles();
		}
		activate();

		// ********************************************************************

		function getArticles() {
			rssService.getArticles()
				.then(function(articles) {
					vm.articles = articles;
				});
		}

		function navigate(articleId) {
			$state.go('app.rss-article', { articleId: articleId });
		}
	}
})();
