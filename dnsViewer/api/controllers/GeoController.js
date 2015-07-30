/**
 * GeoController
 *
 * @description :: Server-side logic for managing dns
 * @help    :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  data: function (req, res) {

   Geo.find()
   // .limit(3)
   // .sort('createdAt desc')
   .where({ "content.acc":  { $lt: 50000 } })
      .exec(function(err, geos) {
        if(err){
          return next(err)
        } else { 
          res.type('application/json');

          var features = [];
          for(var i=0; i<geos.length; i++) { 
            if( typeof geos[i].content.lat != 'undefined' ) {
	      features.push({ "type": "Feature", "geometry": { 
                "type": "Point", 
                "coordinates": [ 
                 geos[i].content.lng, 
                 geos[i].content.lat
                ]
              }, "properties": { 
                "mac": geos[i].measurements
              }});
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

