// function postData(url, data, success) {
//     $.ajax({
//         type: "post",
//         url: url,
//         dataType: "json",
        
//         contentType: 'application/json',
//         data: JSON.stringify(data),
//         success: function(response) {
//                 success(response);
//         }
//     });
// }

function postData(url, data, success) {
    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(data),
        crossDomain: true,
        success: function(response) {
                success(response);
        }
    });
}

function postFormData(url, data, success) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        processData: false,
        contentType: false,
        success: function(response) {
                success(response);
        }
    });
}

const convertToObject = (data) => {
    if (data != '') {
        var arr = data.split('~')
        myArr = []
        arr.map((res) => {
            if (res != '') {
                myArr.push(Object.assign({}, res.split('`')))
            }
        })
        return myArr
    }
    return ''
}

const makeUniq = (arr) => {
    return [...new Set(arr)]
}

const mergeArr = (arr, arr2)=>{
    return [...arr, ...arr2]
}

const filterArr = (arr, index, key)=>{
    return arr.filter(a => a[index] == key)
}

const getAttr = (arr, index)=>{
    return arr.map((res)=>res[index])
}


const makeSelArr = (arr, key1, key2, name)=>{
    var out = '<option value="">Select '+name+'</option>'
    arr.map((res) => {
        out += `<option value='${res[key1]}'>${key2.length == 2 ? res[key2[0]]+" "+ res[key2[1]] : res[key2[0]]} </option>`
    })
    return out;
}

const sortArr = (arr)=>{
    return arr.sort((a,b)=>a - b)
}

const sumOfArray = (arr)=>{
    return arr.reduce((a, b) => a + b, 0)
}


const makeSel = (arr, name) => {
    var out = '<option value="">Select '+name+'</option>'
    arr.map((res) => {
        out += '<option value="' + res + '">' + res + '</option>'
    })
    return out;
}

function getRootPath() {
    var pathName = window.location.pathname.substring(1);
    var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    return window.location.protocol + '//' + window.location.host + '/' + webName;
}

//function to loop through inputs to ensure they are all not empty
function validateFields(className = String) {
    var inputFilled = true;
    var elements = $(`${className}`);
    for (let i = 0; i < elements.length; i++) {
        if (!$(elements[i]).val().trim()) {
            warn($(elements[i]), "This Field is required!", $(elements[i]).attr('type'));
            inputFilled = false;
        }
    }
    return inputFilled;
}

//function to flag an error
function warn(el = Element, msg = String, type = String) {
    var text, elementType;
    $(el).css({ color: 'red' });
    if (type == 'element') {
        text = $(el).text();
        $(el).text(msg);
    } else if (type == 'select') {
        text = $(el).val();
    } else if (type == 'textarea') {
        $(el).val(msg);
    } else if (!$(el).prop('type').trim().includes('text')) {
        elementType = $(el).prop('type');
        text = $(el).val();
        $(el).prop('type', 'text');
        $(el).val(msg);
    } else {
        text = $(el).val();
        $(el).prop('type', 'text');
        $(el).val(msg);
    }
    setTimeout(() => {
        $(el).css({ color: 'black' });
        if (type !== 'element') {
            $(el).prop('type', elementType);
            $(el).val(text);
        } else {
            $(el).text(text);
        }
    }, 2000);
}

// time counter.
var
    dur = 0,
    timeInterval = 0,
    time = 0,
    tSecs = 0,
    hh, mm, ss;

function timeCount(el, onTimeUp) {
    tSecs = time;
    var h = Math.floor(tSecs / 3600);
    var m = Math.floor(tSecs % 3600 / 60);
    var s = Math.floor(tSecs % 3600 % 60);
    h.toString().length > 1 ? hh = h : hh = `0${h}`
    m.toString().length > 1 ? mm = m : mm = `0${m}`
    s.toString().length > 1 ? ss = s : ss = `0${s}`
    $(el).text(`${hh}:${mm}:${ss}`);
    if (time <= 0) {
        clearInterval(timeInterval);
    }
    time--;
}

const disableBtn = (el)=>{
    $(el).prop('disabled', true)
    $(el).text('processing...')
}

const enableBtn = (el) =>{
    $(el).prop('disabled', false)
    $(el).html(`<i class="fa fa-paper-plane"></i> Submit`)
}

const ourAlert = (text, status)=>{
    status == 1?$('#alert').css('color','green'):$('#alert').css('color','red')
    $('#alert').text(text)
    $('#alert').slideDown()
    setTimeout(function(){
        $('#alert').slideUp()
    },5000)
}

