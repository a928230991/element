## Button 按钮
常用的操作按钮。

### 基础用法

基础用法，注意1.区分主要按钮和默认按钮，2.次要按钮似乎都一样。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">默认按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <el-button type="finished">完成按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>默认按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
  <el-button type="finished" plain>完成按钮</el-button>
</el-row>

<el-row>
  <el-button disabled>默认按钮</el-button>
  <el-button type="primary" disabled>默认按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
  <el-button type="finished" disabled>完成按钮</el-button>
</el-row>



<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>默认按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
  <el-button type="finished" round>完成按钮</el-button>
</el-row>

<el-row>
  <el-button type="secondary">主要按钮</el-button>
  <el-button type="subprimary">次要按钮</el-button>
  <el-button type="secondary" round>主要按钮</el-button>
  <el-button type="subprimary" round>次要按钮</el-button>
</el-row>
```
:::

### narrow按钮

只涉及`medium`和`无size`的button,修改左右padding

:::demo 你可以使用`narrow`属性来定义按钮是否可用。

```html
<el-row>
  <el-button narrow>次要按钮</el-button>
  <el-button type="primary" narrow>默认按钮</el-button>
  <el-button type="success" narrow>成功按钮</el-button>
  <el-button type="info" narrow>信息按钮</el-button>
  <el-button type="warning" narrow>警告按钮</el-button>
  <el-button type="danger" narrow>危险按钮</el-button>
  <el-button type="finished" narrow>完成按钮</el-button>
</el-row>

<el-row>
  <el-button size="medium" narrow>次要按钮</el-button>
  <el-button size="medium" type="primary" narrow>默认按钮</el-button>
  <el-button size="medium" type="success" narrow>成功按钮</el-button>
  <el-button size="medium" type="info" narrow>信息按钮</el-button>
  <el-button size="medium" type="warning" narrow>警告按钮</el-button>
  <el-button size="medium" type="danger" narrow>危险按钮</el-button>
  <el-button size="medium" type="finished" narrow>完成按钮</el-button>
</el-row>

<el-row>
  <el-button narrow disabled>次要按钮</el-button>
  <el-button type="primary" narrow disabled>默认按钮</el-button>
  <el-button type="success" narrow disabled>成功按钮</el-button>
  <el-button type="info" narrow disabled>信息按钮</el-button>
  <el-button type="warning" narrow disabled>警告按钮</el-button>
  <el-button type="danger" narrow disabled>危险按钮</el-button>
  <el-button type="finished" narrow disabled>完成按钮</el-button>
</el-row>
```
:::

### 默认按钮(class="idss-button")

不知道做什么的

:::demo 你可以使用`narrow`属性来定义按钮是否可用。

```html
<el-row>
  <button class="idss-button">默认按钮</button>
  <button size="medium" class="idss-button">默认按钮</button>
  <button size="small" class="idss-button">默认按钮</button>
  <button size="mini" class="idss-button">默认按钮</button>
</el-row>
<el-row>
  <button icon="el-icon-search"  class="idss-button"> 
     <idss-icon-svg name="help"></idss-icon-svg>
  </button>
  <button size="medium" class="idss-button">
     <idss-icon-svg name="help"></idss-icon-svg>
  </button>
  <button size="small" class="idss-button">
     <idss-icon-svg name="help"></idss-icon-svg>
  </button>
  <button size="mini" class="idss-button">
     <idss-icon-svg name="help"></idss-icon-svg>
  </button>
</el-row>


```
:::

### 按钮(type="secondary")

secondary按钮

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <el-button type="secondary">按钮</el-button>
  <el-button type="secondary" size="medium">按钮</el-button>
  <el-button type="secondary" size="small">按钮</el-button>
  <el-button type="secondary" size="mini">按钮</el-button>
</el-row>

<el-row>
  <el-button disabled type="secondary">按钮</el-button>
  <el-button disabled type="secondary" size="medium">按钮</el-button>
  <el-button disabled type="secondary" size="small">按钮</el-button>
  <el-button disabled type="secondary" size="mini">按钮</el-button>
</el-row>
```
:::

### 次要按钮(type="subprimary")

subprimary

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <el-button type="subprimary">按钮</el-button>
  <el-button type="subprimary" size="medium">按钮</el-button>
  <el-button type="subprimary" size="small">按钮</el-button>
  <el-button type="subprimary" size="mini">按钮</el-button>
</el-row>

