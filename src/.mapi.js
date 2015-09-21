'use strict';
/**
 * @module hence-user
 */
import faker from 'faker';
import _isObject from 'lodash/lang/isObject';
import _isFunction from 'lodash/lang/isFunction';
import _extend from 'lodash/object/extend';

let MockAPI = {
  fakeEntry() {
    let comm = faker.commerce;

    return {
      color: comm.color(),
      dept: comm.department(),
      name: comm.productName(),
      price: comm.price(),
      callout: comm.productAdjective(),
      material: comm.productMaterial(),
      category: comm.product(),
      description: faker.lorem.paragraph(),
      photo: faker.image.technics()
    };
  },
  list() {
    let entries = [];

    for (let i = 0; i < 10; i++) {
      entries.push(this.fakeEntry());
    }

    return entries;
  },
  find() {
    let [arg1,arg2] = arguments;

    let query = _isObject(arg1) ? arg1 : {};
    let done = _isFunction(arg1) ? arg1 : arg2;
    let err;

    if (query.id) {
      done(err, this.list()[query.id - 1]);
    } else {
      done(err, this.list());
    }
  }
};

export default MockAPI;
