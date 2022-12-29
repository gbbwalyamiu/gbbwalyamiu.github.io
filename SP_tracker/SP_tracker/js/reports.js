

var departments = []
setTimeout(function(){
    out = ``
    spArray.map((res)=>{
        out += `<button title="${res.spId}" class="prime m-5">${res.startDate.substr(0,4)} - ${res.endDate.substr(0,4)}</button>`
    })
    $('#spsz').html(out)
    departments = employees.map((res)=>({'id':res.dept,'name':res.dname}))
    departments = [...new Map(departments.map((res)=>[res['id'], res])).values()].sort((a,b)=>parseInt(a.id) - parseInt(b.id));

},2000)

var RepObjectives = []
var RepStrategies = []
var RepActivities = []
var RepThreads = []
var RepBlockers = []
var RepOperations = []


$.getJSON(apiUrl+"Objectives", (response)=>{
    RepObjectives = response.data
})
$.getJSON(apiUrl+"Strategies", (response)=>{
    RepStrategies = response.data
})
$.getJSON(apiUrl+"spActivities", (response)=>{
    RepActivities = response.data
})
$.getJSON(apiUrl+"spThreads/all/", (response)=>{
    RepThreads = response.data
})
$.getJSON(apiUrl+"spBlockers", (response)=>{
    RepBlockers = response.data
})
$.getJSON(apiUrl+"spOperations", (response)=>{
    RepOperations = response.data
})

$(document).on('click', '#spsz button', function(){

    var spID = $(this).attr('title')
    $('#spsz').slideUp()
     var filteredOb = filterArr(RepObjectives,'spId',spID)    
    $('#reportTable').html(outTable(filteredOb, 'details', 'objectiveId'))


})


const outTable = (arr, detail, key)=>{
    var out = `<table><thead><tr><th>Sno.</th><th>Details</th><th>Percentage</th><th>Actions</th></tr></thead><tbody>`
    var count = 0
    arr.map((res)=>{
        count++
        out += `<tr><td>${count}</td><td>${res[detail]}</td><td>${0}%</td><td><button class="prime" onclick="viewOther(this.id, this.title)" title="${res[detail]} ~ ${detail}" id="${res[key]}"> <i class="fa fa-eye"></i> view</button></td></tr>`
    })

    out +=`</tbody></table>`
    return out
}


const viewOther = (id, title)=>{

        var out =`<h4 class="ff-title">${title.split('~')[0]} - ${0}%</h4><hr><br><br><div class="container">`
        departments.map((res)=>{
            out += ` <div class="drop" style="--color: #01b4ff">
            <div class="content">
              <h2>${25}%</h2>
              <p>${res.name}</p>
              <a onclick="viewSt(this.id, this.title)" title="${id}" id="${res.id}">More</a>
            </div>
          </div>`
        })
        out += `</div>`
        $('#reportTable').html(out)
}


const viewSt = (did, obid) =>{

    var filteredStr = RepStrategies.filter(a=>(a.deptId == did) && (a.objectiveId == obid))
    $('#reportTable').html(outTable(filteredStr,'strategy','strategyId'))

}



setTimeout(function(){

    // console.log(RepObjectives)
    // console.log(RepStrategies)
    // console.log(RepActivities)
    // console.log(RepThreads)
    // console.log(RepBlockers)
    // console.log(RepOperations)

},3000)



