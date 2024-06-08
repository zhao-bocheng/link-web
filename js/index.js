window.addEventListener('load', function() {
    // 页面载入时返回顶部
    scroll(0, 0);

    var navBar = document.getElementById('link-web-nav');
    var navBarInitTop = navBar.offsetTop;

    var quickAccess = document.querySelector('.aside-quick-access');
    var backToTop = document.querySelector('.back-to-top');
    
    var firstArticle = document.querySelector('.article-box');
    var firstArticleInitTop = firstArticle.offsetTop;

    document.addEventListener('scroll', function() {
        if(pageYOffset > firstArticleInitTop) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }

        if(pageYOffset > navBarInitTop) {
            quickAccess.style.display = 'block';
        } else {
            quickAccess.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        scroll(0, 0);
    });

});
