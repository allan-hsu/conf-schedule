import { helper } from '@ember/component/helper';

export default helper(function anchorize(params /*, named*/) {
  return params[0].toLowerCase().replaceAll('-','').replaceAll('.','').replaceAll(' ', '-');
});
