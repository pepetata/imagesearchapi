Image Search Abstraction Layer

User stories:

I can get the image URLs for a set of images relating to a given search string.
I can paginate through the responses by adding a ?offset=2 parameter to the URL.
I can get a list of the most recently submitted search strings.


How to search an image:

https://imagesearchapi-pepetata.c9users.io/imagesearch/mad%20cat?offset=2


The result is like this

[{"url": "http://2.bp.blogspot.com/-F9Zlve6QRy4/VD0G5aML0OI/AAAAAAAAFfc/AEJBhX6V8cs/s1600/mad%2Bcat.jpg","thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYgyYHmjtp4HHUEoaHOClKFtW8QqlbyESMWhJOVV4pVvBqsng8ZijLL0A"},{"url": "https://i.ytimg.com/vi/tvJMia11QLw/hqdefault.jpg","thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROSSYLXckLQ1GE2n_KYvUR7IOJWIXcxu_t-NcG17axe9uON8JFpW2GLHk"}]


To get a list of the most recently submitted search strings:

https://imagesearchapi-pepetata.c9users.io/lastsearchs



Running on node with Express, Jade and Stylus

Inspired by Flavio Ferreira
