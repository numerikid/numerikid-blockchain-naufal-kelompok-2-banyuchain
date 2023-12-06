
# BanyuChain: Blockchain for Mineral Water Traceability

BanyuChain merupakan platform berbasis blockchain yang dirancang untuk meningkatkan transparansi dan traceability dalam rantai pasokan air mineral. Dengan menggunakan teknologi blockchain, BanyuChain memungkinkan konsumen untuk melacak perjalanan air mineral yang dibeli.


## Fitur

a. Register User Role

b. Role Management

c. Supplier Input Data On Chain

d. Producer Input Data On Chain

e. WholeSeller Input Data On Chain

f. SmallSeller Input Data On Chain

g. Trace Data


## Teknologi

**Front End:** HTML, Bootstrap, JavaScript

**Back End:** JavaScript dan Node.JS

**Smart Contract:** Solidity, Remix IDE, Metamask



## Prasyarat

Pastikan Anda telah menginstal Node.js dan npm pada sistem Anda. Anda juga akan membutuhkan ekstensi MetaMask untuk browser sebagai dompet digital.




## Instalasi

Clone repositori menggunakan perintah git clone:

```bash
git clone https://github.com/GreatEdu-SIB-Cycle-6/blockchain-naufal-kelompok-2-banyuchain.git
```

 Masuk ke dalam directory:

```bash
cd blockchain-naufal-kelompok-2-banyuchain
```
Install dependensi Node.js:
```bash
npm install

```

### Deploy Smart Contract

Untuk menjalankan smart contract secara lokal, gunakan Remix IDE untuk mengkompilasi dan mendeploy kontrak ke Ethereum testnet atau mainnet menggunakan perintah berikut:
```bash
npm install -g remixd

```
Setelah itu, kunjungi laman https://remix.ethereum.org/ dan muncul tampilan seperti berikut:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287721668-d3fd6c86-3916-4f2c-8cb3-20099f81642f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTg4MTAsIm5iZiI6MTcwMTY5ODUxMCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjE2NjgtZDNmZDZjODYtMzkxNi00ZjJjLThjYjMtMjAwOTlmODE2NDJmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MDE1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI5MGU5YzgzZTVhZTllNjgyODJhMDgwZjU0YmY3Y2JkNDQ4Yzc0MjhlMWZhZjc2NWY5MTQ5YzRlNDhiODlhNzYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.yMEF_aRMBIJ-84euCFG0ul6-k8pvS0NJzRTbtkbv26E)

Selanjutnya, pada menu **Workspace** pilih menu connect to localhost seperti gambar berikut:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287721745-ac8b3fa5-c512-4205-8827-2b0496fc5742.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTg4MTAsIm5iZiI6MTcwMTY5ODUxMCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjE3NDUtYWM4YjNmYTUtYzUxMi00MjA1LTg4MjctMmIwNDk2ZmM1NzQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MDE1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMzMWFmZmRmNmY1YjFjYTBiMjllMjNjYzJjYzBhYzc0OGNjMDJiM2EzMTdjYThkMDljODUwYTYwMWVjYTdiYjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Y6Z8BeIc3Krk-G8kx28Eop2E_xB3eyxxV6hp2m0BeTs)

Jika integrasi sudah berhasil, maka tampilan remix IDE akan berubah menjadi seperi ini:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287724407-c8c810e2-5e26-430c-82d1-b2dbc2b50f5f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTk1NjAsIm5iZiI6MTcwMTY5OTI2MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjQ0MDctYzhjODEwZTItNWUyNi00MzBjLTgyZDEtYjJkYmMyYjUwZjVmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThjOGU0YTEyOGYyNjc4ZTYxYTQzZTRmNDMxNjZmZmEwNmIxMGE5MmRiMjlmZDhiZmZiZGQwYmEwNjVjNDQxNDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ZRplEeLcz_PqiIeYX6s_H_zwKVKY-kpUdZWAzsjGQ5E)

Sebelum contract di-deploy, terlebih dahulu perlu kita complie. Langkahnya seperti gambar di bawah ini:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287724497-4a53d63d-4196-43b7-95ee-5883cd7f614a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTk1NjAsIm5iZiI6MTcwMTY5OTI2MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjQ0OTctNGE1M2Q2M2QtNDE5Ni00M2I3LTk1ZWUtNTg4M2NkN2Y2MTRhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBlMmNkMDUzZDEzZDJkNmIwNWYzNTFkOWUyZDIwYzVkYjExMjc2MzE4OTQyNWE5ZTNiMDNkYzdhMjUwYjdlZTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Maytf7vnvfPFI8AcsCc9znkTetOKkVtLqEVXGsTubbw)


Kemudian, tentukan environtment yang akan digunakan. Di sini, kita akan menggunakan Metamask:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287724677-abfd4f67-8673-47a6-9a23-a1f2aa57a0ea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTk1NjAsIm5iZiI6MTcwMTY5OTI2MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjQ2NzctYWJmZDRmNjctODY3My00N2E2LTlhMjMtYTFmMmFhNTdhMGVhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ4YjY1Y2QyOTVlODUxYTI5Njk4ZjdlYTFkOGNlOWQwMWM3YWQ1ODExYTczMTk3MDU3ZDhhZGVkMjFlNmU5OTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2LFZZWFg4WHafIyfiLupU5KQhg4IvuCE2C9AMv3uR9g)


