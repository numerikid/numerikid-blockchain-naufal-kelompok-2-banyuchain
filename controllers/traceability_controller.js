const traceability = require("../src/traceability");

const setRoleAndUser = async (req, res) => {
    try {
        console.log("Data diterima di setRoleAndUser:", req.body);
        const { sender, user, roleId, subjectName } = req.body;
        const result = await traceability.setRoleAndUser(sender, user, roleId, subjectName);
        res.send(result);
    } catch (e) {
        console.error('Error saat mengedit role dan user:', e);
        res.status(500).send({ error: e.toString() });
    }
};

const getRoleAndSubject = async (req, res) => {
    try {
        console.log("Data diterima di getRoleAndSubject:", req.query);
        const result = await traceability.getRoleAndSubject(req.query.address);
        res.send(result);
    } catch (e) {
        console.error('Error saat membaca role dan user:', e);
        res.status(500).send({ error: e.toString() });
    }
};

const addBasicTraceData = async (req, res) => {
    try {
        console.log("Data diterima di addBasicTraceData:", req.body);
        const { product_id, process_date, location_name, location_address, src_product_id, product_type, expiry_date } = req.body;
        const result = await traceability.addBasicTraceData(req.user, product_id, process_date, location_name, location_address, src_product_id, product_type, expiry_date);
        res.send(result);
    } catch (e) {
        console.error('Error saat menambahkan data pelacakan dasar:', e);
        res.status(500).send({ error: e.toString() });
    }
};

const getAddBasicTraceData = async (req, res) => {
    try {
        console.log("Data diterima di getAddBasicTraceData:", req.query);
        const result = await traceability.getAddBasicTraceData(req.query.product_id);
        res.send(result);
    } catch (e) {
        console.error('Error saat mendapatkan data tambahan:', e);
        res.status(500).send({ error: e.toString() });
    }
};

const getTraceData = async (req, res) => {
    try {
        console.log("Data diterima di getTraceData:", req.query);
        const result = await traceability.getTraceData(req.query.product_id);
        res.send(result);
    } catch (e) {
        console.error('Error saat mendapatkan data pelacakan:', e);
        res.status(500).send({ error: e.toString() });
    }
};

module.exports = {
    setRoleAndUser,
    getRoleAndSubject,
    addBasicTraceData,
    getAddBasicTraceData,
    getTraceData
};
