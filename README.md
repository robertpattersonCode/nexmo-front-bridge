# nexmo-front-bridge
a bridge to send messages from front to 1 or many nexmo sms numbers... 
becaue nexmo does not have an intergration for front.. or vice versa :( 


using nodejs, express and some really light, simple routing


I deploy mine on heroku -
BUT .. beware, if you keep it 'out of idle' you will run out
of the free dyno at some point.. I found that out the real hard way.. 

clone this repo
cd nexmo-front-bridge

npm install
add your api key + secret to index.js
add your numbers

deploy:
heroku create (appname)
heroku git:remote -a  (appname)
git init
git add .
git commit -m "firsT"
git push heroku master


then in front, set up a mailbox 'custom'
put the heroku url you just created in the outgoing webhook field. 

send sms's !


log into the heroku logs to watch it all happen if you like.. 

enjoy!










