$(document).on('click', '#actz ol li', function(){
    $('#actz ol li').removeClass('active3')
    $(this).addClass('active3')
    var id = $(this).attr('id')
    $.getJSON(apiUrl+'spThreads/activity/'+id, (response)=>{
        out = `<br><h4 class="ff-title">Threads</h4><ol>`
        response.data.map((res)=>{
            out += `<li title="${res.details}" id="${res.threadId}">${res.activityTitle}</li>`
        })
        out += `</ol>`
        $('#thredz').html(out)
    })

})

var spOperations = []
var spBlockers = []
var merged = []

const getOps = (id)=>{

    $.getJSON(apiUrl+'spOperations/'+id, (response)=>{
        if(response.data.length != 0){
            spOperations = response.data
        }
    })
    $.getJSON(apiUrl+'spBlockers/'+id, (response)=>{ 
        if(response.data.length != 0){
            spBlockers = response.data
        }
    })
    setTimeout(function(){
        merged = mergeArr(spOperations, spBlockers)
        merged = merged.sort(function(a,b){
            return new Date(a.dateAdded) - new Date(b.dateAdded);
          });
          var out = `<table><thead><tr><th>Sno</th><th>Comment</th><th>Date</th><th>Actions</th></tr></thead><tbody>`
          var count = 0
          var actions = `<i onclick="updateBlocker(this.title)" title="0" class="fa fa-ban fa-lg m-5"></i><i onclick="updateBlocker(this.title)" title="2" class="fa fa-check-circle fa-lg c-green m-5"></i>`
          merged.map((res)=>{
            count++
            
            res.blokerId != null?out += `<tr class="c-red ta-l"><td>${count}</td><td>${res.details} / ${res.reccomendedAction}</td><td>${res.dateAdded.substr(0,10)}</td><td>${actions}</td></tr>`: out += `<tr class="c-green ta-l"><td>${count}</td><td>${res.comments}</td><td>${res.dateAdded.substr(0,10)}</td><td>.</td></tr>`
          })
          out += `</tbody></table>`
          $('#operations').html(out)

    },3000)

}

const updateBlocker = (id)=>{

    var data = {

    }
    postData(apiUrl+'spBlocker',data, ()=>{
        if(response.status.isSuccess){
            ourAlert(response.status.message, 1)
            getOps($('#thrID').val())
        }
    })

}

const completeThread = ()=>{
    var data = {

    }
    postData(apiUrl+'spBlocker',data, ()=>{
        if(response.status.isSuccess){
            ourAlert(response.status.message, 1)
            getOps($('#thrID').val())
        }
    })
}

$(document).on('click', '#thredz ol li', function(){
    $('#thredz ol li').removeClass('active3')
    $(this).addClass('active3')
    var id = $(this).attr('id')
    $('#thrID').val(id)
    $('.modo').fadeIn()
    getOps(id)
})

$('#ddm').change(function(){
    if($(this).val() == "3"){
        $('#textBlocker').slideDown()
    }else{
        $('#textBlocker').slideUp()
    }
})


$('#sendOp').click(function(){

    if($('#ddm').val() == ''){
        ourAlert('Please select drop down lost', 2)
        return
    }

    var data = {}
    var anUrl = ''

    if($('#ddm').val() == '3'){

        data = {
            threadID:$('#thrID').val(),
            details:$('#comm').val(),
            natureofblocker:"1",
            reccomendedAction:$('#textBlocker').val(),
            addedBy:uid,
            dateAdded:new Date(),
            blockerStatus:"1"
        }
        anUrl = 'spBlockers'
    }else{

        data = {
            threadID:$('#thrID').val(),
            comments:$('#comm').val(),
            actionState:$('#ddm').val(),
            action:"",
            addedBy:uid,
            DateAdded:new Date()
        }
        anUrl = 'spOperations'
    }

    postData(apiUrl+anUrl, data, (response)=>{
        if(response.status.isSuccess){
            ourAlert(response.status.message, 1)
            getOps($('#thrID').val())
        }
    })


})

