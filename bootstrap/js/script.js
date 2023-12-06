// function connectMetamask() {
//     if (window.ethereum) {
//         window.ethereum.request({ method: 'eth_requestAccounts' })
//             .then(accounts => {
//                 // Akun pengguna tersedia di sini
//                 console.log('Connected accounts:', accounts);
//                 // Redirect ke dashboard atau halaman lain berdasarkan role
//                 // window.location.href = 'dashboard.html'; // Contoh redirect
//             })
//             .catch(err => {
//                 console.error(err);
//                 alert('Failed to connect MetaMask');
//             });
//     } else {
//         alert('Please install MetaMask!');
//     }
// }

// Fungsi untuk menghubungkan dengan MetaMask
function connectMetamask() {
    if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                // Logika setelah berhasil terhubung
                console.log('Connected accounts:', accounts);
            })
            .catch(err => {
                console.error('Error connecting to MetaMask:', err);
            });
    } else {
        alert('Please install MetaMask!');
    }
}

// Event listener untuk menunggu DOM content dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', (event) => {
    // Menambahkan event listener ke tombol
    document.getElementById('connectButton').addEventListener('click', connectMetamask);

// Fungsi untuk menghubungkan dengan MetaMask ketika mengklik "Register Role"
function handleRoleRegistration(event) {
    event.preventDefault(); // Menghentikan form dari submit secara default

    if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                // Logika setelah berhasil terhubung
                console.log('Connected accounts:', accounts);
                // Anda bisa menambahkan logika untuk menyimpan role disini
                // Misalnya, memanggil smart contract untuk mendaftarkan role

                alert("Role registered successfully for account: " + accounts[0]);
            })
            .catch(err => {
                console.error('Error connecting to MetaMask:', err);
            });
    } else {
        alert('Please install MetaMask!');
    }
}

// Menambahkan event listener ke form
document.getElementById('roleAssignForm').addEventListener('submit', handleRoleRegistration);
});





// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('roleAssignForm');
//     form.addEventListener('submit', async function (e) {
//         e.preventDefault();

//         // Pastikan Metamask tersedia
//         if (typeof window.ethereum === 'undefined') {
//             alert('Please install Metamask!');
//             return;
//         }

//         // Menggunakan Web3.js
//         const web3 = new Web3(window.ethereum);
//         try {
//             // Meminta akses ke akun
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
            
//             const walletAddress = document.getElementById('walletAddress').value;
//             const roleId = document.getElementById('roleId').value;
//             const subjectName = document.getElementById('subjectName').value;

//             // Smart contract method untuk register role
//             const contract = new web3.eth.Contract(contractABI, contractAddress); // Ganti dengan ABI dan alamat kontrak Anda

//             // Mengganti 'registerRoleMethod' dengan nama fungsi smart contract yang sesuai
//             contract.methods.registerRoleMethod(walletAddress, roleId, subjectName)
//                 .send({ from: walletAddress })
//                 .on('transactionHash', function (hash) {
//                     console.log('transactionHash', hash);
//                 })
//                 .on('confirmation', function (confirmationNumber, receipt) {
//                     console.log('confirmation', confirmationNumber);
//                 })
//                 .on('receipt', function (receipt) {
//                     // Transaksi berhasil
//                     console.log('receipt', receipt);
//                     alert('Role registration successful!');
//                 })
//                 .on('error', function (error) {
//                     console.error(error);
//                 });

//         } catch (error) {
//             console.error(error);
//         }
//     });
// });


