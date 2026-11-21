exports.render = 
function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    // Variables
    var myname = 'Layla Jenkins';
    var title = 'The MEAN Stack';
    var definitions = [
        { name: 'MongoDB', define: 'The database that stores data in a flexible JSON-like document, also known as NoSQL database' },
        { name: 'Express', define: 'The web application framework for Node.js for handling requests, managing routes, and interacts with MongoDB, also known as the back-end framework' },
        { name: 'Angular', define: 'The front-end framework to build interact, reponsive, and dynamic UIs for single-page web applications' },
        { name: 'Node.js', define: 'The JavaScript runtime environment for server-side code, which runs the JavaScript code outside of the browser' }        
    ];

    res.render('index', { 
        myname: myname,
        title: title,
        definitions: definitions
     });
};