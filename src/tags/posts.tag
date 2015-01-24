<posts>
  <post each={ post, i in opts.posts } post={ post }></post>
</post>

<post>
  <div class={ listing: true }>
    <div class={ listing__item: true }>
      {post.departureDate}
      <br>
      &rarr;
    </div>
    <div class={ listing__item: true }>
      {post.returnDate}
      <br>
      &larr;
    </div>
    <div class={ listing__item: true, listing__author: true }>
      <img src={ post.user.avatar }>
    </div>
  </div>

  //<ul>
  //  <li each={ location, i in post.locations }>
  //    {location}
  //  </li>
  //</ul>

  this.post = opts.post
  this.user = opts.post.user
</post>
