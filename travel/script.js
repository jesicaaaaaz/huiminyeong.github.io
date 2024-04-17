document.addEventListener('DOMContentLoaded', function() {
  // 获取导航栏链接元素
  var aboutMalaysiaLink = document.querySelector('a[href="#carouselExampleIndicators"]');

  // 监听导航栏链接的点击事件
  aboutMalaysiaLink.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认跳转行为

    // 获取 Section 2 元素
    var section2 = document.querySelector('#carouselExampleIndicators');

    // 使用 scrollIntoView() 方法滚动到 Section 2
    section2.scrollIntoView({ behavior: 'smooth' });
  });
});
