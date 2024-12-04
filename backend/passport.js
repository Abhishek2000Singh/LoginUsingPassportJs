var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GithubStrategy = require('passport-github2').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = Your_Id;
const GOOGLE_CLIENT_SECRET = Your_Code;
const FACEBOOK_CLIENT_ID = Your_Id;
const FACGITHUBEBOOK_CLIENT_SECRET = Your_Code;
const GITHUB_CLIENT_ID = Your_Id;
const GITHUB_CLIENT_SECRET = Your_Code;

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
            //If using mongoDb
            // const user = {
            //     username : profile.displayName,
            //     avatar:profile.photos[0],
            // };

            // user.save()
        }
    )
);

// passport.use(
//     new GithubStrategy(
//         {
//             clientID: GITHUB_CLIENT_ID,
//             clientSecret: GITHUB_CLIENT_SECRET,
//             callbackURL: "/auth/github/callback",
//         },
//         function (accessToken, refreshToken, profile, done) {
//             done(null, profile);
//         }
//     )
// );

// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: FACEBOOK_APP_ID,
//             clientSecret: FACEBOOK_APP_SECRET,
//             callbackURL: "/auth/facebook/callback",
//         },
//         function (accessToken, refreshToken, profile, done) {
//             done(null, profile);
//         }
//     )
// );





passport.serializeUser((user, done) => {
    // Store only the user's ID in the session
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Retrieve the full user object using the ID stored in the session
    User.findById(id, (err, user) => {
        if (err) {
            return done(err);
        }
        done(null, user);
    });
});
