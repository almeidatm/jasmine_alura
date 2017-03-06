describe("Consulta", function() {

    var thiago;

    beforeEach(function() {
        var thiago = new PacienteBuilder().constroi();
    });

    describe("consultas do tipo retorno", function() {
        it("nao deve cobrar nada numa consulta tipo retorno", function() {
            var consulta = new Consulta(thiago, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("consultas com procedimentos", function() {
        it("deve cobrar 25 por cada procedimento comum", function() {
            var consulta = new Consulta(thiago, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);
        });
        it("deve cobrar preco especifico dependendo do procedimento", function(){
            var consulta = new Consulta(thiago, ["proc1", "raio-x", "gesso", "proc2"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 32 + 25);
        });
    });

    describe("consultas particulares", function() {
        it("deve cobrar preco dobrado pra consulta particular com procedimentos simples", function(){
            var consulta = new Consulta(thiago, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(100);
        });
        it("deve cobrar preco dobrado pra consulta particular com procedimentos especiais", function(){
            var consulta = new Consulta(thiago, ["raio-x", "gesso"], true, false);

            expect(consulta.preco()).toEqual((55 + 32) * 2);
        });
    });

});