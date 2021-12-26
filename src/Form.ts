import _ from "lodash";

interface ErrorType {
  [name: string]: string;
}



interface WithV {
  [key: string]: any;
}

class MyForm implements WithV {
  [k: string]: any;
  public error: ErrorType;
  public defaults: ErrorType | null;
  constructor(defaults = null) {
    this.error = {};
    this.defaults = defaults;
    if (this.defaults) {
      Object.assign(this, this.defaults);
    }
  }

  hasError(field: string) {
    return this.error.hasOwnProperty(field);
  }

  errorOut(field: string) {
    let b;
    _.forEach(this.error, (sms, key: string) => {
      if (key === field) {
        b = sms[0];
      }
    });

    return b;
  }

  clearAll() {
    return (this.error = {});
  }

  clear(field: string) {
    delete this.error[field];
  }

  any() {
    return _.isEmpty(this.error);
  }

  reset() {
    let fields = Object.keys(this);

    // fields.forEach((field) => (this[field] = ""));
    _.forEach(fields, (value) => {
      this[value] = "";
    });

    return this;
  }
}

export default MyForm;
