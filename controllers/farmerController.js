const streamer = require('../utils/streamer');

exports.knowYourConsumer = async (req, res) => {
	let originid = req.params.originid;
	let cropid = req.params.cropid;
	//get origin object
	let originObject = await streamer.fetchOne('origin', originid, 'GFPCL', [
		cropid,
	]);

	res.status(200).send('DEVELOPMENT IN PROGRESS');
};

exports.knowYourHarvest = async (req, res) => {
	let originid = req.params.originid;
	let cropid = req.params.cropid;
	//get origin object
	let originObject = await streamer.fetchOne('origin', originid, 'GFPCL', [
		cropid,
	]);

	//find all BTUs with this origin
	let btuObjects = await streamer.fetchAll('btu', 'GFPCL', [cropid]);
	btuObjects = btuObjects.filter(
		(i) => i.oneDown == null && i.origin == originObject.originCode
	);

	btuObjects = btuObjects.map((i) => {
		return {
			harvestID: i.btuCode,
			productionCost: i.productionCost,
			acceptedProduction: i.totalWeight,
			totalValue: i.totalValue,
			unitValue: i.unitValue,
		};
	});

	return res.status(200).json(btuObjects);
};

exports.knowYourChannel = async (req, res) => {
	let originid = req.params.originid;
	let cropid = req.params.cropid;
	//get origin object
	let originObject = await streamer.fetchOne('origin', originid, 'GFPCL', [
		cropid,
	]);

	//find all BTUs with this origin
	let btuObjects = await streamer.fetchAll('btu', 'GFPCL', [cropid]);
	btuInwardObjects = btuObjects.filter(
		(i) => i.oneDown == null && i.origin == originObject.originCode
	);

	btuInwardObjects = btuInwardObjects.map((i) => {
		return {
			harvestID: i.btuCode,
			fromLoc: i.transfers[0].fromLoc,
			toLoc: i.transfers[0].toLoc,
			date: i.transfers[0].date,
			totalWeight: i.totalWeight,
		};
	});

	return res.status(200).json(btuInwardObjects);
};

exports.knowYourMarket = async (req, res) => {
	res.status(200).send('DEVELOPMENT IN PROGRESS');
};
