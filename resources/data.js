

const DAYS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

const RESTRICTIONS = {
    sunday:{
        plate_lastDigit: []
    },
    
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

    saturday:{
        plate_lastDigit: []
    }
};