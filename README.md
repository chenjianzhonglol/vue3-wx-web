# 传音 H5 Vue 3 + TypeScript + Vite

## 准备工作

1. 推荐使用 vscode 开发项目，开发前提前安装项目中推荐的插件并启用它们
2. 开启[Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471)

## 开发须知

1. 项目中的 vue、vue-router 等 api 均已经自动导入，开发时不需要额外导入
2. 多语言 useI18n 直接使用全局自动导入的 useI18n 这样使用的时候就会有提示了
3. 项目组件库使用 vant， 默认不需要导入， 项目中直接全局使用就好了。 Toast，Dialog，Notify 和 ImagePreview 组件等组件使用的时候需要在 main.ts 中手动引入样式，如果已经引入就可以忽略。
