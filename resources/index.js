
//Creacion de clase para Placa.
class Plate {
    constructor(plate,date,hour){
        this.plate = plate.toString();
        this.date = date.toString();
        this.time = hour.toString();
    }

    infoSubmited(callback) {
        
//Obtener valores para el proceso de validacion de placa.

        const dateDay = new Date(`${this.date.replace(/-/g,'/')},${this.time}`);
        const plateLastDigit = parseInt(this.plate.charAt(this.plate.length-1));
        const day = DAYS[dateDay.getDay()];
        const hourDay = dateDay.getHours();
        const minHour = dateDay.getMinutes();

        const rest = RESTRICTIONS[day].plate_lastDigit;


//Logica para identificar el ultimo digito de la placa y el horario de circulación.

        if(rest.includes(plateLastDigit)) {
            if((hourDay>=7 && hourDay<=9) || (hourDay>=16 && hourDay<=19)) {
               if((hourDay===9 || hourDay===19) && (minHour>=30)) {
                   return callback(true, `Puede circular`);
               }
               return callback(false, `No puede circular`);
            }
            else {
                return callback(true, `Puede circular`);
            }
        }
        return callback(true, `Puede circular`);

    }
}

//Clase que maneja la funciones de la interfaz de usuario.
class USER_INTERFACE {
    showAlert(message, name) {
        document.getElementById(name).innerText = message;

        setTimeout(function() {
            document.querySelector('#err_message').innerText='';
        }, 3000);
    }

    plateValidation(plate){
        let exp = new RegExp(/^[a-z]{3,3}-\d{4,4}$/);
        return exp.test(plate);
    }

    cleanInfoMessage() {
        document.querySelector('#info_message').innerText='';
    }
}

document.getElementById('plate_form').addEventListener('submit', function analizeInfo(e) {
    e.preventDefault();


    //Creacion de instacia para interfaz con el usuario.

    const ui = new USER_INTERFACE();

    const plate = document.getElementById('plate').value.toLowerCase().trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;


    if(!ui.plateValidation(plate)){
        ui.showAlert('Inserte una placa valida, ejem: ABC-1234', 'err_message');
    }
    else {
        if((plate == '' || date == '' || time == '')) {
            ui.showAlert('Por favor, llenar todos los campos', 'err_message');
        }
        else {
            const objPlate = new Plate(plate,date,time);
            const msg = document.getElementById('info_message');

            objPlate.infoSubmited((e,i) => {
                if(e){
                    msg.style.color = 'green';
                    msg.innerText = i;
                }
                else {
                    msg.style.color = 'brown';
                    msg.innerText = i;
                }
            });

            setTimeout(function() {
                ui.cleanInfoMessage();
            }, 2000);

        }
    }

});

module.exports = Plate;
