
const tweetForm = document.querySelector('#tweetForm');
const tweetList = document.querySelector('#tweetList');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInp = tweetForm.elements.username;
    const tweetInp = tweetForm.elements.tweet;
    addTweet(usernameInp.value, tweetInp.value);
    usernameInp.value = '';
    tweetInp.value = '';
});



const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetList.append(newTweet);
};

const tweetElement = document.querySelectorAll('li')

for (li of tweetElement) {
    li.addEventListener('click', function () {
        li.remove()
    });
}; // This wont work for tweets added by JS after the code runs. We will use event delegation to handle it.

tweetList.addEventListener('click', function(e){
    console.log('CLICK CLOCK!');
    e.target.nodeName === 'LI' && e.target.remove();
})