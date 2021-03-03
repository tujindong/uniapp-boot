## 效果演示
<table>
<img src="https://huangchunhongzz.gitee.io/imgs/poster/poster_gif.gif" height = 400 div  />
</table>
## 使用方法（主要看pages/hch-poster页面的例子里面有详细说明）

```js

<hchPoster ref="hchPoster" @cancel="canvasCancel" :simpleFlag="simpleFlag" :posterBgFlag="posterBgFlag" :canvasAttr.sync="posterObj" />

import hchPoster from "../../components/hch-poster/hch-poster.vue"

export default {
  components: {
    hchPoster
  }
}

```
## API

### 生成海报的方法调用如
```js

this.$refs.hchPoster.posterShow()

```
### 取消海报
```js
//有$emit方法
this.$emit("cancel", true)
// 所以在组件中用@cancel绑定方法适用
// <hchPoster ref="hchPoster" @cancel="canvasCancel" :simpleFlag="simpleFlag" :posterBgFlag="posterBgFlag" :canvasAttr.sync="posterObj" />
```
## props

| name          | 描述         | 默认值      |   类型 |
| ------------- | ------------|-----------|-----------|
| canvasAttr          | 海报的属性(修改海报的属性值就可以生成自己的海报)         | (见下方canvasAttr:{})  | Object|
| posterBgFlag          | 是否展示海报背景图         | false  | Boolean|
| simpleFlag          | 是否展示简单版海报         | false  | Boolean|

```js
/**
 * @description: 海报版本
 * @param {number} marginTB 上下距离
 * @param {number} marginLR 左右距离
 * @param {number} innerLR 上下内边距
 * @param {number} innerTB 左右内边距
 * @param {number} radius 圆角
 * @param {number} fillColor 海报填充背景色
 * @param {number} posterRatio 海报主图片宽高比例
 * @param {String} posterImgUrl 海报主图片url
 * @param {String} title 海报的title
 * @param {number} titleFontSize 字体大小
 * @param {number} titleLineHeight 标题文本的行高大小
 * @param {String} posterCodeUrl 小程序码图片
 * @param {number} codeWidth 小程序码的占屏幕的百分比
 * @param {number} codeRatio 小程序码的宽度比例
 * @param {number} codeRadius 小程序码的圆角
 * @param {number} codeMT 小程序码的margin-top值
 * @param {String} codeName 小程序码名字
 * @param {number} codeNameMT 小程序码名字的margin-top值
 * @param {String} tips 提示语
 * @param {number} codeML 小程序码左边距离
 * @param {number} desTextMT 纵向文本描述 上边距
 * @param {number} desTextML 纵向文本描述 左边距
 * @author: hch
 */
// 主海报版本
canvasAttr:{
  marginLR: 40,
  marginTB: 40,
  radius: 0.03,
  fillColor: '#ffffff',
  innerLR: 20,
  innerTB: 20,
  posterRatio: 1.3,
  posterImgUrl: "https://huangchunhongzz.gitee.io/imgs/poster/product.png",
  title: "今日上新水果，牛奶草莓，颗粒饱满，每盒 200g",
  titleFontSize: 16,
  titleLineHeight: 25,
  posterCodeUrl: "https://huangchunhongzz.gitee.io/imgs/poster/code.png",
  codeWidth: 0.3,
  codeRatio: 1,
  codeRadius: 0.5,
  codeMT: 20,
  codeName: "记忆之王",
  codeNameMT: 20,
  tips: "长按/扫描识别查看商品",
  posterBgUrl:'https://huangchunhongzz.gitee.io/imgs/poster/poster_bg_3.png',
  codeML:140,
  desTextMT:70,
  desTextML:240,
}
/**
 * @description: 海报版本
 * @param {number} marginTB 上下距离
 * @param {number} marginLR 左右距离
 * @param {number} radius 圆角
 * @param {number} fillColor 海报填充背景色
 * @param {Array} title 海报的title
 * @param {number} titleFontSize 字体大小
 * @param {number} titleLineHeight 标题文本的行高大小
 * @param {String} posterCodeUrl 小程序码图片
 * @param {number} codeWidth 小程序码的占屏幕的百分比
 * @param {number} codeRatio 小程序码的宽度比例
 * @param {number} codeRadius 小程序码的圆角
 * @param {number} codeMT 小程序码的margin-top值
 * @param {number} codeML 小程序码左边距离
 * @param {number} desTextMT 纵向文本描述 上边距
 * @param {number} desTextML 纵向文本描述 左边距
 * @author: hch
 */
// 简单版本
canvasAttr:{//简单版的海报
  marginLR: 40,
  marginTB: 40,
  radius: 0.05,
  fillColor: '#ffffff',
  title: ["夏天的风","带着这清香的果橙味"],
  titleFontSize: 16,
  titleLineHeight: 25,
  posterCodeUrl: "https://huangchunhongzz.gitee.io/imgs/poster/code.png",
  codeWidth: 0.2,
  codeRatio: 1,
  codeRadius: 0.5,
  codeMT: 50,
  posterBgUrl:'https://huangchunhongzz.gitee.io/imgs/poster/poster_bg_3.png',
  codeML:140,
  desTextMT:70,
  desTextML:240,
},
```


## 注意事项

### 1、微信开发平台->服务器域名->uploadFile合法域名要添加上 https://huangchunhongzz.gitee.io 否则没办法下载成功图片

### 2、或者开发板打开调试也是可以下载成功图片

## 开源不易，喜欢的请start
