class baseModel {
  constructor(data, message) {
    if (typeof data === "string") {
      this.message = data;
      data = null;
      this.data = null;
    }
    if (typeof data === "object") {
      this.data = data;
    }
    if (typeof message === "string") {
      this.message = message;
    }
  }
}

class successModel extends baseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = 1;
  }
}
class errorModel extends baseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = -1;
  }
}
