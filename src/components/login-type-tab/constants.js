// import { getLocale } from '~base/global/helpers/locale';

export const loginTypes = {
  EMAIL: 'email',
  PHONE: 'phone',
  WECHAT: 'wechat',
  FACEBOOK: 'facebook',
};

// export const defaultLoginType = getLocale() === 'zh-cn' ? loginTypes.PHONE : loginTypes.EMAIL;

export const defaultLoginFormData = {
  email: '',
  password: '',
  phone: '',
  phoneCode: '',
};

export const loginStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  IDLE: 'idle',
  FETCHING: 'fetching',
};

export const defaultErrorInfo = null;

export const cardModes = {
  PHONE_LOGIN: 'phone_login',
  VALIDATE: 'validate',
};
