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
	let btuid = req.params.btuid;
	let matcode = req.params.matcode;

	//get BTU object
	let crops = [];
	crops.push(matcode.toString().substr(0, 4));
	let btuObject = await streamer.fetchOne('btu', btuid, 'GFPCL', crops);

	let prevBtuObject = await streamer.fetchOne(
		'btu',
		btuObject.oneDown[0],
		'GFPCL',
		crops
	);

	let journeyObject = [
		...prevBtuObject.transfers.reverse(),
		...btuObject.transfers,
	];

	journeyObject = journeyObject.map(async (x) => {
		let locObject = await streamer.fetchOne(
			'location',
			x.fromLoc,
			'GFPCL',
			crops
		);
		let fromCheckpoint = locObject.checkpoint;

		locObject = await streamer.fetchOne('location', x.toLoc, 'GFPCL', crops);
		let toCheckpoint = locObject.checkpoint;
		return {
			fromLoc: x.fromLoc,
			fromCheckpoint: fromCheckpoint,
			toLoc: x.toLoc,
			toCheckpoint: toCheckpoint,
			date: x.date,
		};
	});

	let journey = await Promise.all(journeyObject)
		.then((e) => e)
		.catch((e) => e);

	//enhance this logic to handle recursive tracing until oneDown is null

	return res.status(200).json(journey);
};

exports.knowYourMoney = async (req, res) => {
	res.status(200).send('DEVELOPMENT IN PROGRESS');
};
