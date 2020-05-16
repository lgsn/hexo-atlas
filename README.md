# hexo-atlas

> hexo 插件
> 增加图集模块（可展示本地文件）

## 安装
```shell
npm install hexo-atlas
```

## 使用方式 在主题配置文件 （_config.yml） 添加以下配置

```
# 图集配置
# 默认文案
# 模板文件地址 (只包含ejs文件)
atlas_module: 'atlas'
# 分页文字
atlas_nav_text:
  page_prev: 上一页
  page_next: 下一页
# 每页图片数量
atlas_page: 30
# 存放图片目录地址 (只支持本地)
atlas_file_url: ''
# 存放图片备注文件地址 (只支持本地)
atlas_des_url: ''
# 默认展示图片备注
atlas_des_title: '馒头啊！！！'
```
## 模板文件 （必要）
### 并且您需要额外的下载 模板 文件 (不然启动会报错)

[ejs文件](https://github.com/lgsn/hexo-atlas/blob/master/module-file/atlas.ejs)
复制该ejs文件到您到  

themes/ **您当前使用到主题文件名** /layout/  

当然您也可以自己常见模板文件，模板文件默认名称为 atlas  （路径和上面地址一样）



[styl文件](https://github.com/lgsn/hexo-atlas/blob/master/module-file/atlas.styl)
复制该文件到您到:  

themes/ **您当前使用到主题文件名** /source/css  

并且在该目录下   
（themes/ **您当前使用到主题文件名** /source/css/style.styl）   
style.styl中引入该文件  
@import "atlas.styl"  
