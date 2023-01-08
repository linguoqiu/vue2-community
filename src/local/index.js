import { Validator } from 'vee-validate';

/*
 * https://vee-validate.logaretm.com/v2/guide/localization.html#using-the-dictionary-api
*/
const dictionary = {
  'zh-CN': {
    messages: {
      required: (field) => `请输入${field}`,
      email: () => '请输入正确的邮箱格式',
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号',
    },
  },
};

Validator.localize(dictionary);
