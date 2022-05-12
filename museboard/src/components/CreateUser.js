

// function to create new user data object, and tie that to their session.

// use React state to handle who's logged in.

// NO USER DATA IS STORED IN OUR DATABASE.

// Only replies are stored in db.

// React State parses login phrase, hashes and then reduces the character count.
// Sets that as the url. replies are then dynamically rendered based on their signature.

// replies signatures are dictated by useCurrentUrl

//  Means there's potential overlap for phrases between boards, which could be interesting.

//






// export default function CreateUser (phrase) {
  
  //   React.useState(user, setUser)
  // }
  
  // change context based on login state.
  
  // const CurrentUserContext = React.createContext(defaultValue);
  
import React from 'react';
  
const myPhrase = "howdy"


  
                // const getPassword = async (phrase) => {
                //   const rounds = 5;
                  
                //   bcrypt.hash(phrase, rounds).then(function(hash) {
                //     console.log(hash);
                //     return hash;
                //   })
                // }

                // function hash(string) {
                //   const utf8 = new TextEncoder().encode(string);
                //   return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
                //     const hashArray = Array.from(new Uint8Array(hashBuffer));
                //     const hashHex = hashArray
                //       .map((bytes) => bytes.toString(16).padStart(2, '0'))
                //       .join('');
                //     return hashHex;
                //   });
                // }

                // hash(myPhrase)

                // bcrypt.compare(myPhrase, myHash).then(function(result) {
                //   console.log(result)
                //   return result;
                // });



// welp none of that worked... another crack tomorrow I suppose. maybe bcrypt was the right answer. need to think more. getting reckless. 

