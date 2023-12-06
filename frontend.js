$(document).ready(function() {
    let contractAddress;
    let data;

    // Fungsi untuk mendaftarkan pengguna
    $('#roleAssignForm').submit(async function(event) {
        event.preventDefault();

        const senderAddress = '0x2B4DA77D9E6Ed3f11d895a2B230Cd55C5D6d6991'; // Alamat pengirim yang sesuai
        const userAddressInput = $('#walletAddress').val();
        const roleId = $('#roleId').val();
        const subjectName = $('#subjectName').val();

        try {
            const result = await $.ajax({
                url: 'http://localhost:8080/trace/setRoleAndUser',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    sender: senderAddress,
                    user: userAddressInput,
                    roleId: roleId,
                    subjectName: subjectName
                })
            });

            contractAddress = result.contract_address;
            data = result.data;

            $('#status').text(`Pengguna dengan role ID ${roleId} berhasil didaftarkan.`).show();
            $('#contractDataForm').show(); // Menampilkan form
            $('#displayContractAddress').val(contractAddress);
            $('#displayData').val(data);

            // Opsi untuk menampilkan tombol konfirmasi MetaMask
            $('#confirmMetaMask').off().on('click', function() {
                confirmMetaMask(senderAddress);
            }).show();

        } catch (error) {
            console.error("Error saat melakukan AJAX call:", error);
            $('#status').text(`Error: ${error.responseJSON ? error.responseJSON.error : error.message}`);
        }
    });

    // Fungsi untuk membuka MetaMask dan melakukan transaksi
    function confirmMetaMask(senderAddress) {
        if (typeof ethereum === 'undefined') {
            alert('MetaMask is not installed!');
            return;
        }

        ethereum.request({ method: 'eth_requestAccounts' })
            .then(function(accounts) {
                ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [{
                        from: accounts[0],
                        to: contractAddress,
                        data: data
                    }],
                })
                .then((txHash) => {
                    console.log('Transaction Hash:', txHash);
                    $('#status').text('Transaction sent. Check MetaMask for confirmation.');
                })
                .catch((err) => {
                    console.error('Error during transaction:', err);
                    $('#status').text(`Error: ${err.message}`);
                });
            })
            .catch((err) => {
                console.error('Error during MetaMask account request:', err);
                $('#status').text(`Error: ${err.message}`);
            });
    }
});

$(document).ready(function() {
    $('#roleLookupForm').submit(function(event) {
        event.preventDefault();
        var walletAddress = $('#lookupWalletAddress').val();

        $.ajax({
            url: 'http://localhost:8080/trace/getRoleAndSubject',
            method: 'GET',
            data: { address: walletAddress },
            success: function(response) {
                $('#roleInfo').html(
                    'Role ID: ' + response.role + '<br>' +
                    'Subject Name: ' + response.subjectName
                );
            },
            error: function(xhr, status, error) {
                $('#roleInfo').html('Error: ' + xhr.responseJSON.error);
            }
        });
    });
});


