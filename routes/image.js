var OpenAI = require("openai");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

	async function main() {
		const response = await openai.images.generate({
  			model: "dall-e-3",
  			prompt: req.query.gpt,
  			n: 1,
  			size: "1024x1024",
		});

		return response.data[0].url;

	}
	(async ()=>{
		res.gptResponse = await main();
		res.render('image', {imageUrl: res.gptResponse, title: process.env.APP_TITLE });
	})();
});

module.exports = router;
