'use strict'

let logObj = {
    requestsByCat: [],
    requestsBySource: [],
};

const getModelWithProxy = (model) => {
    return new Proxy(model, {
        get: function(target, property) {
          switch (property) {
            case ('getListSourcesByCategory'): 
              return function () {
                logObj.requestsByCat.push({
                  category: arguments[0],
                  time: Date.now()
                });
                console.log('Logs of requests: ', logObj);
                return target[ property ].apply( this, arguments );
              }
            case ('getArticlesBySourceId'): 
              return function () {
                logObj.requestsBySource.push({
                  category: arguments[0],
                  time: Date.now()
                });
                console.log('Logs of requests: ', logObj);
                return target[ property ].apply( this, arguments );
              }
          };
          return target[ property ];
        }
      });
};

export {
    getModelWithProxy,
};

