import rs from 'randomstring';

import AuthSchemaModel from '../Models/Auth.model.js';

export const register = async (req, res) => {
    console.log(req.body);

    var List = await AuthSchemaModel.find();
    var l = List.length;
    var _id = l == 0 ? 1 : l + 1;

    var password = rs.generate(10);

    var Details = { ...req.body, "_id": _id, "password": password, "info": Date() };
    try {
        await AuthSchemaModel.create(Details);
        res.status(201).json({ "status": true });
    }
    catch (error) {
        res.status(500).json({ "status": error.message });
    }
};

export const login = async (req, res) => {

    console.log(req.body);

    // try {
    //     await AuthSchemaModel.find(Details);
    //     res.status(201).json({ "status": true });
    // }
    // catch (error) {
    //     res.status(500).json({ "status": error.message });
    // }
};

