function submitData() {

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let number = document.getElementById("input-phonenumber").value
    let subject = document.getElementById("input-select").value
    let message = document.getElementById("input-message").value
    let peringatan="Semua kolom wajib diisi"

    if (name == "") {
        return alert(peringatan)        
    } else if (email == "") {
        return alert("email wajib diisi")
    } else if (number == "") {
        return alert("nomor handphone wajib diisi")
    } else if (subject == "") {
        return alert("subject pilihan wajib diisi")
    } else if (message == "") {
        return alert("message wajib diisi")
    }
    
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(message);

    let emailReceiver="minyaksawitalbarokahi@gmail.com"

    let a=document.createElement("a")
    a.href=`mailto:${emailReceiver}?subject=${subject}&body=Assalammu'alaikum Warahmatullahi Wabarakaatuh, perkenalkan nama saya ${name}, silahkan kontak saya ke email ${email}, dan nomer telepon ${number}, sebelumnya ada yang ingin saya sampaikan terkait ini ${message}`
    a.click()

    let siswa = {
        name,
        email,
        number,
        subject,
        message,
    }

    console.log(siswa)
}
