// 设置 rem 函数
function setRem() {
  // 获取页面宽度
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  // 得到html的Dom元素
  const htmlDom = document.documentElement;
  const remUnit = htmlWidth / 10 + 'px';

  // 设置根元素字体大小
  htmlDom.style.setProperty('font-size', remUnit, 'important');
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.addEventListener('resize', setRem, false);

window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    setRem();
  }
});

export {};
