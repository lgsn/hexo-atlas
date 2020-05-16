'use strict';
const pagination = require('hexo-pagination');

const {join, extname } = require('path');

const fs = require('fs');

// 支持图片格式
const imgFormat = ["png", "jpg", "jpeg", "bmp", "gif"];

// 校验图片格式
function checkImg(src) {
  let extName = extname(src).split('.');
  let check = extName.length ? extName[extName.length - 1] : '';
  if (check && imgFormat.indexOf(check.toLowerCase()) !== -1) return true;
}

module.exports = function(locals) {

  let pathName = join(process.cwd(), this.theme.config.atlas_file_url);
  let describeConfig = join(process.cwd(), this.theme.config.atlas_des_url);
  let allPhoto = fs.readdirSync(pathName);
  let formatPhoto = [];
  let photos = [];

  try {
    let desJson = require(describeConfig);
    if (extname(describeConfig) !== '.json') {
      console.log(`请保证文件格式为JSON - ${describeConfig}`);
      return;
    };

    if (allPhoto.length) {
      let checkExt = allPhoto.filter(v => checkImg(v))
      formatPhoto = checkExt.map((v, index) => {
        return {
          title: desJson[v] ? desJson[v] : this.theme.config.atlas_des_title,
          src: v
        }
      })
    }

  } catch (e) {
    console.log(`图集 - ${ e }`);
  }

  photos = photos.concat(pagination('photo', formatPhoto, {
    perPage: this.theme.config.atlas_page,
    layout: this.theme.config.atlas_module || 'atlas',
    describeImg: '12312312',
    format: 'page/%d/',
  }));

  return photos
};
