var OpenAI = require("openai");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

	async function main() {
	  const completion = await openai.chat.completions.create({
	    messages: [{ role: "system", content: req.query.gpt }],
	    model: "gpt-3.5-turbo",
	  });
		return completion.choices[0].message.content;
	}
	(async ()=>{
		res.gptResponse = await main();
		res.render('assistant', { message: res.gptResponse, title: process.env.APP_TITLE });	
	})();	    
});

module.exports = router;
