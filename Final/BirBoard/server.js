import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

//Log with Morgan
app.use(morgan('dev'));

//accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Static files
app.use(express.static(__dirname + '/dist'));


const imageList = [
	{
		key: 0,
		url: "https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg"
	},
	{
		key: 1,
		url: "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
	},
	{
		key: 2,
		url: "https://cdn.pixabay.com/photo/2015/08/09/13/30/alcedo-atthis-881594_960_720.jpg"
	},
	{
		key: 3,
		url: "https://abcbirds.org/wp-content/uploads/2016/04/Wood-Thrush_Ryan-Sanderson_Help-Protect-Tropical-Forests_Banner-e1461008646479.jpg"
	},
	{
		key: 4,
		url: "http://www.sciencemag.org/sites/default/files/styles/article_main_medium/public/images/ss-bird_honeycreeper.jpg"
	},
	{
		key: 5,
		url: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/A-G/atlantic-puffin-fish-rock.ngsversion.1397239455029.adapt.1900.1.jpg"
	}
];

app.route('/image')
	.get((req, res) => res.json(imageList))
	.post((req, res) => {
		const { url } = req.body;
		imageList.push({
			key: imageList.length,
			url
		});
		res.json({
			success: 1,
			message:'Image Successfully added!'
		});
	});

app.listen(port);

console.log(`listening on port ${port}`);
