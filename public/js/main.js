const submitbtn= document.getElementById("submitbtn");
const cityName= document.getElementById("cityName");
const city_name= document.getElementById("city_name");
const temp_status= document.getElementById("temp_status");
const temp= document.getElementById("temp");
const datahide= document.querySelector('.middle_layer');
const getInfo = async(event)=>{
    event.preventDefault();
    let val= cityName.value;
    if(val==""){
        city_name.innerText= `Please write the name of the city`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            var d = new Date();
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=7f1c00d1ddbacaf37acc52f377913767`;
            const response= await fetch(url);
            const data= await response.json();
            const arr= [data];
            day.innerText = d;
            city_name.innerText= ` ${arr[0].name}, ${arr[0].sys.country}`;
            temp.innerText= arr[0].main.temp;
            const tempMood= arr[0].weather[0].main;
            if(tempMood== "Clear"){
                temp_status.innerHTML= "<i class='fa fa-sun' style= 'color: #eccc68;'></i>";
            }
            else if(tempMood== "Clouds"){
                temp_status.innerHTML= "<i class='fa fa-cloud' style= 'color: #f1f2f6;'></i>";
            }
            else if(tempMood== "Rain"){
                temp_status.innerHTML= "<i class='fa fa-rain' style= 'color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML= "<i class='fa fa-cloud' style= 'color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText= `Please enter a proper city name.`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click', getInfo);