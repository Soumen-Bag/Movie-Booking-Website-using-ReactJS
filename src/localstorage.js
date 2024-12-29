const getData=(key)=>{
  let data =  localStorage.getItem(key);
  return JSON.parse(data)
}

const setData = async(key,data)=>{
  let value = JSON.stringify(data)
  localStorage.setItem(key,value)
}


export {getData,setData}