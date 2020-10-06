import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from "d3";
import { AuthService } from '../auth.service';
import { FormControl, Validators } from "@angular/forms";
import * as cloud from 'd3-cloud';

import { DashboardserviceService } from './dashdoardservice.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-dashdoard',
  templateUrl: './dashdoard.component.html',
  styleUrls: ['./dashdoard.component.css']
})
export class DashdoardComponent implements OnInit {
  isShowDiv1 = true;  
  isShowDiv2 = true; 
  isShowDiv3 = true; 
  isShowDiv4 = true;
  isShowDiv5 = true;
  startDate="2020-03-01";
  endDate="";
  inputStartDate="";
  inputEndDate="";
  startDate1="";
  type1;
  datePicCount=0;
  newUserCount;
  returnUserCount;
  lifetimeUserCount;
  totalActivityUserCount;

  userMessageCount;
  wizardMessageCount;
  totalMessageCount;
  totalTodayMessageCount;
  userMessPercent;
  WizardMessPercent;
  Useractpercentage;
  returnactpercentage;
  resolvedchats;
  pendingchats;
  assignedchats;
  actdata1="+Activity";
  actdata2="+Compare";
  actdata3="+Conversation";
  actdata4="+Demographics";
  actdata5="+Settings"
  toggleDisplayDiv1() {
    this.isShowDiv1 = !this.isShowDiv1;
    if(this.actdata1==="+Activity"){
      this.actdata1="-Activity";
    }else{
      this.actdata1="+Activity";
    }
    
  }
  
  toggleDisplayDiv2() {
    this.isShowDiv2 = !this.isShowDiv2;
    if(this.actdata2==="+Compare"){
      this.actdata2="-Compare";
    }else{
      this.actdata2=" +Compare";
    }
    
  }

