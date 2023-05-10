export const localStorage = {
  /**
   * 存储localStorage
   * @param {*} name 键
   * @param {*} content 值
   */
  set(key: string, value: any) {
    if (!navigator.cookieEnabled) return;
    if (!key) return;
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
  },

  /**
   * 获取localStorage
   * @param {*} name 键
   */
  get(key: string) {
    if (!navigator.cookieEnabled) return;
    if (!key) return;
    let value = window.localStorage.getItem(key);
    try {
      if (value) {
        value = JSON.parse(value);
      }
    } catch (error) {
      // donothing
    }
    return value;
  },

  /**
   * 删除localStorage
   * @param {*} name 键
   */
  remove(key: string) {
    if (!navigator.cookieEnabled) return;
    if (!key) return;
    window.localStorage.removeItem(key);
  }
};

export const sessionStorage = {
  /**
   * 存储sessionStorage
   * @param {*} name 键
   * @param {*} content 值
   */
  set(key: string, value: any) {
    if (!navigator.cookieEnabled) return;
    if (!key) return;
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(key, value);
  },

  /**
   * 获取sessionStorage
   * @param {*} name 键
   */
  get(key: string) {
    if (!navigator.cookieEnabled) return;
    if (!key) return;
    let value = window.sessionStorage.getItem(key);
    try {
      if (value) {
        value = JSON.parse(value);
      }
    } catch (error) {
      // donothing
    }
    return value;
  },

  /**
   * 删除sessionStorage
   * @param {*} name 键
   */
  remove(key: string) {
    if (!navigator.cookieEnabled) return;
    if (!key) return;
    window.sessionStorage.removeItem(key);
  }
};
