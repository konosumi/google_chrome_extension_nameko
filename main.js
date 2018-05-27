
$(document).ready(function() {
    var namekoImage = "https://raw.githubusercontent.com/konosumi/blog_0194_learning_browser_extension_with_nameko/master/icons/nameko.jpg";

    // 検索ページのロゴ
    var searchLogo = $("a#logo").children('img');
    searchLogo.attr("src", namekoImage);
    searchLogo.attr("srcset", namekoImage);
    searchLogo.attr("width", "60");
    searchLogo.attr("height", "60");

    // トップページのロゴ
    var topHpLogo = $("img#hplogo");
    topHpLogo.attr("src", namekoImage);
    topHpLogo.attr("srcset", namekoImage);
    topHpLogo.attr("width", "80");
    topHpLogo.attr("height", "80");
});