const timelineBreakDown = (breakfrom, breakto, timelinelength,duration=0, startpoint = 1)=>{
    breaks = 0
    line = 0
    if(breakfrom == "splan"){
        if(breakto == "years"){
            line = 2
            breaks = timelinelength*line
        }
        else{
            breaks = false
        }
    }
    else if(breakfrom == "years"){
        if(breakto == "months"){
            line = 12
            breaks = timelinelength*line
        }
        else if(breakto == "weeks"){
            line = 52
            breaks = timelinelength*line
        }
        else if(breakto == "days"){
            line = 365
            breaks = timelinelength*line
        }
        else if(breakto == "hours"){
            line = 8760
            breaks = timelinelength*line
        }
        else if(breakto == "minutes"){
            line = 525600
            breaks = timelinelength*line
        }
        else{
            return false
        }
    }
    else if(breakfrom == "months"){
        if(breakto == "weeks"){
            line = 4
            breaks = timelinelength*line
        }
        else if(breakto == "days"){
            line = 30
            breaks = timelinelength*line
        }
        else if(breakto == "hours"){
            line = 730
            breaks = timelinelength*line
        }
        else if(breakto == "minutes"){
            line = 43800
            breaks = timelinelength*43800
        }
        else{
            return false
        }
    }
    else if(breakfrom == "weeks"){
        if(breakto == "days"){
            line = 7
            breaks = timelinelength*line
        }
        else if(breakto == "hours"){
            line = 168
            breaks = timelinelength*line
        }
        else if(breakto == "minutes"){
            line = 10080
            breaks = timelinelength*line
        }
        else if(breakto == "seconds"){
            line = 604800
            breaks = timelinelength*line
        }
        else{
            return false
        }
    }
    else if(breakfrom == "days"){
        if(breakto == "hours"){
            line = 24
            breaks = timelinelength*line
        }
        else if(breakto == "minutes"){
            line = 1440
            breaks = timelinelength*line
        }
        else if(breakto == "seconds"){
            line = 86400
            breaks = timelinelength*line
        }
        else{
            return false
        }
    }
    else if(breakfrom == "hours"){
       
        if(breakto == "minutes"){
            line = 60
            breaks = timelinelength*line
        }
        else if(breakto == "seconds"){
            line = 3600
            breaks = timelinelength*line
        }
        else{
            return false
        }
    }
    else if(breakfrom == "minutes"){
        if(breakto == "seconds"){
            line = 60
            breaks = timelinelength*line
        }
        else{
            return false
        }
    }
    else{
        return false
    }
    endpoint = startpoint + duration;
    if(endpoint > breaks){
        return false
    }
    
    if(startpoint == 0){
        return false
    }
    spans = [{
        "timelinelength": breaks,
        "startpoint": startpoint,
        "endpoint": endpoint,
        "durationPloted": duration,
        "line": line
      
    }]
    return spans
}

const plotTimeLine = (from,to,timespans,plot,startpoint,startdate)=>{
    timespan = timelineBreakDown(from,to,timespans,plot,startpoint)
    console.log(timespan)
    var sDate = new Date(startdate);
    year = sDate.getFullYear();
    month = sDate.getMonth();
    week = Math.ceil(sDate.getDate() / 7)
    day = sDate.getDay();

    dLabe = 1
    if(to == "years"){
        dLabe = year
    }
    else if(to == "months"){
        dLabe = month
    }
    else if(to == "days"){
        dLabe = day
    }
    else if(to == "weeks"){
        dLabe = week
    }
    else{
        return false
    }

    var out =`<table class="w-100"><thead class="ta-c"><tr><th  style="border: 1px solid #999" colspan="${timespan[0]["line"]}">${dLabe++}</th>`
    for(var i = 1; i<timespans; i++){
        
        out +=`<th style="border: 1px solid #999" colspan="${timespan[0]["line"]}">${dLabe++}</th>`
    }
    out += `</tr></thead><tbody><tr>`
    for(var i = 1; i<=(timespan[0]["timelinelength"]); i++){
        out += `<td title="${i}" class="box"></td>`
    }
    out += `</tr></tbody></table>`

    return out
}
var apiUrl = 'https://ehcapps.evelynhone.ac.zm:4450/api/';

var uid = sessionStorage.getItem('sptsessionusermanno')

function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}