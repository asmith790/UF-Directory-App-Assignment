/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
Listing.find(
  {name: 'Library West'},
  (err, aListing) => {

    if (err) {
      throw err;
    }

    console.log(aListing);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.find(
     {code: 'CABL'},
     (err,aListing) =>

     if(err){
       throw err;
     }
     console.log(aListing);
     listing.remove(aListing);
   )
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate(
     {name: "Phelps Laboratory"},
     {address: "New Address"},
     (err,aListing) =>

     if (err){
       throw err;
     }
   )
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, (err, alisting) => {

     if(err){
       throw err;
     }
     var i =0;
     for(i; i<alisting.length; i++){
       console.log(alisting[i]);
     }
   }
 )
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
