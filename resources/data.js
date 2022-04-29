

const DAYS = ['monday','tuesday','wednesday','thursday','friday']

const RESTRICTIONS = {
    monday:{
        plate_lastDigit: [1,2]
    },
    
    tuesday:{
        plate_lastDigit: [3,4]
    },

    wednesday:{
        plate_lastDigit: [5,6]
    },

    thursday:{
        plate_lastDigit: [7,8]
    },

    friday:{
        plate_lastDigit: [9,0]
    },

    hoursRestriction: {
        morning: '7:00 - 9:30',
        evening: '16:00 - 19:30'
    }
}