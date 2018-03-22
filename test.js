function createElement(el){
    return document.createElement(el);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/';

function showPosts() {

    fetch(API_ENDPOINT + 'posts/')
        .then(resp => resp.json())
        .then(posts => {posts.map(function (post){
            let li = createElement('li'),
                ul = window.document.getElementById('posts'),
                a = createElement('a');
            a.href = 'post.html?postId=' + post.id;

            a.innerHTML = post.title;

            append(li,a);
            append(ul,li);

        })
        })

        .catch(error => console.log(error));

};

 function showPost(){

     let myArray = location.search.match('([0-9]+)');

         fetch(API_ENDPOINT + 'posts/' + myArray[0])
             .then(resp => resp.json())
             .then(function (post) {
                 let p = createElement('p'),
                     p1 = createElement('p'),
                     ul = window.document.getElementById('post'),
                     comment = createElement('a'),
                     author = createElement('a');
                     br = createElement('BR');

                 author.href = 'author.html?userId=' + post.userId;
                 comment.href = 'comments.html?postId=' + post.id;

                 p.innerHTML = post.title;
                 p1.innerHTML = post.body;
                 comment.innerHTML = 'comments';
                 author.innerHTML = 'author';


                 append(ul, p1);
                 append(ul, p);
                 append(ul, author);
                 append(ul, br);
                 append(ul, comment);

             })

             .catch(error => console.log(error));

}

function showAuthorPosts(){

    let myArray = location.search.match('([0-9]+)');

    fetch(API_ENDPOINT + 'posts/?userId=' + myArray[0])
        .then(resp => resp.json())
        .then(authors => {authors.map(function (author){
            let p = createElement('p'),
                p1 = createElement('p'),
                ul = window.document.getElementById('author'),
                a1 = createElement('h1');

            a1.innerHTML = 'post Id   - ' + author.id;
            p.innerHTML = 'title  ---- ' + author.title;
            p1.innerHTML = 'body -----' +  author.body;

            append(ul, a1);
            append(ul, p);
            append(ul, p1);

        })
        })

        .catch(error => console.log(error));
}

function showPostComments(){

    let myArray = location.search.match('([0-9]+)');

    fetch(API_ENDPOINT + 'comments/?postId=' + myArray[0])
        .then(resp => resp.json())
        .then(comments => {comments.map(function (comment){
            let p = createElement('p'),
                p1 = createElement('p'),
                ul = window.document.getElementById('comment'),
                a1 = createElement('h1');

            a1.innerHTML = 'comment Id   - ' + comment.id;
            p.innerHTML = 'title  ---- ' + comment.title;
            p1.innerHTML = 'body -----' +  comment.body;

            append(ul, a1);
            append(ul, p);
            append(ul, p1);

        })
        })

        .catch(error => console.log(error));

}

