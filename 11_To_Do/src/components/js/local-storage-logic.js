export class LocalStorage {
  static saveItem(timeStamp, value) {
    localStorage.setItem(timeStamp, JSON.stringify(value));
  }

  static retrieveItem(timeStamp) {
    localStorage.getItem(timeStamp);
  }
}
