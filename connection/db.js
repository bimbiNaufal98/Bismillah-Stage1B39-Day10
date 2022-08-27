//buat folder connection agar isi nya ini dapat menghubungkan ke postgreSQl
const {Pool}= require('pg') //Pool harus hruuf kapital P nya, kalau tidak maka tidak akan kedetect
//kenapa di const {Pool} menggunakan kurung kurawal, krn kita tidak mendeklare variabel, karena di dalam si postgree require ('pg') ini ada yang namanya pool itu,
//require adalah utk aktifitas importnya dari ('pg')
const dbPool= new Pool ({
    database: 'Personal_Web_Bimbim_B39',
    port: 5432,
    user: 'postgres',
    password: 'admin',
}) // karena dbPool ini akan dipakai didalam index.js, maka harus export module.exports=dbPool agar bisa diakses ke index.js nya

module.exports=dbPool