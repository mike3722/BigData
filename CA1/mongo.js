// //Not Working
 //db.movies.find({$text:{$search:"Bilbo"},{$not: {$search: 'Gandalf'}}}).pretty();

//C:\WINDOWS\system32>cd C:\Program Files\MongoDB\Server\4.0\bin
//C:\Program Files\MongoDB\Server\4.0\bin>mongod
//C:\WINDOWS\system32>cd C:\Program Files\MongoDB\Server\4.0\bin
//C:\Program Files\MongoDB\Server\4.0\bin>mongo
  // load("D:/College Work/Year 3/SEM-1/Big Data/CA1/mongo.js")
    use biddata_ca1_michael_pisani
	db.createCollection("movies")
	db.movies.insert([
    {
        title: 'Fight Club',
        writer: 'Chuck Palahniuk',
        year: 1999,
        actors: ['Brad Pit', 'Edward Norton']
    },
    {
        title: 'Pulp Fiction',
        writer: 'Quentin Tarantino',
        year: 1994,
        actors: ['Jhon Travolta', 'Uma Thurman']
    },
    {
        title: 'Inglorious Basterds',
        writer: 'Quentin Tarantino',
        year: 2009,
        actors: ['Brad Pit', 'Diane Kruger', 'Eli Roth']
    },
    {
        title: 'the Hobbit: An Unexpected Journey',
        writer: 'J.R.R. Tolkein',
        year: 2012,
        franchise: 'The Hobbit'
    },
    {
        title: 'the Hobbit: The Desolation of Smaug',
        writer: 'J.R.R. Tolkein',
        year: 2013,
        franchise: 'The Hobbit'
    },
    {
        title: 'the Hobbit: The Battle of the Five Armies',
        writer: 'J.R.R. Tolkein',
        year: 2012,
        franchise: 'The Hobbit',
        synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
    },
    {
        title: 'Pee Wee Hermans Big Adventure'
    },
    {
        title: 'Avatar'
    }
])



	 db.movies.find().pretty()


 db.movies.find({writer: "Quentin Tarantino"}).pretty()
 db.movies.find({actors: "Brad Pit"}).pretty()
 db.movies.find({franchise: "The Hobbit"}).pretty()
 db.movies.find({ year:{ $lt: 2000}}) 
 db.movies.find({$or:[{year:{$lt: 2000,$gt: 2010}}]}).pretty()
 db.movies.update( {title: "the Hobbit: An Unexpected Journey"},{$set : {"synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
 db.movies.update( {title: "the Hobbit: The Desolation of Smaug"},{$set : {"synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
 db.movies.update( {title: "Pulp Fiction"},{$addToSet : { "actors": "Samuel L. Jackson"}})
 
 db.movies.createIndex( { synopsis: "text" } )
 db.movies.find({ $text :{ $search:"Bilbo"}}).pretty()
 db.movies.find({$text:{$search:"Gandalf"}}).pretty()
 

 
 db.movies.deleteOne({ title: "Pee Wee Hermans Big Adventure" })
 db.movies.deleteOne({ title: "Avatar" })
 
  use biddata_ca1_michael_pisani
  
  db.createCollection("users")
  db.users.insert([
    {
		username : "GoodGuyGreg", 
		first_name : "Good Guy",
		last_name : "Greg"

    },
	{
		username : "ScumbagSteve ",
		full_name : "",
		first_name : "Scumbag",
		last_name : "Steve"

	}
	])
	
	db.createCollection("posts")
	 db.posts.insert([
    {
		username : "GoodGuyGreg" , 
		title : "Passes out at party " ,
		body : "Wakes up early and cleans house"
    },
	{
		username : "GoodGuyGreg",
		title : "Steals your identity ",
		body : "Raises your credit score"
	},
	{
		username : "GoodGuyGreg",
		title : "Reports a bug in your code",
		body : "Sends you a Pull Request"
	},
	{
		username : "ScumbagSteve",
		title : "Borrows something", 
		body : "Sells it"

	},
	{
		username : "ScumbagSteve", 
		title : "Borrows everything",
		body : "The end"

	},
	{
		username : "ScumbagSteve", 
		title : "Forks your repo on github", 
		body : "Sets to private"

	}
	])
	
	 db.createCollection("comments")
	 db.comments.insert([
	 {
		username : "GoodGuyGreg", 
		comment : "Hope you got a good deal!",
        post : [db.posts.findOne({title : "Borrows something"})._id]
		
	 },
	 {
		username : "GoodGuyGreg", 
		comment : "What's mine is yours!",
		post : [db.posts.findOne({title : "Borrows everything"})._id]

	 },
	 {
		username : "GoodGuyGreg", 
		comment : "Don't violate the licensing agreement!", 
		post : [db.posts.findOne({title : "Forks your repo on github"})._id]

	 },
	 {
		 username : "ScumbagSteve", 
		 comment : "It still isn't clean", 
		 post : [db.posts.findOne({	title : "Passes out at party "})._id]

	 },
	 {
		 username : "ScumbagSteve", 
		 comment : "Denied your PR cause I found a hack",
		 post : [db.posts.findOne({title : "Reports a bug in your code"})._id]

	 } 	 
	  ])
	  
	
	  
		db.users.find().pretty();
		db.posts.find().pretty();
		db.posts.find({username : "GoodGuyGreg"}).pretty();
		db.posts.find({username : "ScumbagSteve"}).pretty();
		db.comments.find().pretty();
		db.comments.find({username : "GoodGuyGreg"}).pretty();
		db.comments.find({username : "ScumbagSteve"}).pretty();
	    db.comments.find({post : [db.posts.findOne({title : "Reports a bug in your code"})._id]})
		
		
		
		