Setelah metamask terhubung dan account atau wallet address ditentukan, selanjutnya, klik deploy:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287725124-7e269b75-a855-415f-b8fc-6fe1cf482f3e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTk1NjAsIm5iZiI6MTcwMTY5OTI2MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjUxMjQtN2UyNjliNzUtYTg1NS00MTVmLWI4ZmMtNmZlMWNmNDgyZjNlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRkMjk4NTE1MGYzNTY5ZjY5NTE4ZDAyMjhmMTk0M2U2OWJiYmRlNzE4MTczOGYwYWIzMmExZGUyMTAyYTRlYTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fodvr6fkax9ZqQ5_ZxBj0iF5EsHCjRMvKfuLXCJDnOE)


Berikutnya, akan muncul tampilan atau pop up dari metamask untuk melakukan konfirmasi transaksi:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287725003-cd413115-eace-4953-883d-dff331a0c25e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTk1NjAsIm5iZiI6MTcwMTY5OTI2MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjUwMDMtY2Q0MTMxMTUtZWFjZS00OTUzLTg4M2QtZGZmMzMxYTBjMjVlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM3NjFmNWY0ODZjZmU1YzcyOWEzMWRjY2MyNDNlZjBmZDFhYWRmZGRmNzAzNmY1OTk4NDc2Y2Q2OWZjOWJjMTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5LiyikeFiR7rjA6LW9xfc5YyO__BA_Z4My7tfXT-kII)


Setelah transaksi berhasil atau sukses, kita bisa meng-copy contract address yang dihasilkan untuk mengintegrasikan dengan Back End dan Front End:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287725235-e97c8725-44dd-4b74-9bf8-a5eb5ca39e9b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTk1NjAsIm5iZiI6MTcwMTY5OTI2MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjUyMzUtZTk3Yzg3MjUtNDRkZC00Yjc0LTliZjgtYTVlYjVjYTM5ZTliLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUxYzI1Mzc2OWRmYjVlNTcxZDcxMGIxZmRmMjNjYmExOTY4ZGIyNDVlYmMwMzhlNzdhZWZjNjljYzFmNjc4N2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1bJjlXEKnR2QnC2fDSaA3zOH5kWtplQkKq4He0mTdH8)

Selain contract address, kita juga membutuhkan ABI dari kontak yang telah kita deploy:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287725337-b1a80a01-cfae-40e5-af99-2d9aababf48e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE2OTk1NjAsIm5iZiI6MTcwMTY5OTI2MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MjUzMzctYjFhODBhMDEtY2ZhZS00MGU1LWFmOTktMmQ5YWFiYWJmNDhlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVkZTBlNjVhN2ZiZWQ2NmU2YzhmNDJkY2I5NWI1OTEzMTYyODhlMzk5NGQyYjFlOTgyNGNjMWIwNzhiZTM0MjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.b82zzFOt7mhEPhBVbfAKB0VyJLxOLwJh72rT35V83Rw)


### Menjalankan Aplikasi
Sebelum menjalankan server, buat file **.env** untuk menyimpan contract address dan wallet address yang mendeploy smart contract (optional).

Jalankan server backend menggunakan perintah:

```bash
node server
```
Jika server sudah berjalan, maka akan muncul tampilan seperti berikut:
![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287728971-d974d3b5-9d6f-4314-b2d4-0dc8ddbb71f9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE3MDAzMzUsIm5iZiI6MTcwMTcwMDAzNSwicGF0aCI6Ii82MTc2OTM0Ni8yODc3Mjg5NzEtZDk3NGQzYjUtOWQ2Zi00MzE0LWIyZDQtMGRjOGRkYmI3MWY5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MjcxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2NWUwMGRmZTZjYmQ3YzZkMzIyODBmMGQzNzUxYjQxYWM5Y2NjNTRmZmVmYTE3ZDAzNjhlYzAxYzg5MjU0NDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.cRY4XBoqjHyk7yxcX5CZWiS6leh2M6zi5url8LqaTxs)

Membuka halaman admin dengan memilih file **index.html > Open with Live Server**
![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287729783-9842045f-d5fa-467b-9af0-41c71ec14e19.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE3MDA1MDcsIm5iZiI6MTcwMTcwMDIwNywicGF0aCI6Ii82MTc2OTM0Ni8yODc3Mjk3ODMtOTg0MjA0NWYtZDVmYS00NjdiLTlhZjAtNDFjNzFlYzE0ZTE5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0MzAwN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI0MGE3YjBjMjEzNTZjMDY2YzI5YWEzOTA2Yzc1YmRhZmM0ZTA2MGVjY2MyNWQxNjZhODRmY2M2MTkxMGY5OTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4Lsu5DIvZ0qPxPGBItlkJs4Pg8Bf-6ZhtHTXxiV0owk)

Jika, halaman berhasil dibuka, maka akan muncul tampilan seperti gambar berikut:

![App Screenshot](https://private-user-images.githubusercontent.com/61769346/287735288-a8a8ccca-748a-4b2b-bc19-e76f5de47d36.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE3MDE3NTAsIm5iZiI6MTcwMTcwMTQ1MCwicGF0aCI6Ii82MTc2OTM0Ni8yODc3MzUyODgtYThhOGNjY2EtNzQ4YS00YjJiLWJjMTktZTc2ZjVkZTQ3ZDM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA0VDE0NTA1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJhMDdjNGEzMWMyOWJlMmEyNmIxMjE5N2NjOWZhMWNiNTExZTAxYTE4MTg1OGQxMTJjZjAzMTMxNjI1OTFjYTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.NszzRDKeaZGgsP-SDSlcB0e-LyWdxjdcGXTp8voQrWg)




## kontak
Jika Anda memiliki pertanyaan, saran atau kolaborasi, silakan hubungi: numerikid20@gmail.com




