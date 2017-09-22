/**
 * Created by wzq on 2017/5/5.
 */
/**
 * 什么是CSS？
 * 层叠样式表（Cascading style sheets）
 * 多重样式：
 * 如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来
 *
 * <ul>无序HTML列表  Unordered list（无序列表） <ol> ordered list(有序列表) <li> 列表项目 list item
 * display:block - 显示块元素的链接，让整体变为可点击链接区域（不只是文本），它允许我们指定宽度
 */
/*
h3 {
   color:red;
   text-align:left;
   font-size:8px;
}
h3 {
    text-align:right;
    font-size:20px;
}
最终css样式为
h3 {
    color:red;
    text-align:right;
    font-size:20px;
}
*/
/**
 * CSS背景
 * background-color 属性定义了元素的背景颜色.
 * background-image 属性描述了元素的背景图像.
 * background-repeat 如果你不想让图像平铺，你可以使用 background-repeat 属性: background-repeat:no-repeat;
 * background-attachment 背景图像是否固定或者随着页面的其余部分滚动
 * background-position 背景图像与文本显示在同一个位置，为了让页面排版更加合理，不影响文本的阅读，我们可以改变图像的位置。
 */

/**
 * CSS文本格式
 * Margin(外边距) - 清除边框外的区域，外边距是透明的。
 * Border(边框) - 围绕在内边距和内容外的边框。
 * Padding(内边距) - 清除内容周围的区域，内边距是透明的。
 * Content(内容) - 盒子的内容，显示文本和图像
 *
 * 当您指定一个CSS元素的宽度和高度属性时，你只是设置内容区域的宽度和高度，要知道，完全大小的元素，你还必须添加填充，边框和边距。
 * h1 {color:green} h2 {color:green} p {color:green} h1,h2,p{color:green}
 * p {color:blue;text-align:center} .marked{background-color:red} .marked p {color:white;}
 *
 * CSS positioning(定位)
 * position 属性的四个值
 * static 没有定位
 * relative 相对位置  他是参照父级的原始点为原始点，无父级则以BODY的原始点为原始点，配合TRBL进行定位，当父级
 * 内有padding等CSS属性时，当前级的原始点则参照父级内容区的原始点进行定位。
 * fixed    元素的位置相对于浏览器窗口是固定位置 即使窗口是滚动的它也不会移动
 * absolute 绝对位置 他的意思是绝对定位，他是参照浏览器的左上角，配合TOP、RIGHT、BOTTOM、LEFT进行定位
 * 在没有设定TRBL，默认一句父级的坐标原始点为原始点.如果设定TRBL并且父级没有设定position属性，那么当前的
 * absolute则以浏览器左上角点进行定位，位置由TRBL决定
 *
 * 有时我们还需要依靠z-index来设定容器的上下关系，数值越大越在最上面
 *
 *
 * CSS组合选择符
 * 后代选择器（以空格分隔） 后代选择器匹配所有值得元素的后代元素
 * 子元素选择器（以大于号分隔）只能选择作为某元素子元素的元素
 * 相邻兄弟选择器（以加号分隔）可选择紧接在另一个元素后的元素，且二者有相同父元素
 * 普通兄弟选择器（以破折号分隔）普通兄弟选择器选取所有指定元素的相邻兄弟元素
 *
 * CSS 伪元素 ::after 及 content 属性为提示工具创建一个小箭头标志，箭头是由边框组成的
 *
 * display:属性
 * node:此元素不被显示
 * block:此元素显示为块级元素，此元素前后会嗲有换行符
 * inline：默认。此元素会被显示为内联元素，元素前后没有换行符
 * inline-block 行块内元素
 * list-item 此元素会作为列表显示
 * run-in 此元素会根据上下文作为块级元素或内联元素显示
 * table 此元素会作为内联表格来显示
 */