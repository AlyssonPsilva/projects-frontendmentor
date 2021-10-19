const dataList=[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const btns= document.querySelectorAll(".nav-link");
const timeList=document.querySelectorAll(".card-time");
const timePrevious=document.querySelectorAll(".previous");
const cardsTime=document.querySelectorAll(".card-time");

  

function changeTime(value){
  if (value==0) {
    for(i=0; i<=cardsTime.length; i++){
      cardsTime[i].innerText= dataList[i].timeframes.daily.current + "hrs";
      timePrevious[i].innerText= "Last Day"+" "+"-"+" "+dataList[i].timeframes.daily.previous + "hrs";
      
    }
  
  }
    else if(value==1){
      for(i=0; i<=cardsTime.length; i++){
      cardsTime[i].innerText= dataList[i].timeframes.weekly.current + "hrs";
      timePrevious[i].innerText= "Last Week"+" "+"-"+" "+dataList[i].timeframes.weekly.previous + "hrs";

      }
    
    }
    else if(value==2){
      for(i=0; i<=cardsTime.length; i++){
      cardsTime[i].innerText= dataList[i].timeframes.monthly.current + "hrs";
      timePrevious[i].innerText= "Last Month"+" "+"-"+" "+dataList[i].timeframes.monthly.previous + "hrs";
      }
      
    }
    
  }


    btns[1].classList.add("active-link");
    
     btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
         
         switch(i){
          case 0:
          btns[0].classList.add("active-link");
          btns[1].classList.remove("active-link");
          btns[2].classList.remove("active-link");
          break;
          case 1:
          btns[1].classList.add("active-link");
          btns[0].classList.remove("active-link");
          btns[2].classList.remove("active-link");
          break;
          case 2:
          btns[2].classList.add("active-link");
          btns[1].classList.remove("active-link");
          btns[0].classList.remove("active-link");
          break;

         }
          
         changeTime(i);


        });
      });

      changeTime(1);



    

  


