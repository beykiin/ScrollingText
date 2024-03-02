let skyWriting=(object,time)=>{
    let coming=object
    setInterval(()=>{
        let writing=coming.innerHTML
        let letter=writing.substring(0,1)
        let result=writing.substring(1,writing.length)
        coming.innerHTML=result
    },time)
}
let writing2=document.getElementById("writing")
skyWriting(writing2,500)
