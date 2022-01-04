const dailyOutput = document.getElementById('menuLinkDaily');
const monthlyOutput = document.getElementById('menuLinkMonthly');
const weeklyOutput = document.getElementById('menuLinkWeekly');

const workObject = {
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
};

const playObject = {
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
};

const studyObject = {
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
};

const exerciseObject = {
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
};

const socialObject = {
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
};

const selfCareObject = {
    "title": "SelfCare",
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
};

let mainObject = {"work" : workObject, "play": playObject, "study": studyObject, "exercise": exerciseObject, "social": socialObject,"selfcare": selfCareObject};
// 
dailyOutput.addEventListener('click', dailyClick);
function dailyClick() {

    for (let property in mainObject) {
        let htmlId = property; 
        let hrs = htmlId + 'hrs';
        let weeks = htmlId + "weeks";

        let theObject = mainObject[property]; 
        document.getElementById(hrs).innerHTML =  theObject.timeframes.daily.current + "hrs";
        document.getElementById(weeks).innerHTML = "Previous Day - " + theObject.timeframes.daily.previous + "hrs";
}};

monthlyOutput.addEventListener('click', monthlyClick);
function monthlyClick() {

    for (let property in mainObject) {
        let htmlId = property; 
        let hrs = htmlId + 'hrs'; 
        let weeks = htmlId + "weeks";  

        let theObject = mainObject[property]; 
        document.getElementById(hrs).innerHTML =  theObject.timeframes.monthly.current + "hrs";
        document.getElementById(weeks).innerHTML = "Last month - " + theObject.timeframes.monthly.previous + "hrs";
}};

weeklyOutput.addEventListener('click', weeklyClick);
function weeklyClick() {

    for (let property in mainObject) {
        let htmlId = property;  
        let hrs = htmlId + 'hrs';
        let weeks = htmlId + "weeks";

        let theObject = mainObject[property]; 
        document.getElementById(hrs).innerHTML =  theObject.timeframes.weekly.current + "hrs";
        document.getElementById(weeks).innerHTML = "Last week - " + theObject.timeframes.weekly.previous + "hrs";
}};