  toggleDisplayDiv3() {
    this.isShowDiv3= !this.isShowDiv3;
    if(this.actdata3==="+Conversation"){
      this.actdata3="- Conversation";
    }else{
      this.actdata3="+ Conversation";
    }
    
  }
  toggleDisplayDiv4() {
    this.isShowDiv4= !this.isShowDiv4;
    if(this.actdata4==="+Demographics"){
      this.actdata4="-Demographics";
    }else{
      this.actdata4="+Demographics";
    }
  }
  toggleDisplayDiv5() {
    this.isShowDiv5= !this.isShowDiv5;
    if(this.actdata5==="+Settings"){
      this.actdata5="-Settings";
    }else{
      this.actdata5="+Settings";
    }
  }
  myFunction() {  
    this.isShowDiv1 = !this.isShowDiv1;
    $("#aa").toggleClass("fa-minus-circle")
} 
myFunction1() {  
  this.isShowDiv2 = !this.isShowDiv2;
  $("#compare").toggleClass("fa-minus-circle")
} 
myFunction2() {  
  this.isShowDiv3= !this.isShowDiv3;
  $("#conversation").toggleClass("fa-minus-circle")
} 
myFunction3() {  
  this.isShowDiv4= !this.isShowDiv4;
  $("#demograp").toggleClass("fa-minus-circle")
} 
myFunction4() {  
  this.isShowDiv5= !this.isShowDiv5;
  $("#settings").toggleClass("fa-minus-circle")
}
router1(search)
  {
    
    
 this.router.navigate(['/searchpagenew/'+search+'/dashboard'])
    

  }
  loading = false;
  buttionText = "Submit";

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ])

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  msgFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  dateChanger(startdate: string){
    
    
    this.startDate1=startdate;
    this.datePicCount+=1;
  }
  dateChangerEnd(enddate: string){
    this.endDate=enddate;
  /*  this.endDate=enddate;
  console.log(enddate)
  this.startDate1;
  this.inputStartDate=this.startDate1;
  this.inputEndDate=this.endDate;
  document.getElementById("my_dataviz").innerHTML=" ";
  var myWords = [];
    var avarage=0;
    var AllCount=0;
    var start = false;
    var count = 0; 
    var sum=[];
    var outputArray=[];
    var data=[];
    var sortable = [];

  var date_diff_indays = function(date1, date2) {
    
    let dt1 = new Date(date1);
    
    let dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

    var listt=[]  
  this._httpService.getWords().subscribe((res:any[])=>{
    for (let j = 0; j < res.length; j++) { 
      for (let k = 0; k < outputArray.length; k++) { 
          if ( res[j].word == outputArray[k] ) { 
              start = true; 
          } 
      } 
      count++; 
      if (count == 1 && start == false) { 
          outputArray.push(res[j].word); 
      } 
      start = false; 
      count = 0; 
    }
    let arr=[];
  let index=0;
  
 
  
  for(let i=0;i<outputArray.length;i++)
  {
  var yahooOnly = res.filter(function (entry) {

    return entry.word === outputArray[i];


});
index=0
    for(var j=0;j<yahooOnly.length;j++){
      
     // console.log(new Date(this.startDate1))
     // console.log(new Date(yahooOnly[j].date).toLocaleDateString())
     if((new Date(yahooOnly[j].date).toLocaleDateString())==(new Date(this.startDate1).toLocaleDateString())){
        break;
     }
      index++;
    }
    var sum_user1=0;
 var wrd
 for(var z=index;z<=date_diff_indays(this.startDate1,this.endDate)+index;z++){
  wrd= yahooOnly[z].word
  sum_user1+=yahooOnly[z].count;
  
}


sum.push({
        
  newword:wrd,
  count:sum_user1
});


  }
  sum=sum.sort(function(a, b){
    return a.count-b.count
  })
console.log(sum)
  for(var i=sum.length-1;i>sum.length-101;i--){
    
    
      
    myWords.push({
      
      word:sum[i].newword,
      size:sum[i].count
    });
    AllCount=AllCount+sum[i].count;
  }
  
  


avarage=AllCount/sum.length;
// myWords=[{word: "Running", size: "1200"}, {word: "Surfing", size: "2000"}, {word: "Climbing", size: "1200"}, {word: "Kiting", size: "3000"}, {word: "Sailing", size: "2120"}, {word: "Snowboarding", size: "2534"} ]

var margin = {top: 10, right: 10, bottom: 150, left: 10},
width = 750 - margin.left - margin.right,
height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");
    
var layout = cloud()
.size([width, height])
.words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
.padding(5)        //space between words
.rotate(function() { return ~~(Math.random() * 2) * 90; })
.fontSize(function(d) { return d.size/(avarage*2.0); })      // font size of words
.on("end", draw);
layout.start();


function draw(words) {
svg
.append("g")
.attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
.selectAll("text")
  .data(words)
.enter().append("text")
  .style("font-size", function(d) { return d.size; })
  .attr("text-anchor", "middle")
  .style("font-family", "Impact")
  .on("mouseover", handleMouseOver)
  .on("mouseout", handleMouseOut)
  .attr("transform", function(d) {
    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
  })
  .text(function(d) { return d.text; })
  .style("fill", "rgb("+getRandomInt(200)+","+getRandomInt(200)+","+getRandomInt(200)+ ")");
}


function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

console.log();

var div = d3.select("body").append("div")
.attr("class", "tooltip-donut")
.style("opacity", 0)
.style("position", "absolute")
.style("text-align","center")
.style("padding",".5rem")
.style("background","#FFFFFF")
.style("color","#313639")
.style("border","1px solid #313639")
.style("border-radius","8px")
.style("pointer-events","none")
.style("font-size","1rem");

function handleMouseOver(d, i) {  // Add interactivity

div.transition()
         .duration(50)
         .style("opacity", 1);

d3.select(this).transition()
         .duration('50')
         .attr('opacity', '.85');
    let num = (d.text+" : "+(parseInt(d.size)*(avarage*2)*1.00084).toFixed(0)).toString();
div.html(num)
.style("left", (d3.event.pageX + 10) + "px")
.style("top", (d3.event.pageY - 15) + "px");
}

function handleMouseOut(d, i) {
div.transition()
         .duration('50')
         .style("opacity", 0);

d3.select(this).transition()
         .duration('50')
         .attr('opacity', '1');
}

  });*/

  }
  myFunction_drop(type)
  {
    
    var ff=0;
    this.type1=type;
    console.log(this.startDate1)
    console.log(this.endDate)

   if(type=="res" && this.endDate=="")
{
  console.log("inside")
  this._httpService.getMessageActbydate().subscribe((res:any[])=>{
    
    this.startDate=""+(new Date(res[0].date).getFullYear())+"-0"+(new Date(res[0].date).getMonth()+1)+"-0"+(new Date(res[0].date).getDate());
    this.endDate=""+(new Date(res[res.length-1].date).getFullYear())+"-0"+(new Date(res[res.length-1].date).getMonth()+1)+"-0"+(new Date(res[res.length-1].date).getDate());

    for(var i=0;i<res.length;i++){
      //var date=""+(new Date(res[i].date).getFullYear())+"-0"+(new Date(res[i].date).getMonth()+1)+"-0"+(new Date(res[i].date).getDate());
      

      if((new Date(res[i].date).toLocaleDateString())==(new Date(this.startDate1).toLocaleDateString()) && res[i].status=='Resolved')
      {
        console.log("hello");
         this.userMessageCount=res[i].incoming_count;
        this.wizardMessageCount=res[i].outgoing_count;
        this.totalMessageCount=res[i].count;
        this.totalTodayMessageCount='-';
        this.totalActivityUserCount=res[i].user_count;
        this.returnUserCount='3';
        
        
        ff=1;   
      }
     
    } 
    if(ff==0){
    this.userMessageCount='0';
        this.wizardMessageCount='0';
        this.totalMessageCount='0';
        this.totalTodayMessageCount='-';
        this.totalActivityUserCount='0';
        this.returnUserCount='0';
 
    }
  });
}
else if(type=="res")
{
  console.log("hello2222");

  this.inputStartDate=this.startDate1;
    this.inputEndDate=this.endDate;
    var date_diff_indays = function(date1, date2) {
      
      let dt1 = new Date(date1);
      
      let dt2 = new Date(date2);
      return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
      }
      this._httpService.getMessageActbydate().subscribe((res:any[])=>{
         var count = 0; 
       let index=0;
       index=0
      for(var j=0;j<res.length;j++){
        
       if((new Date(res[j].date).toLocaleDateString())==(new Date(this.startDate1).toLocaleDateString())){
          break;
       }
        index++;
      }
      
      var sum_user1=0;
      var sum_user2=0;
      var sum_user3=0;
      var sum_user4=0;
      for(var z=index;z<=date_diff_indays(this.startDate1,this.endDate)+index;z++){
         if(res[z].status=='Resolved'){
          sum_user1+=res[z].incoming_count;
          sum_user2+=res[z].outgoing_count;
          sum_user3+=res[z].count;
          sum_user4+=res[z].user_count
         }
        
        
      }
      console.log(sum_user1)
      console.log(sum_user2)
      console.log(sum_user3)
      this.userMessageCount=sum_user1;
      this.wizardMessageCount=sum_user2;
      this.totalMessageCount=sum_user3;
      this.totalTodayMessageCount='-';
      this.totalActivityUserCount=sum_user4;
      this.returnUserCount='1';

   });

}
if(type=="pen"&& this.endDate=="" )
{
  this._httpService.getMessageActbydate().subscribe((res:any[])=>{
    
    this.startDate=""+(new Date(res[0].date).getFullYear())+"-0"+(new Date(res[0].date).getMonth()+1)+"-0"+(new Date(res[0].date).getDate());
    this.endDate=""+(new Date(res[res.length-1].date).getFullYear())+"-0"+(new Date(res[res.length-1].date).getMonth()+1)+"-0"+(new Date(res[res.length-1].date).getDate());
  for(var i=0;i<res.length;i++){
      if((new Date(res[i].date).toLocaleDateString())==(new Date(this.startDate1).toLocaleDateString()) && res[i].status=='Pending')
      {
        console.log("hello");
        console.log(res[i].incoming_count)
         this.userMessageCount=res[i].incoming_count;
        this.wizardMessageCount=res[i].outgoing_count;
        this.totalMessageCount=res[i].count;
        this.totalTodayMessageCount='-';
        this.totalActivityUserCount=res[i].user_count; 
        this.returnUserCount='1';
        ff=1;   
      }
    }
   if(ff==0)
   {
    console.log("helloin");

    this.userMessageCount='0';
    this.wizardMessageCount='0';
    this.totalMessageCount='0';
    this.totalTodayMessageCount='-'; 
    this.totalActivityUserCount='0';
    this.returnUserCount='0';
      } 
    
  });
}
else if(type=="pen")
{
  console.log("hello2222");

  this.inputStartDate=this.startDate1;
    this.inputEndDate=this.endDate;
    var date_diff_indays = function(date1, date2) {
      
      let dt1 = new Date(date1);
      
      let dt2 = new Date(date2);
      return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
      }
      this._httpService.getMessageActbydate().subscribe((res:any[])=>{
         var count = 0; 
       let index=0;
       index=0
      for(var j=0;j<res.length;j++){
        
       if((new Date(res[j].date).toLocaleDateString())==(new Date(this.startDate1).toLocaleDateString())){
          break;
       }
        index++;
      }
      
      var sum_user1=0;
      var sum_user2=0;
      var sum_user3=0;
      var sum_user4=0;
    for(var z=index;z<=date_diff_indays(this.startDate1,this.endDate)+index;z++){
         if(res[z].status=='Pending'){
          sum_user1+=res[z].incoming_count;
        sum_user2+=res[z].outgoing_count;
        sum_user3+=res[z].count;
          sum_user4+=res[z].user_count;
         }
        
        
      }
      console.log(sum_user1)
      console.log(sum_user2)
      console.log(sum_user3)
      this.userMessageCount=sum_user1;
      this.wizardMessageCount=sum_user2;
      this.totalMessageCount=sum_user3;
      this.totalTodayMessageCount='-';
      this.totalActivityUserCount=sum_user4;
      this.returnUserCount='1';
   });

}
if(type=="assign" && this.endDate==""  )
{
  this._httpService.getMessageActbydate().subscribe((res:any[])=>{
    
    this.startDate=""+(new Date(res[0].date).getFullYear())+"-0"+(new Date(res[0].date).getMonth()+1)+"-0"+(new Date(res[0].date).getDate());
    this.endDate=""+(new Date(res[res.length-1].date).getFullYear())+"-0"+(new Date(res[res.length-1].date).getMonth()+1)+"-0"+(new Date(res[res.length-1].date).getDate());
  for(var i=0;i<res.length;i++){
      if((new Date(res[i].date).toLocaleDateString())==(new Date(this.startDate1).toLocaleDateString()) && res[i].status=='Assigned')
      {
        console.log("hello");
         this.userMessageCount=res[i].incoming_count;
        this.wizardMessageCount=res[i].outgoing_count;
        this.totalMessageCount=res[i].count;
        this.totalTodayMessageCount='-';  
        this.totalActivityUserCount=res[i].user_count;
        this.returnUserCount='1';
        ff=1;   
      }
   
    } 
    if(ff==0){
    this.userMessageCount='0';
        this.wizardMessageCount='0';
        this.totalMessageCount='0';
        this.totalTodayMessageCount='-'; 
        this.totalActivityUserCount='0';
        this.returnUserCount='0';

    }
  });
}
else if(type=="assign")
{
  console.log("hello2222");

  this.inputStartDate=this.startDate1;
    this.inputEndDate=this.endDate;
    var date_diff_indays = function(date1, date2) {
      
      let dt1 = new Date(date1);
      
      let dt2 = new Date(date2);
      return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
      }
      this._httpService.getMessageActbydate().subscribe((res:any[])=>{
         var count = 0; 
       let index=0;
       index=0
      for(var j=0;j<res.length;j++){
        
       if((new Date(res[j].date).toLocaleDateString())==(new Date(this.startDate1).toLocaleDateString())){
          break;
       }
        index++;
      }
      
      var sum_user1=0;
      var sum_user2=0;
      var sum_user3=0;
      var sum_user4=0;
       for(var z=index;z<=date_diff_indays(this.startDate1,this.endDate)+index;z++){
         if(res[z].status=='Assigned'){
          sum_user1+=res[z].incoming_count;
        sum_user2+=res[z].outgoing_count;
        sum_user3+=res[z].count;
        sum_user4+=res[z].user_count;
         }
        
        
      }
      console.log(sum_user1)
      console.log(sum_user2)
      console.log(sum_user3)
      this.userMessageCount=sum_user1;
      this.wizardMessageCount=sum_user2;
      this.totalMessageCount=sum_user3;
      this.totalTodayMessageCount='-';
      this.totalActivityUserCount=sum_user4;
      this.returnUserCount='1';

   });

}
   
  }


  constructor(public http: DashboardserviceService,private router2:ActivatedRoute,private router: Router,private _httpService:DashboardserviceService,public authService: AuthService) { }
  
  ngOnInit() {
    this._httpService.getUserActivity().subscribe((res:any[])=>{
      console.log(localStorage.getItem('token'));
      console.log(res);
      for (let index = 0; index < res.length; index++) {
        this.newUserCount=res[0].Count;
        this.returnUserCount=res[1].Count;
        this.lifetimeUserCount=res[2].Count;
        this.totalActivityUserCount=500;
        //this.totalActivityUserCount=this.newUserCount+this.returnUserCount+this.lifetimeUserCount;
        console.log(this.newUserCount);
        this.Useractpercentage=(this.newUserCount/this.totalActivityUserCount)*100;
        this.Useractpercentage = this.Useractpercentage.toFixed(2);
        this.returnactpercentage=(this.returnUserCount/this.totalActivityUserCount)*100;
        this.returnactpercentage = this.returnactpercentage.toFixed(2);
      }
      
    });


    this._httpService.getMessageActivity().subscribe((res:any[])=>{
      console.log(res);
      
     // for (let index = 0; index < res.length; index++) {
        this.userMessageCount=res[0].User_count;
        this.wizardMessageCount=res[0].Wizard_count;
        this.totalMessageCount=res[0].total;
        this.totalTodayMessageCount=res[0].User_last;
      //}
      this.WizardMessPercent=(this.wizardMessageCount/this.totalMessageCount)*100;
      this.WizardMessPercent = this.WizardMessPercent.toFixed(2);
      this.userMessPercent=(this.userMessageCount/this.totalMessageCount)*100;
      this.userMessPercent = this.userMessPercent.toFixed(2);
    });
    /////ticket
    this._httpService.getTicketsDetails().subscribe((res:any[])=>{
      console.log(res[0].status);
      
     // for (let index = 0; index < res.length; index++) {
        this.resolvedchats=res[2].count;
        this.pendingchats=res[1].count;
        this.assignedchats=res[0].count;
        

      
  
      //}
      /*this.WizardMessPercent=(this.wizardMessageCount/this.totalMessageCount)*100;
      this.WizardMessPercent = this.WizardMessPercent.toFixed(2);
      this.userMessPercent=(this.userMessageCount/this.totalMessageCount)*100;
      this.userMessPercent = this.userMessPercent.toFixed(2);*/
    });


  /*  var myWords = [];
    var avarage=0;
    var AllCount=0;
    this._httpService.getWords().subscribe((res:any[])=>{
      this.startDate=""+(new Date(res[0].date).getFullYear())+"-0"+(new Date(res[0].date).getMonth()+1)+"-0"+(new Date(res[0].date).getDate());
          console.log(this.startDate)
      this.endDate=""+(new Date(res[res.length-1].date).getFullYear())+"-0"+(new Date(res[res.length-1].date).getMonth()+1)+"-0"+(new Date(res[res.length-1].date).getDate());
        this.inputStartDate= this.startDate;
        this.inputEndDate=this.endDate;
    });
    this._httpService.getAllWords().subscribe((res:any[])=>{
      for(var i=0;i<100;i++){
        myWords.push({
          word:res[i].word,
          size:res[i].count
        });
        
        AllCount=AllCount+res[i].count;
      }
    
      avarage=AllCount/res.length;
   // myWords=[{word: "Running", size: "1200"}, {word: "Surfing", size: "2000"}, {word: "Climbing", size: "1200"}, {word: "Kiting", size: "3000"}, {word: "Sailing", size: "2120"}, {word: "Snowboarding", size: "2534"} ]
    
var margin = {top: 10, right: 10, bottom: 150, left: 10},
    width = 750 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
          
var layout = cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
  .padding(5)        //space between words
  .rotate(function() { return ~~(Math.random() * 2) * 90; })
  .fontSize(function(d) { return d.size/(avarage*2); })      // font size of words
  .on("end", draw);
layout.start();


function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size; })
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
        .style("fill", "rgb("+getRandomInt(200)+","+getRandomInt(200)+","+getRandomInt(200)+ ")");
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log();

var div = d3.select("body").append("div")
     .attr("class", "tooltip-donut")
     .style("opacity", 0)
     .style("position", "absolute")
     .style("text-align","center")
     .style("padding",".5rem")
     .style("background","#FFFFFF")
     .style("color","#313639")
     .style("border","1px solid #313639")
     .style("border-radius","8px")
     .style("pointer-events","none")
     .style("font-size","1rem");

function handleMouseOver(d, i) {  // Add interactivity
  
 div.transition()
               .duration(50)
               .style("opacity", 1);

  d3.select(this).transition()
               .duration('50')
               .attr('opacity', '.85');
          let num = (d.text+" : "+(parseInt(d.size)*(avarage*2)*1.00084).toFixed(0)).toString();
  div.html(num)
     .style("left", (d3.event.pageX + 10) + "px")
     .style("top", (d3.event.pageY - 15) + "px");
}

function handleMouseOut(d, i) {
  div.transition()
               .duration('50')
               .style("opacity", 0);

  d3.select(this).transition()
               .duration('50')
               .attr('opacity', '1');
}

});*/
  
  



    ////////////////////////////////////////////////live message Graph//////////////////////////////////////

    /*var lineData = [];
    var maxCount=0;
    var countArray=[];
    this._httpService.getLiveActivity().subscribe((res:any[])=>{
        for(let i=res.length-1;i>=(res.length-7);i--){
          var t=res[i].Time.split(":");
          var dateq = new Date(0);
          dateq.setHours(t[0]); // specify value for hours here
          dateq.setMinutes(t[1]); // specify value for minutes here
          countArray.push(res[i].Count);
          var obj ={date:dateq,user_count:res[i].Count};
          lineData.push(obj);
        }
        console.log(lineData);
        maxCount=Math.max(...countArray)

  var height  = 120;
  var width   = 450;
  var hEach   = 30;

  var margin = {top: 20, right: 25, bottom: 18, left: 10};
  
  width =     width - margin.left - margin.right;
  height =    height - margin.top - margin.bottom;
  
  var svg = d3.select('svg')
    .attr("width",  width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  var x = d3.scaleTime().range([0, width]);
    
  x.domain(d3.extent(lineData, function(d) { return d.date; }));
  
  
  var y = d3.scaleLinear().range([height, 0]);
  
  
  y.domain([d3.min(lineData, function(d) { return d.user_count; }) - 5, maxCount]);
  
  var valueline = d3.line()
          .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.user_count);  })
          .curve(d3.curveMonotoneX);
  
  svg.append("path")
      .data([lineData]) 
      .attr("class", "line")  
    .attr("d", valueline) 
    .attr("fill","none")
    .attr("stroke", "#ffab00")
    .attr("stroke-width", "3");
  
  //  var xAxis_woy = d3.axisBottom(x).tickFormat(d3.timeFormat("Week %V"));
  var xAxis_woy = d3.axisBottom(x).ticks(11).tickFormat(d3.timeFormat("%H:%M")).tickValues(lineData.map(d=>d.date));
  svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis_woy);
  
  //  Add the Y Axis
  //  svg.append("g").call(d3.axisLeft(y));
  
  svg.selectAll(".dot")
      .data(lineData)
      .enter()
      .append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d) { return x(d.date) })
      .attr("cy", function(d) { return y(d.user_count) })
      .attr("r", 5);  
  
  
  svg.selectAll(".text")
      .data(lineData)
      .enter()
      .append("text") // Uses the enter().append() method
      .attr("class", "label") // Assign a class for styling
      .attr("x", function(d, i) { return x(d.date) })
      .attr("y", function(d) { return y(d.user_count) })
      .attr("dy", "-5")
      .text(function(d) {return d.user_count; });
  
  svg.append('text')                                     
        .attr('x', 10)              
        .attr('y', -5)             
    
    });*/
    
  }


  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    console.log("name",this.nameFormControl.value)
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      msg: this.msgFormControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          ` ${user.name} is successfully register and mail has been sent `
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }




 
   
  
  
 
 
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}