$(document).ready(function() {
    // Fungsi untuk terhubung ke MetaMask dan mendapatkan alamat pengguna
    $('#connectButton').click(async function() {
        if (typeof ethereum === 'undefined') {
            alert('MetaMask is not installed!');
            return;
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            //Pake useaccount
            const userAddress = accounts[0]; 
            console.log('Connected address:', userAddress);

            // Melakukan AJAX call untuk mendapatkan role pengguna
            $.ajax({
                url: `http://localhost:8080/trace/getRoleAndSubject?address=${userAddress}`,
                method: 'GET',
                success: function(response) {
                    console.log('Role response:', response);

                    // Redirect berdasarkan role
                    switch(response.role) {
                        case 1: // Supplier
                            window.location.href = 'supplier-manag.html';
                            break;
                        case 2: // Producer
                            window.location.href = 'producer-manag.html';
                            break;
                        case 3: // WholeSeller
                            window.location.href = 'wholeseller-manag.html';
                            break;
                        case 4: // SmallSeller
                            window.location.href = 'smallseller-manag.html';
                            break;
                        default:
                            alert('Role tidak dikenali atau Anda tidak memiliki akses.');
                            break;
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Error saat mendapatkan role:', xhr, status, error);
                    alert('Terdapat kesalahan saat mengambil informasi role.');
                }
            });
        } catch (error) {
            console.error('Error saat terhubung dengan MetaMask:', error);
            alert(`Error saat terhubung dengan MetaMask: ${error.message}`);
        }
    });
});

$(document).ready(function() {
    let web3;
    let contract;
    let currentUserAddress;
    const contractAddress = "0x2b18A10E66beB70472F43A91dec78B28b11084AD"; // Alamat smart contract Anda
    
    // Memuat ABI dari file eksternal
    $.getJSON('abi.json', function(data) {
        const abi = data.traceability.abi; // Akses ABI melalui properti 'traceability'
        console.log("ABI loaded", abi);
        initWeb3(abi);
    });

    function initWeb3(abi) {
        if (typeof window.ethereum !== 'undefined') {
            web3 = new Web3(window.ethereum);
            contract = new web3.eth.Contract(abi, contractAddress);
            checkMetaMaskConnection();
        } else {
            alert("MetaMask is not installed. Please install it to use this application.");
        }
    }

    function checkMetaMaskConnection() {
        ethereum.request({ method: 'eth_accounts' }).then(accounts => {
            if (accounts.length > 0) {
                currentUserAddress = accounts[0];
                updateUserInfo();
            } else {
                console.log("MetaMask is not connected");
            }
        }).catch(error => {
            console.error("Error fetching accounts:", error);
        });
    }

    function updateUserInfo() {
        $.ajax({
            url: `http://localhost:8080/trace/getRoleAndSubject?address=${currentUserAddress}`,
            method: 'GET',
            success: function(response) {
                let roleText = getRoleText(response.role.toString());
                $('#userInfo').html(
                    `<tr><td>Wallet Address</td><td>: ${currentUserAddress}</td></tr>` +
                    `<tr><td>Role Sebagai</td><td>: ${roleText}</td></tr>`
                );
            },
            error: function(error) {
                console.error('Error fetching user info:', error);
            }
        });
    }

    function getRoleText(roleId) {
        switch(roleId) {
            case '1': return 'SUPPLIER';
            case '2': return 'PRODUCER';
            case '3': return 'WHOLESELLER';
            case '4': return 'SMALLSELLER';
            default: return 'UNKNOWN';
        }
    }

    $('#addProductForm').submit(function(event) {
        event.preventDefault();

        const productId = $('#productId').val();
        const processDate = new Date($('#processDate').val()).getTime() / 1000;
        const locationName = $('#locationName').val();
        const locationAddress = $('#locationAddress').val();
        const sourceProductId = $('#sourceProductId').val().split(',');

        let productType = '';
        let expiryDate = 0;
        if (window.location.pathname.includes('producer-manag.html')) {
            productType = $('#productType').val();
            expiryDate = new Date($('#expiryDate').val()).getTime() / 1000;
        }

        console.log("Adding product data:", productId, processDate, locationName, locationAddress, sourceProductId, productType, expiryDate);

        let newRow = `<tr class="text-center">
            <td>${productId}</td>
            <td>${new Date(processDate * 1000).toLocaleDateString()}</td>
            <td>${locationName}</td>
            <td>${locationAddress}</td>
            <td>${sourceProductId.join(', ')}</td>`;

        if (window.location.pathname.includes('producer-manag.html')) {
            newRow += `<td>${productType}</td>
            <td>${new Date(expiryDate * 1000).toLocaleDateString()}</td>`;
        }

        newRow += '</tr>';
        $('#productTable tbody').append(newRow);
        $('#TambahData').modal('hide');
    });

    $('#submitData').click(function() {
        let productData = [];
        $('#productTable tbody tr').each(function() {
            let row = $(this).find('td');
            if (row.length > 0) {
                let data = {
                    productId: row.eq(0).text(),
                    processDate: new Date(row.eq(1).text()).getTime() / 1000,
                    locationName: row.eq(2).text(),
                    locationAddress: row.eq(3).text(),
                    sourceProductId: row.eq(4).text().split(', '),
                    productType: row.eq(5).text(),
                    expiryDate: new Date(row.eq(6).text()).getTime() / 1000
                };
                if (window.location.pathname.includes('supplier-manag.html')) {
                    delete data.productType;
                    delete data.expiryDate;
                }
                productData.push(data);
            }
        });

        if (productData.length > 0) {
            productData.forEach(data => {
                contract.methods.addBasicTraceData(
                    data.productId,
                    data.processDate,
                    data.locationName,
                    data.locationAddress,
                    data.sourceProductId,
                    data.productType || '',
                    data.expiryDate || 0
                ).send({ from: currentUserAddress }).then(receipt => {
                    console.log("Transaction receipt:", receipt);
                    $('#blockchainTable tbody').append(
                        `<tr class="text-center">
                            <td>Success</td>
                            <td>${receipt.blockNumber}</td>
                            <td><a href="https://mumbai.polygonscan.com/tx/${receipt.transactionHash}" target="_blank">Hash</a></td>
                            <td>${data.locationName}</td>
                            <td>${new Date().toLocaleString()}</td>
                        </tr>`
                    );
                }).catch(error => {
                    console.error("Transaction error:", error);
                });
            });
        } else {
            alert("Tidak ada data produk untuk dikirim.");
        }
    });

    $('#logoutButton').click(function() {
        window.location.href = 'index.html';
    });

    checkMetaMaskConnection();
});

    // Menambahkan kode untuk inisialisasi Web3 dan kontrak
    let web3;
    let contract;
    const contractAddress = "0x2b18A10E66beB70472F43A91dec78B28b11084AD"; // Ganti dengan alamat kontrak yang benar

    function initWeb3() {
        if (typeof window.ethereum !== 'undefined') {
            web3 = new Web3(window.ethereum);
            $.getJSON('abi.json', function(data) {
                contract = new web3.eth.Contract(data.traceability.abi, contractAddress);
            });
        } else {
            alert("MetaMask is not installed. Please install it to use this application.");
        }
    }
    initWeb3();


        // Function to handle form submission
        $('#dataMappingForm').submit(function(event) {
            event.preventDefault();
            const productId = $('#dataMappingId').val().trim();
    
            if (productId === '') {
                alert('Please enter a product ID.');
                return;
            }
    
            // Call the smart contract function to get data mapping
            contract.methods.getTraceData(productId).call()
            .then(function(result) {
                displayDataMapping(result);
            }).catch(function(error) {
                console.error("Error getting trace data:", error);
                alert("Failed to get trace data.");
            });
        });
    
        // Function to display the data mapping
        function displayDataMapping(data) {
            let htmlContent = `
                <tr><td>Product ID</td><td>${data.product_id}</td></tr>
                <tr><td>User ID</td><td>${data.user_id}</td></tr>
                <tr><td>Location Name</td><td>${data.location_name}</td></tr>
                <tr><td>Location Address</td><td>${data.location_address}</td></tr>
                <tr><td>Product Type</td><td>${data.product_type}</td></tr>
                <tr><td>Expiry Date</td><td>${new Date(data.expiry_date * 1000).toLocaleDateString()}</td></tr>
            `;
            // Assuming that data.src_product_id is an array and should be joined to a string
            if (Array.isArray(data.src_product_id)) {
                const srcProducts = data.src_product_id.join(', ');
                htmlContent += `<tr><td>Source Product IDs</td><td>${srcProducts}</td></tr>`;
            }
            $('#dataMappingInfo').html(htmlContent);
        }

        function redirectToRoleSpecificDashboard() {
            // Periksa apakah MetaMask terpasang
            if (typeof ethereum === 'undefined') {
                alert('MetaMask is not installed!');
                return;
            }
    
            ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    const userAddress = accounts[0];
                    $.ajax({
                        url: `http://localhost:8080/trace/getRoleAndSubject?address=${userAddress}`,
                        method: 'GET',
                        success: function(response) {
                            switch(response.role) {
                                case 1: // Supplier
                                    window.location.href = 'supplier-manag.html';
                                    break;
                                case 2: // Producer
                                    window.location.href = 'producer-manag.html';
                                    break;
                                case 3: // Wholeseller
                                    window.location.href = 'wholeseller-manag.html';
                                    break;
                                case 4: // Smallseller
                                    window.location.href = 'smallseller-manag.html';
                                    break;
                                default:
                                    alert('Role tidak dikenali atau Anda tidak memiliki akses.');
                            }
                        },
                        error: function(error) {
                            console.error('Error saat mendapatkan role:', error);
                            alert('Terdapat kesalahan saat mengambil informasi role.');
                        }
                    });
                })
                .catch(error => {
                    console.error('Error saat terhubung dengan MetaMask:', error);
                    alert(`Error saat terhubung dengan MetaMask: ${error.message}`);
                });
        }
    
        // Event Listener untuk menu Dashboard
        $('#dashboardMenu').click(function() {
            redirectToRoleSpecificDashboard();
        });
        
        

    // Fungsi untuk mendapatkan data keterlacakan produk
    function getTraceData(productId) {
        contract.methods.getTraceData(productId).call()
            .then(function(traceData) {
                displayTraceData(traceData);
            })
            .catch(function(error) {
                console.error("Error fetching trace data:", error);
                alert("Error fetching trace data. Please try again.");
            });
    }

    // Fungsi untuk menampilkan data keterlacakan
    function displayTraceData(traceData) {
        const formattedProcessDate = new Date(traceData.process_date * 1000).toLocaleDateString();
        const formattedExpiryDate = traceData.expiry_date ? new Date(traceData.expiry_date * 1000).toLocaleDateString() : 'N/A';

        const traceInfoHtml = `
            <tr><td>Product ID</td><td>${traceData.product_id}</td></tr>
            <tr><td>User ID</td><td>${traceData.user_id}</td></tr>
            <tr><td>Process Date</td><td>${formattedProcessDate}</td></tr>
            <tr><td>Location Name</td><td>${traceData.location_name}</td></tr>
            <tr><td>Location Address</td><td>${traceData.location_address}</td></tr>
            <tr><td>Product Type</td><td>${traceData.product_type || 'N/A'}</td></tr>
            <tr><td>Expiry Date</td><td>${formattedExpiryDate}</td></tr>`;
        $('#traceDataInfo').html(traceInfoHtml);
    }

    // Event listener untuk form pencarian data keterlacakan
    $('#traceDataForm').submit(function(event) {
        event.preventDefault();
        const productId = $('#traceDataId').val().trim();
        if (productId) {
            getTraceData(productId);
        } else {
            alert("Please enter a valid product ID.");
        }
    });


