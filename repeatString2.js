async function repeatStringNumTimes(str, num) {
        await new Promise((res) => setTimeout(res,500))
        if(num === 1){
            return str
        }
        return str.concat(await repeatStringNumTimes(str, num-1))
}
  
repeatStringNumTimes("abc", 3)
  .then((res) => console.log(res))


