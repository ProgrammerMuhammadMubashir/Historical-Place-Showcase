window.addEventListener("load",()=>{
    let headingHistory=document.querySelector(".headingHistory")
      const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  let nameOfPlace=query
  headingHistory.innerText=`History of ${nameOfPlace}`
  let allSections=document.getElementsByClassName("notShown")
  Array.from(allSections).forEach((section)=>{
if(section.id==nameOfPlace){
    section.classList.remove("notShown")
    console.log("Done")
}
else{
    console.log("Not done")
    console.log(section.id,nameOfPlace)
}
  })
})



