
async function loadJSON() {
  const response = await fetch('./small.json')
  const data = await response.json()

  formateJson(data)  
}

loadJSON()

function getTypeData(data) {
  if (data.constructor == Array) {
    return "array"
  }
  if (data.constructor == Object) {
    return "object"
  }
}

function formateJson(data) {  
  const typeData = getTypeData(data)

  if (typeData === 'object') {
    const keys = Object.keys(data)
    console.log(keys)
  }

  


  // if (typeData === 'array' || 'object') {
  //   formateJson(data[item])                  
  // } else {
  //   console.log(data[item])
  // }
  // for(item in data) {
  // }  
}
