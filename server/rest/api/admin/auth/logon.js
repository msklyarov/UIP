import {isAdmin} from '../../../../strategies/autentification.js';

const logon = async (req, res) => {
    const {login, password} = req.body;
    return res.json({success: isAdmin(login, password)});
};

export default logon;
