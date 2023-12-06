const abi_json = require('../abi.json');
const abi = abi_json.traceability
const rpc = process.env.RPC;
const Web3 = require('web3');


async function setRoleAndUser(_sender, _user, _roleId, _subjectName){
    let web3main = new Web3(rpc);
    let loadContract = new web3main.eth.Contract(abi.abi, abi.contract_address);


    let data = await loadContract.methods.setRoleAndUser(
        _user, 
        _roleId, 
        _subjectName
    );


     //calculate gas data
     let finalPrice = 0;
     let [gasUsed, currentGasPriceInNetwork] =await Promise.all([
         await data.estimateGas({from: _sender, value: Web3.utils.toWei(finalPrice.toString())}) + 21000,
         Number(await Web3.utils.fromWei((await web3main.eth.getGasPrice()).toString(), 'gwei'))
     ]);
     currentGasPriceInNetwork = Number(currentGasPriceInNetwork.toFixed(0))
    
     let estimate = {
         "currentGasPriceInNetwork" : [currentGasPriceInNetwork,'gwei'],
         "gasUsedForTransaction"  : [gasUsed, "gas"],
         "gasCostForTransaction"  : [
             await Web3.utils.fromWei(await Web3.utils.toWei((gasUsed * currentGasPriceInNetwork).toString(), 'gwei')),
             'ether',
             `with ${currentGasPriceInNetwork} gwei gas price`
         ]
    }

    return {
        data: data.encodeABI(),
        contract_address: abi.contract_address,
    };
}

async function getRoleAndSubject(_address) {
    let web3main = new Web3(rpc);
    let loadContract = new web3main.eth.Contract(abi.abi, abi.contract_address);

    let result_1 = Number(await loadContract.methods.UserRole(_address).call());
    let result_2 = await loadContract.methods.SubjectName(_address).call();

    return {
        role: result_1,
        subjectName: result_2
    }
}

// Fungsi baru untuk menambahkan Basic Trace Data
async function addBasicTraceData(_sender, _product_id, _process_date, _location_name, _location_address, _src_product_id, _product_type, _expiry_date) {
    const web3main = new Web3(rpc);
    const loadContract = new web3main.eth.Contract(abi.abi, abi.contract_address);

    const data = loadContract.methods.addBasicTraceData(
        _product_id, 
        _process_date, 
        _location_name, 
        _location_address, 
        _src_product_id, 
        _product_type, 
        _expiry_date
    );

    // Hitung estimasi gas
    const [gasUsed, currentGasPriceInNetwork] = await Promise.all([
        data.estimateGas({from: _sender}) + 21000,
        web3main.eth.getGasPrice()
    ]);

    return {
        data: data.encodeABI(),
        gasEstimate: {
            gasUsed,
            currentGasPriceInNetwork: Web3.utils.fromWei(currentGasPriceInNetwork, 'gwei')
        },
        contract_address: abi.contract_address
    };
}

// Fungsi untuk mendapatkan data yang ditambahkan oleh addBasicTraceData
async function getAddBasicTraceData(_product_id) {
    const web3main = new Web3(rpc);
    const loadContract = new web3main.eth.Contract(abi.abi, abi.contract_address);

    const TraceDataMap= await loadContract.methods.TraceDataMap(_product_id).call();

    // Mengembalikan hanya bagian objek dari output
    return {
        user_id: TraceDataMap.user_id,
        user_address: TraceDataMap.user_address,
        product_id: TraceDataMap.product_id,
        process_date: TraceDataMap.process_date,
        location_name: TraceDataMap.location_name,
        location_address: TraceDataMap.location_address,
        product_type: TraceDataMap.product_type,
        expiry_date: TraceDataMap.expiry_date
    };
}

// Fungsi baru untuk mendapatkan Trace Data
async function getTraceData(_product_id) {
    const web3main = new Web3(rpc);
    const loadContract = new web3main.eth.Contract(abi.abi, abi.contract_address);

    const traceData = await loadContract.methods.getTraceData(_product_id).call();

    // Mengembalikan hanya bagian objek dari output
    return {
        user_id: traceData.user_id,
        user_address: traceData.user_address,
        product_id: traceData.product_id,
        process_date: traceData.process_date,
        location_name: traceData.location_name,
        location_address: traceData.location_address,
        src_product_id: traceData.src_product_id,
        product_type: traceData.product_type,
        expiry_date: traceData.expiry_date
    };
}

module.exports = {
    setRoleAndUser,
    getRoleAndSubject,
    addBasicTraceData,
    getAddBasicTraceData,
    getTraceData
};