var OpenAI = require("openai");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	const openai = new OpenAI();

	async function main() {
	  const completion = await openai.chat.completions.create({
	    messages: [{ role: "system", content: "You are a helpful assistant" }],
	    model: "gpt-3.5-turbo",
	  });

	  console.log(completion.choices[0].message.content);
	}
	main();
	next();
  }, (req, res, next) => {
	console.log(res);
	next();
  }, (req, res) => {

	  res.render('assistant', { message: res.toString() });
  });

module.exports = router;
