$(document).ready(function() {
    //variables
    var maxChar = 140;
    var tweetchars;
    var tweet = {};
    $('.tweet-compose').focusin(function() {
        $(this).animate({
            height: "5em"
        }, 500)
        $('#tweet-controls').show(700)
        $('#close-button').show(700)
        $('#tweet-submit').prop('disabled', true)
        $(window).keyup(function() {
            tweetchars = maxChar - $('.tweet-compose').val().length

            tweetchars > 10 ? $('#char-count').css('color', "") : $('#char-count').css('color', "red")
            $('#char-count').text(tweetchars)

            $('.tweet-compose').val().length < 3 || $('.tweet-compose').val().length > maxChar ? $('#tweet-submit').attr('disabled', 'true') : $('#tweet-submit').removeAttr('disabled')
        })
    })

    $('.tweet-compose').focusout(function() {})
    //submit tweet button
    $('#tweet-submit').on('click', function() {
        tweet.name = $('#UN').text();
        tweet.tweet = $('.tweet-compose').val().trim();
        tweet.avatar = $('#myAvatar').prop('src');
        tweet.time = new Date()
        // console.log(tweet.time.getTime())

        var format = '<div class="tweet"><div class="content">' +
            '<img class="avatar" src="' + tweet.avatar + '" />' +
            '<strong class="fullname">' + tweet.name + '</strong>' +
            '<span class="username">@MrGaud</span>' +
            '<p class="tweet-text">' + tweet.tweet + '</p>' +
            '<div class="tweet-actions">' +
            '<ul>' +
            '<li><span class="icon action-reply"></span> Reply</li>' +
            '<li class="magic"><span class="icon action-retweet"></span> Retweet</li>' +
            '<li><span class="icon action-favorite"></span> Favorite</li>' +
            '<li><span class="icon action-more"></span> More</li>' +
            '</ul>' +
            '</div>' +
            '<div class="stats"><div class="retweets">' +
            '<p class="num-retweets">0</p>' +
            '<p>RETWEETS</p>' +
            '</div>' +
            '<div class="favorites">' +
            '<p class="num-favorites">0</p>' +
            '<p>FAVORITES</p>' +
            '</div>' +
            '<div class="users-interact"><div>' +
            '<img src="img/alagoon.jpg" />' +
            '<img src="img/vklimenko.jpg" />' +
            '</div></div>' +
            '<div class="time">' +
            $.format.date(tweet.time, 'h:mm a - dd MMM yy') +
            '</div></div>' +
            '</div></div>';

        $('#stream').prepend(format)
    })
    $('li').hover( function(){
      console.log('suck it');
    })
    //end of document.ready
})
