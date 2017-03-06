describe("Consulta", function() {

    it("nao deve cobrar nada numa consulta tipo retorno", function() {
        var thiago = new Paciente("Thiago", 25, 59, 1.72);
        var consulta = new Consulta(thiago, [], true, true);

        expect(consulta.preco()).toEqual(0);
    });
    it("deve cobrar 25 por cada procedimento comum", function() {
        var thiago = new Paciente("Thiago", 25, 59, 1.72);
        var consulta = new Consulta(thiago, ["proc1", "proc2"], false, false);

        expect(consulta.preco()).toEqual(50);
    });
    it("deve cobrar preco especifico dependendo do procedimento", function(){
        var thiago = new Paciente("Thiago", 25, 59, 1.72);
        var consulta = new Consulta(thiago, ["proc1", "raio-x", "gesso", "proc2"], false, false);

        expect(consulta.preco()).toEqual(25 + 55 + 32 + 25);
    });
    
});