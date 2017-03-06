describe("Maior e Menor", function() {

    it("deve entender numeros em ordem nao sequencial", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });
    it("deve entender numeros em ordem decrescente", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([10,9,8,7]);

        expect(algoritmo.pegaMaior()).toEqual(10);
        expect(algoritmo.pegaMenor()).toEqual(7);
    });
    it("deve entender numeros em ordem crescente", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([7,8,9,10]);

        expect(algoritmo.pegaMaior()).toEqual(10);
        expect(algoritmo.pegaMenor()).toEqual(7);
    });
    it("deve entender numeros em uma lista de um unico elemento", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([7]);

        expect(algoritmo.pegaMaior()).toEqual(7);
        expect(algoritmo.pegaMenor()).toEqual(7);
    });

});