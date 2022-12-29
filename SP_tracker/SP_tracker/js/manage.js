var spArray = []
var goals = []
var objectives = []
const spTypes = {1:"Vision", 2:"Objectives", 3:"Mission", 4:"Goals", 5:"Collaborator"}   
// $.getJSON(`https://ehcapps.evelynhone.ac.zm:4433/api/medicalbooking/${$('#medStud').val()}/${$('#medNrc').val()}`,(response)=>{
//     console.log(response)
// })
//////////////////////////display functions////////////////////////
const showList = (arr)=>{
    var out = ``
    var count = 1
    arr.map((res)=>{
        out += `${count}. ${res}  <i class="fa fa-times-circle c-red"></i><br><br>`
        count++
    })
    return out
}
const spTbl = (arr)=>{
    var out =`<table><thead><tr><th>Sno</th><th>Description</th><th>Start</th><th>End</th><th>.</th></tr></thead><tbody>`
    var count = 0
    arr.map((res)=>{
        count++
        out += `<tr><td>${count}</td><td>${res.description}</td><td>${res.startDate.substr(0,4)}</td><td>${res.endDate.substr(0,4)}</td><td> <button class="prime" onclick="addMoreDet(this.id)" id="${res.spId}">more</button> </td></tr>`
    })
    out +=  `</tbody></table>`
    return out
}
//////////////////////////////end display functions//////////////////
//////////////////////////onload functions//////////////////////////////
$.getJSON(apiUrl+'StrategicPlan', (response)=>{
    $('#spList').html(spTbl(response.data))
    var out = ``
    response.data.sort((a,b)=>b.spId-a.spId).map((res)=>{
        out += `<button title="${res.spId}" class="prime">${res.startDate.substr(0,4)} - ${res.endDate.substr(0,4)}</button>`
    })
    $('#sPlans').html(out)
    spArray = [...response.data]
})
//////////////////////////end onload functions/////////////////////////////
/////////////////////call back functions//////////////////////////////
const gottenDetails = (response)=>{
    console.log(response.data)
    var out =``
    makeUniq(getAttr(response.data,'spdType')).map((res)=>{
            out += `<h3 class="ff-title">${spTypes[res]}</h3> <br>`
            var count = 0
        filterArr(response.data,'spdType',res).map((ult)=>{
            count++
            out += `${count}. ${ult.description} <button class="danger fr"> <i class="fa fa-trash"></i> </button> <button class="prime fr mr-5"> <i class="fa fa-pencil"></i> </button> <br><br>`
        })
    })
     $('#spDetailsDiv').html(out)
}
////////////////////////end call back functions////////////////////////////
//////////////////General functins////////////////////////////////////////////
const toggle = ()=>{
    $('.sps').slideToggle()
    $('.mainForm').slideToggle()
    $('.manageForm').show()
    $('#addSpDetails').hide()
}
const addToList = (id)=>{
    var desc = $(`#${id}`).val()
    if(desc.length < 0){

    }
    id == 'Objectives'?objectives.push(desc):goals.push(desc)
    $(`#${id}`).val('')
    $(`#listOfGoals`).html(showList(goals))
    $(`#listOfObjectives`).html(showList(objectives))
  
  }
  const addMoreDet = (id)=>{
    var disArray = filterArr(spArray, 'spId', id)
    $('#spTbl').html(spTbl(disArray))
    $('#spID').val(id)
    toggle()
    $('.manageForm').hide();
    $('#addSpDetails').slideDown();
    
    $.getJSON(apiUrl+'spDetails/'+id, gottenDetails)
}
////////////////////end general functions//////////////////////
/////////////////////submit buttons////////////////////////////////////////
$('#submitSp').click(function(){
    disableBtn(this)
    var data = {}
    var check = validateFields('.manageForm input')
    if($(`#spDesc`).val().length < 30){
        ourAlert('Description is too short',2)
        return
    }
    if(check){
            var data = {
                // description:$(`#spDesc`).val(),
                // startDate:$(`#spStartDate`).val(),
                // endDate:$(`#spEndDate`).val(),
                // addedBy:uid
            }
            postData(apiUrl+`StrategicPlan?aim=""&mission=""&startDate=${$(`#spStartDate`).val()}&endDate=${$(`#spEndDate`).val()}&description=${$(`#spDesc`).val()}&empNo=${uid}`,data, (response)=>{
                ourAlert(response.status.message, 1)
                if(response.status.isSuccess){
                    $('#spTbl').html(spTbl(response.data))
                    $('#spID').val(response.data[0].spId)
                    $('.manageForm').hide();
                    $('#addSpDetails').slideDown();
                }else{
                    
                }
                enableBtn(this)
            })
    }else{
        enableBtn(this)
    }
})
$('#submitspDetails').click(function(){
  
    disableBtn(this)
    var dis = $(this)
    var details = []
    var mission = $('#spMission').val()
    var vision = $('#spVision').val()
    if(mission!=''){
        details.push({description:mission,type:3})
    }
    if(vision!=''){
        details.push({description:vision,type:1})
    }
    if(goals.length!=0){
        goals.map((res)=>{
            details.push({description:res,type:4})
        })
    }
    
    details = details.map(obj=>({...obj,addedby:uid, spid:$('#spID').val()}))
    var resp = []
    details.map((res)=>{
        postData(apiUrl+'SpDetails', res, (response)=>{
            resp = response
        })
    })
    if(objectives.length!=0){
        objectives.map((res)=>{
            var data = {
                details:res,
                gist:"Obj",
                Addedby:uid,
                spid:$('#spID').val()
            }
            postData(apiUrl+'Objectives', data, (response)=>{
                resp = response
            })
        })
    }
    setTimeout(function(){
        if(resp.length!=0){
            ourAlert(resp.status.message, 1)
            if(resp.status.isSuccess){
                
                $.getJSON(apiUrl+'SpDetails/'+$('#spID').val(), gottenDetails)
                objectives = []
                goals = []
                $(`#listOfGoals`).html(showList(goals))
                $(`#listOfObjectives`).html(showList(objectives))
            }
            enableBtn(dis)
            // $(dis).html(`<i class="fa fa-paper-plane"></i> Submit`)
        }
    },3000)
})
/////////////////////////////end submit buttons///////////////////////////////////
