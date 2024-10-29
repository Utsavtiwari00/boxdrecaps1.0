const apiurl="https://www.omdbapi.com/?apikey=787edd31&t=";
const posterApiUrl = "https://img.omdbapi.com/?apikey=787edd31&i=";
const searchinput=document.querySelector(".searchbox input");
const searchbtn=document.querySelector(".searchbox button")
async function moviedata(title){
    const response=await fetch(apiurl+title)
    var moviesdata = await response.json()
    document.querySelector("#moviename").innerHTML="Movie:"+moviesdata.Title;
    document.querySelector("#year").innerHTML="Year:"+ moviesdata.Year;
    document.querySelector("#director").innerHTML="Director:"+moviesdata.Director;
    document.querySelector("#runtime").innerHTML="Runtime:"+ moviesdata.Runtime;
    document.querySelector("#Genre").innerHTML="Genre:"+ moviesdata.Genre;
    document.querySelector("#plot").innerHTML="Plot: "+ moviesdata.Plot;
    const poster=document.querySelector("#movieposter")
    if(moviesdata.imdbID){
        poster.src=`${posterApiUrl}${moviesdata.imdbID}`;
        poster.alt=moviesdata.Title+"poster";
    }
    else{
        poster.src="";
        poster.alt="no poster";
    }
}
searchbtn.addEventListener("click",()=>{
    const title=searchinput.value.trim();
    moviedata(title);
});
