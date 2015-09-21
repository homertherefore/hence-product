'use strict';
/**
 * @module hence-product
 */

import Hence from 'hence-component-framework';
import API from './.mapi';

/**
 * HenceProduct Component
 * @constructor
 */
let HenceProduct = Hence.Schema({
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  is: 'hence-product',
  properties: {},

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   * Determine the action and query passed in to handle the request and provide whatever state data is required along.
   * Executed by the ```render()``` function
   *
   * @private
   */
    _executeQuery(done) {
    try {
      let {action, query} = this;

      switch (action) {
        case 'get':
          API.find(query, (err, entry) => {
            if (err) {
              // handle error
            }

            return done(err, entry);
          });

          break;
        case 'list':
          API.find((err, entries) => {
            if (err) {
              // handle error
            }

            return done(err, entries);
          });

          break;
      }
    } catch (e) {
      console.error(`${this.is}._executeQuery::failure`, e);
      done(e);
    }
  }
});

export default HenceProduct;
