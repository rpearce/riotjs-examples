riot.tag('posts', '<post each="{ post, i in opts.posts }" post="{ post }"></post>', function(opts) {
})

riot.tag('post', '<div class="{ listing: true }"> <div class="{ listing__item: true }"> {post.departureDate} <br> &rarr; </div> <div class="{ listing__item: true }"> {post.returnDate} <br> &larr; </div> <div class="{ listing__item: true, listing__author: true }"> <img src="{ post.user.avatar }"> </div> </div>', function(opts) {
  this.post = opts.post
  this.user = opts.post.user
})