<el-row>
  <el-button disabled type="subprimary">按钮</el-button>
  <el-button disabled type="subprimary" size="medium">按钮</el-button>
  <el-button disabled type="subprimary" size="small">按钮</el-button>
  <el-button disabled type="subprimary" size="mini">按钮</el-button>
</el-row>
```
:::

### 图标按钮(type="square")

square

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <el-button type="square">
    <i class="el-icon-help"></i>
  </el-button>
  <el-button type="square" size="medium">
    <i class="el-icon-help"></i>
  </el-button>
  <el-button type="square" size="small">
    <i class="el-icon-help"></i>
  </el-button>
  <el-button type="square" size="mini">
    <i class="el-icon-help"></i>
  </el-button>
</el-row>

<el-row>
  <el-button disabled type="square">
    <i class="el-icon-help"></i>
  </el-button>
  <el-button disabled type="square" size="medium">
    <i class="el-icon-help"></i>
  </el-button>
  <el-button disabled type="square" size="small">
    <i class="el-icon-help"></i>
  </el-button>
  <el-button disabled type="square" size="mini">
    <i class="el-icon-help"></i>
  </el-button>
</el-row>
```
:::


### 文字按钮

没有边框和背景色的按钮。

:::demo 文字按钮，支持4种`size`
```html
 <el-row>
  <el-button type="text">文字按钮</el-button>
  <el-button type="text" primary>文字按钮</el-button>
  <el-button type="text" underline>文字按钮</el-button>
 </el-row>

 <el-row>
  <el-button type="text" disabled>文字按钮</el-button>
  <el-button type="text" primary disabled>文字按钮</el-button>
  <el-button type="text" underline disabled>文字按钮</el-button>
 </el-row>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标,同时支持idss-svg-icon。

```html
<el-row>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
</el-row>

<el-row>
  <el-button circle>
    <idss-icon-svg name="help"></idss-icon-svg>
  </el-button>
  <el-button type="primary" circle>
    <idss-icon-svg name="help"></idss-icon-svg>
  </el-button>
  <el-button type="success" circle>
    <idss-icon-svg name="help"></idss-icon-svg>
  </el-button>
  <el-button type="info" circle>
    <idss-icon-svg name="help"></idss-icon-svg>
  </el-button>
  <el-button type="warning" circle>
    <idss-icon-svg name="help"></idss-icon-svg>
  </el-button>
  <el-button type="danger" circle>
    <idss-icon-svg name="help"></idss-icon-svg>
  </el-button>
  <el-button type="finished" circle>
    <idss-icon-svg name="help"></idss-icon-svg>
  </el-button>
</el-row>
<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
  <el-button type="finished" icon="el-icon-delete" circle></el-button>
</el-row>

<el-row>
  <el-button icon="el-icon-search" circle plain></el-button>
  <el-button type="primary" icon="el-icon-edit" circle plain></el-button>
  <el-button type="success" icon="el-icon-check" circle plain></el-button>
  <el-button type="info" icon="el-icon-message" circle plain></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle plain></el-button>
  <el-button type="danger" icon="el-icon-delete" circle plain></el-button>
  <el-button type="finished" icon="el-icon-delete" circle plain></el-button>
</el-row>

<el-row>
  <el-button icon="el-icon-search" circle micro></el-button>
  <el-button type="primary" icon="el-icon-edit" circle micro></el-button>
  <el-button type="success" icon="el-icon-check" circle micro></el-button>
  <el-button type="info" icon="el-icon-message" circle micro></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle micro></el-button>
  <el-button type="danger" icon="el-icon-delete" circle micro></el-button>
  <el-button type="finished" icon="el-icon-delete" circle micro></el-button>
</el-row>
<el-row>
  <el-button icon="el-icon-search" circle plain micro></el-button>
  <el-button type="primary" icon="el-icon-edit" circle plain micro></el-button>
  <el-button type="success" icon="el-icon-check" circle plain micro></el-button>
  <el-button type="info" icon="el-icon-message" circle plain micro></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle plain micro></el-button>
  <el-button type="danger" icon="el-icon-delete" circle plain micro></el-button>
  <el-button type="finished" icon="el-icon-delete" circle plain micro></el-button>
</el-row>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<el-button-group>`标签来嵌套你的按钮。

```html
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<el-button type="primary" :loading="true">加载中</el-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button size="medium">中等按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</el-row>
<el-row>
  <el-button round>默认按钮</el-button>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button size="small" round>小型按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</el-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
