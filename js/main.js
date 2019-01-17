var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/et9xEgms4es:APA91bEtbPC-DJAsbKimRVd1esl6QtlNF-rcBtx_nyRlJ6o7bT3E3VA7_xiHOj2lrwtihVUchoby2J4sotw2-gKMZzFaGtIqTBGVb6wL5cn5m6vgOC4qOgxWuFpJpQtHuX_YbMPOhIeN",
    "keys": {
        "p256dh": "BJ7BepgmissnDCk5AJn3hoUeWW35ZHxTVis/LJSp1YVcgh6voM5LFz95H4vLs/AQYxedOXxyK25KWTjZJ14Q2/w=", 
        "auth": "32SMV8Lq+yGUjxC7wUnYmg=="
    }
};
var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: 'AIzaSyClwQpZU6rn6sLFgU4MIVFI7___50VWsks',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);