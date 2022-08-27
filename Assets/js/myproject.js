let myProject=[]

function submitData(event) {
    event.preventDefault()
    //event.preventDefault ini agar saat kita post blog, tidak me refresh lagi

    let projectName=document.getElementById("input-project-name").value
    let startDate=new Date(document.getElementById("input-start-date").value)
    let endDate=new Date(document.getElementById("input-end-date").value)
    let description=document.getElementById("input-description").value
    let technologiesJavascript=document.getElementById("input-technologies-js").checked
    let technologiesPhp=document.getElementById("input-technologies-php").checked
    let technologiesReactjs=document.getElementById("input-technologies-react").checked
    let technologiesNodejs=document.getElementById("input-technologies-node-js").checked
    let uploadImage=document.getElementById("input-image").files
    let peringatan="Semua kolom wajib diisi"
    let resultDate=(endDate-startDate)

    if (projectName == "") {
        return alert(peringatan)        
    } else if (startDate == "") {
        return alert(peringatan)
    } else if (endDate == "") {
        return alert(peringatan)
    } else if (description == "") {
        return alert(peringatan)
    }

    if (technologiesJavascript) {
        technologiesJavascript=document.getElementById("input-technologies-js").value
    } else {}

    if (technologiesPhp) {
        technologiesPhp=document.getElementById("input-technologies-php").value
    } else {}

    if (technologiesReactjs) {
        technologiesReactjs=document.getElementById("input-technologies-react").value
    } else {}

    if (technologiesNodejs) {
        technologiesNodejs=document.getElementById("input-technologies-node-js").value
    } else {}

    console.log(technologiesJavascript)
    console.log(technologiesPhp)
    console.log(technologiesReactjs)
    console.log(technologiesNodejs)

    uploadImage=URL.createObjectURL(uploadImage[0])
    
    let project = {
        projectName,
        resultDate,
        postAt: new Date(),
        description,
        technologiesJavascript,
        technologiesPhp,
        technologiesReactjs,
        technologiesNodejs,
        uploadImage,
    }

    myProject.push(project)

    console.log(myProject);

    renderBlog()

}

function renderBlog () {

    document.getElementById("blog").innerHTML = "" 

    for(let index=0; index < myProject.length; index++) {
        console.log(myProject[index])
        document.getElementById("blog").innerHTML += 
        `
            <div class="blog-detail-satu">
                    <div class="blog-detail-container-satu">
                        <div style="width: 100%; height: 300px; overflow: hidden; position: relative;">
                            <img src="${myProject[index].uploadImage}" style="max-width: 100%; position: absolute;">
                        </div>
                        <p id="input-project-name" style="margin-top: 10px; margin-left: 13px; margin-bottom: 5px; font-size: 35px; font-family: 'Segoe UI'; font-weight: bold;">${myProject[index].projectName}</p>
                        <div style="margin-top: 2px; margin-left: 15px; margin-bottom: 0px; color: grey">Show Post: ${getFullTime(myProject[index].postAt)}</div>
                        <div style="text-align: left; margin-top: 0px; margin-left: 15px;">
                        <span style="font-size:12px; color: grey;">Duration : ${getDistanceTime(myProject[index].resultDate)}</span>
                        </div>
                        <p style="
                            margin-top: 25px; margin-left: 13px; margin-right: 50px; text-align: justify; font-size: 18px; font-family: 'Segoe UI';">
                            <b>ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</b><br/>
                            <br/>
                            ${myProject[index].description}
                        </p>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesJavascript}" ></i></span>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesPhp}" ></i></span>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesReactjs}" ></i></span>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesNodejs}" ></i></span>
                        <div class="edit-dan-delete">
                            <div class="edit-satu">
                            <a href="myproject-detail.html" title="edit">
                            <button>edit</button>
                            </a>
                            </div>
                            <div class="edit-dua">
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
            </div>
        `
    }
}

function getFullTime(time){

    let month = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"]

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    // console.log(date);
    // console.log(month[monthIndex]);
    // console.log(year);

    // console.log(hours);
    // console.log(minutes);

    if(hours < 10){
        hours = "0" + hours
    }else if(minutes < 10){
        minutes = "0" + minutes
    }
    
    // 12 Agustus 2022 09.04
    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    // console.log(fullTime);
    return fullTime
}

function getDistanceTime(time){

    let startDate= new Date(document.getElementById("input-start-date").value)
    let endDate = new Date(document.getElementById("input-end-date").value)

    let distance = endDate - startDate
    console.log(distance);

    let milisecond = 1000 // 1 detik 1000 milisecond
    let secondInHours = 3600 // 1 jam sama dengan 3600 detik
    let hoursInDay = 24 // 1 hari 24 jam
    let dayInMonth = 31 // 1 bulan 31 hari
    let monthInYear = 12 // 1 tahun 12 bulan

    let distanceYear = Math.floor(distance / (milisecond * secondInHours * hoursInDay * dayInMonth * monthInYear))
    let distanceMonth = Math.floor(distance / (milisecond * secondInHours * hoursInDay * dayInMonth))
    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSeconds = Math.floor(distance / milisecond)

    if(distanceYear > 0){
        return `${distanceYear} Year`
    } else if (distanceMonth > 0){
        return `${distanceMonth} Month` 
    } else if (distanceDay > 0) {
        return `${distanceDay} Day`
    } else if(distanceHours > 0){
        return `${distanceHours} Hours`
    } else if(distanceMinutes > 0){
        return `${distanceMinutes} Minutes`
    } else {
        return `${distanceSeconds} Seconds`
    }
}

// setInterval(function(){
//     renderBlog()
// }, 3000)