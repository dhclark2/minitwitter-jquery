# README

- Use jQuery to hide your heart/retweet/etc links on page load (document ready)
- Add a bootstrap btn (maybe btn-primary or other bootstrap style) to each tweet that says "Show Links" (or other text or an icon)
- When clicked it will toggle the visibility of hearts/retweets/etc links


X Our Twitter does not support multiple users (yet)
- Reimplement a single user's Twitter timeline with a Bootstrap / The Iron Yard flare.
X Make the root page be the list of tweets
    [COMPLETELY ignore rewtweets, favorites, replies, images, etc.]
X Tweets should be shown in the order of most currently posted first
X Use scaffold to create a tweet model that includes
    X text (limit it to 140 characters, e.g. reject any Tweet that has more than 140 characters)
    X user_name
    X created_at (NOTE: You get this for free from scaffolds)
X Implement a link to post a new tweet in the nav header. This should allow the user to submit a new tweet

X Fill in some tweets (bonus points if you use learn how to use seeds via db/seeds.rb -- see the rails guides)
X Don't allow a tweet without text or a user (See validations in the Rails Guides)

- If the text of a tweet starts with http:, instead of showing the text as plain text, show it as a link.
(e.g. if the tweet is http://google.com then the tweet text should be http://google.com but be a link to that URL.)
TOP TIP: You'll need an if/else condition in your view, and use link_to
