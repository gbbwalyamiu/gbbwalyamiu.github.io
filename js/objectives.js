
const depURL = "https://ehcapps.evelynhone.ac.zm:4499/api/documenttypes/344567";

var employees = []

const showDept = (responce) =>{
    employees = [...responce]
    arr = filterArr(responce,"manNo",uid);
    $('#spdept').val(arr[0].dept)
    dep = filterArr(responce,"dept",arr[0].dept);
    opt = makeSelArr(dep,"manNo",["firstName", "lastName"], "Overseer")
    $("#overseer").html(makeSelArr(dep,"manNo",["firstName", "lastName"], "Overseer"))
        
}
$('#spdept')
//$("#testtime").html(plotTimeLine("months","weeks",5,2,1,"2022/5/02"))
showDept;

$.getJSON(depURL, showDept)
$('#showSp').click(function(){
    $("#sPlans").animate({
        width: "toggle"
    });
    $(this).toggleClass('fa fa-chevron-circle-right fa-3x mr-5')
    $(this).toggleClass('fa fa-chevron-circle-left fa-3x mr-5')
})

const toggleS = ()=>{
    $('#strategies').slideToggle()
    $('#newStrategy').slideToggle()
}

var timeLineArray = []
var startPointArr = []

$(document).on('click', '#sTimeLine td', function(){
    start = parseInt($(this).attr('title'))
    if(startPointArr.length > 0){
        start = startPointArr[0]
        if(startPointArr.length == 1){
            if($(this).hasClass('activeTimeline')){
                startPointArr = []
                $(this).removeClass('activeTimeline')
                return
            }
        }
    }
    startPointArr = []
    end = parseInt($(this).attr('title'))
    $( '#sTimeLine td').removeClass('activeTimeline')
    while(start <= end){
        startPointArr.push(start)
        $( '#sTimeLine td[ title=' + start + ']' ).addClass( 'activeTimeline' );
        start++
    }
})

$('#strFormBtn').click(function(e){
    e.preventDefault()
    disableBtn(this)
    var check = validateFields('.stDesc')
    if(check){
        if(startPointArr.length != 0){

            startPointArr.sort((a, b) => a - b);
            var duration = startPointArr.length
            duration = timeLineArray[duration]
            var strategy = $('#stDesc').val()
            
            var data = {
                //startPoint:timeLineArray[startPointArr[0]-1],
                //duration:duration,
                objectiveId: $('#objIdz').val(),
                strategy:strategy,
                addedBy:uid,
                deptId: $("#spdept").val(),
                overSeer: $("#overseer").val(),
                areaid: 1
            }


            postData(apiUrl+'Strategies', data, (response)=>{

                ourAlert(response.status.message,1)
                if(response.status.isSuccess){
                    startPointArr = []
                    $('#sTimeLine td').removeClass('activeTimeline')
                    $('#stDesc').val('')
                    $.getJSON(apiUrl+'Strategies/'+$('#objIdz').val(), showStrategy)

                }
                enableBtn(this)
            })

        }else{
            ourAlert('Please mark strategy timeline',2)
            enableBtn(this)
        }
    }

})
var objs = []
var strats = []
var years = 0
var yearOne = 0
$(document).on('click', '#sPlans .prime', function(){
    var spid = $(this).attr('title')
    $('#sPlans .prime').removeClass('active1')
    $(this).addClass('active1')
    $.getJSON(apiUrl+"Objectives/"+spid+"/0", (response)=>{
        objs = [...response.data]
        $('#objTable').slideDown();
        $('#objTable').html(displayObj(response.data, 'details', 'objectiveId'))
    })
    yearOne = parseInt((filterArr(spArray,'spId',spid)[0].startDate).substr(0,4))
    var yearLast = parseInt((filterArr(spArray,'spId',spid)[0].endDate).substr(0,4))
    years = (yearLast - yearOne) + 1
    timeLineArray = [...Array((years*2)).keys()].map(x => x*6)
    var out = plotTimeLine("splan","years",years,0,1,filterArr(spArray,'spId',spid)[0].startDate)
    $('#sTimeLine').html(out)
    setTimeout(function(){
        $("#sPlans").animate({
            width: "toggle"
        });
        $('#showSp').toggleClass('fa fa-chevron-circle-right fa-3x mr-5')
        $('#showSp').toggleClass('fa fa-chevron-circle-left fa-3x mr-5')
    },3000)
})

const displayObj = (arr, detail, id)=>{
    var out =`<table><thead><tr><th>Sno.</th><th>Description</th><th>.</th></tr></thead><tbody>`
    var count = 0
    arr.map((res)=>{
        count++
        out += `<tr><td>${count}</td><td>${res[detail]}</td><td> <button onclick="viewObj(this.title, this.id)" id="${detail}" title="${res[id]}" class="prime">more</button> </td></tr>`
    })
    out += `</tbody></table>`
    return out
}

var stratArr =  []
const showStrategy =  (response)=>{
    $('#objInfo h3').hide()
    var out =`<h3 class="ff-title">Strategies</h3><hr><br>`
    if(response.data.length != 0){
        out += displayObj(response.data, 'strategy', 'strategyId')
        stratArr = [...response.data]
    }else{
        out += `There are no strategies for this objective in this department.`
    }
    $('#strategies').html(out)
}


const viewObj = (id, type)=>{

    if(type == 'details'){
        toggleObj();
        $('#objIdz').val(id)
        $('#objInfo .h3').html(displayObj(filterArr(objs,'objectiveId',id), 'details', 'objectiveId'))
        $.getJSON(apiUrl+"Strategies/"+id,showStrategy)
    }
    if(type == 'strategy'){
        $('#objInfo .h3').hide()
        $('#strate').slideDown()
        $('#strategies').html('<h3 class="ff-title">Strategies</h3><hr><br>'+displayObj(filterArr(stratArr,'strategyId',id), 'strategy', 'strategyId'))
        $.getJSON(apiUrl+'spActivities/', (response)=>{
            out = `<br><h4 class="ff-title">Activities</h4><ol>`
            response.data.map((res)=>{
                out += `<li title="${res.details}" id="${res.activityId}">${res.title}</li>`
            })
            out += `</ol>`
            $('#actz').html(out)
        })
    }
}

const toggleObj = ()=>{
    $('#objTable').slideToggle()
    $('#objInfo').slideToggle()
}