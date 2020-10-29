### CommonsChunkPlugin

**CommonsChunkPlugin** 用于抽取模块间公共依赖处理。 `4.0+ 被移除`

1 无公共抽取

```js
const config = {
  entry: {
    page1: './src/page1',
    page2: './src/page2'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
}

```
![step1]('./assest/step1.png')

2 抽取公共模块

```js
const config = {
  entry: {
    page1: './src/page1',
    page2: './src/page2'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: '[name].js'
    })
  ]
}
```
![step2]('./assest/step2.png')



