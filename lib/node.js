const { join, extname } = require('path');

const path = require('path');

const fs = require('fs');

const theme = {
  config: {
    atlas_file_url: '/Users/guanlintao/work/生活/日常记录/2020',
    atlas_des_url: '/source/photo/describe.json',
    atlas_des_title: '馒头',
  }
}

let pathName = join(theme.config.atlas_file_url);
let describeConfig = join(theme.config.atlas_des_url);
let allPhoto = fs.readdirSync(pathName);
let formatPhoto = [];
let photos = [];
let desJson = {};

try {
  fs.accessSync(describeConfig, fs.constants.R_OK | fs.constants.W_OK);
  desJson = require(describeConfig);
  if (extname(describeConfig) !== '.json') {
    console.log(`请保证文件格式为JSON - ${describeConfig}`);
    return;
  };
} catch (e) {
  console.log(`图集 - 备注文件: ${ e }`);
}

try {
  if (allPhoto.length) {
    let checkExt = allPhoto
    formatPhoto = checkExt.map((v, index) => {
      return {
        title: desJson[v] ? desJson[v] : theme.config.atlas_des_title,
        src: path.normalize(`${theme.config.atlas_file_url}/${v}`)
      }
    })
  }

} catch (e) {
  console.log(`图集 - ${ e }`);
}
console.log(formatPhoto)
// photos = photos.concat(pagination('photo', formatPhoto, {
//   perPage: theme.config.atlas_page,
//   layout: theme.config.atlas_module || 'atlas',
//   describeImg: '12312312',
//   format: 'page/%d/',
// }));
