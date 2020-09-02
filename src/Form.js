import _ from 'lodash';

class MyForm {
    constructor(defaults = null) {
        this.error = {};
        this.defaults = defaults;
        if (this.defaults) {
            Object.assign(this, this.defaults);
        }
    }

    hasError(field) {
        return this.error.hasOwnProperty(field);
    }

    errorOut(field) {
        let b;
        _.forEach(this.error, (sms, key) => {
            if (key === field) {
                b = sms[0];
            }
        });

        return b
    }

    clearAll() {
        return this.error = {}
    }

    clear(field) {
        delete this.error[field]
    }

    any() {
        return _.isEmpty(this.error);
    }

    reset() {
        let fields = Object.keys(this);
        _.forEach(fields, (value) => {
            this[value] = '';
        });

        return this;
    }

}

export default MyForm;
