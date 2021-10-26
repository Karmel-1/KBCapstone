function main(params, context, done) {
  // Define the secret account.
  var username = "servercode";
  var password = "123ABC";

  // Authenticate a user.
  KiiUser.authenticate(username, password, {
    success: function(theUser) {
        // Handle application scope bucket.
        var appBucket = Kii.bucketWithName("myAppBucket");

        // Handle group scope bucket. (You need groupID parameter)
        var group = KiiGroup.groupWithName(params.groupID);
        var groupBucket = group.bucketWithName("myGroupBucket");

        // Handle user scope bucket.
        // You can use getCurrentUser(). It is same as theUser in this code.
        var user = KiiUser.getCurrentUser();
        var userBucket = user.bucketWithName("myUserBucket");

        done("Success");
    },
    failure: function(theUser, errorString) {
        done("Error authenticating: " + errorString);
    }
  })
}
