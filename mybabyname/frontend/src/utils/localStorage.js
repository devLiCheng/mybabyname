// key value 存储值
export function setLocalStorage(key, value) {
  if (typeof window === "undefined") {
    return null; // or return a default value
  }
  localStorage.setItem(key, value);
}

// 通过key取值
export function getLocalStorage(key) {
  if (typeof window === "undefined") {
    return null; // or return a default value
  }
  return localStorage.getItem(key);
}

// 通过key删除值
export function removeLocalStorage(key) {
  if (typeof window === "undefined") {
    return null; // or return a default value
  }
  return localStorage.removeItem(key);
}

// 清空所有值
export function clearAllLocalStorage() {
  if (typeof window === "undefined") {
    return null; // or return a default value
  }
  localStorage.clear();
}
