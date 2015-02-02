riot.tag('riot-posts', '<h2>Ride</h2> <riot-post each="{ post, i in opts.posts }" post="{ post }"></riot-post>', function(opts) {
})

riot.tag('riot-post', '<div class="{ listing: true }"> <div class="{ listing__item: true }"> {opts.post.departureDate} <br> &rarr; </div> <div class="{ listing__item: true }"> {opts.post.returnDate} <br> &larr; </div> <div class="{ listing__item: true, listing__author: true }"> <img src="{ opts.post.user.avatar }"> </div> </div>', function(opts) {
})
