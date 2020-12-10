const streamer = require('../utils/streamer');

exports.knowYourFarmer = async (req, res) => {
	let btuid = req.params.btuid;
	let matcode = req.params.matcode;

	//get BTU object
	let crops = [];
	crops.push(matcode.toString().substr(0, 4));
	let btuObject = await streamer.fetchOne('btu', btuid, 'GFPCL', crops);

	let originObject = await streamer.fetchOne(
		'origin',
		btuObject.origin,
		'GFPCL',
		crops
	);

	let farmerObject = await streamer.fetchOne(
		'farmer',
		originObject.farmerCode,
		'GFPCL',
		crops
	);

	return res.status(200).json({ ...farmerObject, ...originObject });
};

exports.knowYourFood = async (req, res) => {
	let btuid = req.params.btuid;
	let matcode = req.params.matcode;

	//get BTU object
	let crops = [];
	crops.push(matcode.toString().substr(0, 4));
	let btuObject = await streamer.fetchOne('btu', btuid, 'GFPCL', crops);
	let skuObject = await streamer.fetchOne(
		'sku',
		btuObject.skuCode,
		'GFPCL',
		crops
	);
	return res
		.status(200)
		.json({ mfgDate: btuObject.createdDate, expiry: skuObject.expDays });
};

exports.knowYourJourney = async (req, res) => {
	res.status(200).send('DEVELOPMENT IN PROGRESS');
};

exports.knowYourMoney = async (req, res) => {
	res.status(200).send('DEVELOPMENT IN PROGRESS');
};
