let Plate = require ('../resources/index');

test('InfoSubmited to the program to analize information', () => { 
   it('plate should called function',() => {
    const plate = new Plate();
        jest.spyON(plate,'infoSubmited');

        expect(plate.infoSubmited(callback).toHaveBeenCalledTimes(1));

   });
});