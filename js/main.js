// TruthTrace 官网 —— 通用交互脚本
(function () {
  // 移动端导航折叠
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // 高亮当前导航项（基于路径）
  var path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === '') path = 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && (href === 'index.html' || href === './'))) {
      a.classList.add('active');
    }
  });

  // 页脚年份
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
