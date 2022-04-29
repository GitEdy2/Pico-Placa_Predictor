class Plate {
    constructor(plate,date,hour){
        this.plate = plate.toString();
        this.date = date.toString();
        this.time = hour.toString();
    }


    infoSubmited(callback) {

        const dateDay = new Date(`${this.date.replace(/-/g,'/')},${this.time}`);
        const plateLastDigit = parseInt(this.plate.charAt(this.plate.length-1));
        const day = DAYS[dateDay.getDay()];
        const hourDay = dateDay.getHours();
        const minHour = dateDay.getMinutes();


        const rest = RESTRICTIONS[day].plate_lastDigit;


        if(rest.includes(plateLastDigit)) {
            if((hourDay>=7 && hourDay<=9) || (hourDay>=16 && hourDay<=19)) {
               if((hourDay===9 || hourDay===19) && (minHour>30)) {
                   return callback (true, `Puede circular`);
               }
               return callback(false, `No puede circular`);
            }
            else {
                return callback(false, `Puede circular`);
            }
        }
        return callback(true, `Puede circular`);

    }
}