Hello! Thank you for taking the time to look at this.

To run this app:

1. npm install
2. npm run-script run
3. go to localhost:3000 -> should see hello world
4. To run main function, go to localhost:3000/lightning -> check your terminal for the logs

To Run the tests:

1. (assuming installed) npm test

There are three main sections to this repo:
<pre>
1. ./routes/utils/index.ts
   a. This is where the data is actually handled
   b. I have added into the file at the top a description of how it is handled

2. ./quadkey/index.ts
   a. This is where the library suggested from bing has been converted to ts and used on the strikes

3. ./tests/main.spec.ts
   a. This is where the tests live (I used jest)

</pre>
ANSWERS TO QUESTIONS

What is the time complexity for determining if a strike has occurred for a particular asset?

- On initial call, o(m) over the assets to turn them into a hashmap. Then as the json comes in it is O(1) (assuming no hash collisions) lookup to find the match. O(n) looping time for handling each strike... Total of O(m+n). However, the hashmap does take up more space, so that is O(m) space.

If we put this code into production, but found it too slow, or it needed to scale to many more users or more frequent strikes, what are the first things you would think of to speed it up?

- Maintaining the assets as a hashmap would take O(m) off the runtime of this route (also would reduce space complexity). Pre-processing this data then (with a bunch more assets would become more important as well) would be the first step.
- Looping through each lightning strike is also non-ideal, but in production I would assume that this route would be hit for each strike, so pre-processing of lightning can't actually happen. This said, each strike would have to be visited at least once, so not sure how best to optimize the lightning data.


OTHER THOUGHTS:
1. I checked that there were no duplicate assets at a single quadkey. If there were, the current solution would not work. Instead of a hashmap -> asset relationship, I would need a hashmap -> array. When key matches quadkey, loop through the array of assets and alert for each. This would increase the runtime to at worst O(m) in the lookup stage. Due to each assets having to be looped over for each quadkay match, removing the quadkey from the hashmap instead of adding a visited property to the asset would be the faster approach. 

