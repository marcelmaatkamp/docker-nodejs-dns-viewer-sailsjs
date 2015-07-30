/**
 * GeoController
 *
 * @description :: Server-side logic for managing dns
 * @help    :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
 data: function (req, res) {

   History.find()
   // .limit(3)
   // .sort('createdAt desc')
   // .where({ "content.acc":  { $lt: 50000 } })
      .exec(function(err, histos) {
        if(err){
          return next(err)
        } else {
          res.type('application/json');

          var features = [];
          for(var i=0; i<histos.length; i++) {
            if( typeof histos[i].location != 'undefined' ) {
              features.push({ "type": "Feature", "geometry": {
                "type": "Point",
                "coordinates": [
                 histos[i].location.lng,
                 histos[i].location.lat
                ]
              }, "properties": { }});
            }
          }
          res.send({ "type": "FeatureCollection", "features": features });
       }
    });
  },

 index: function (req, res) {
   res.view(); 
 }

};

