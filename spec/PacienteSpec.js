describe ("Paciente", function() {

    it("deve calcular o imc", function() {

        var thiago = new Paciente("Thiago", 25, 59, 1.72);
        
        expect(thiago.imc()).toEqual(59 / (1.72 * 1.72));
    });

});