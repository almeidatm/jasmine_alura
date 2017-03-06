function PacienteBuilder() {

    var nome = "Thiago";
    var idade = 25;
    var peso = 60;
    var altura = 1.70;

    var clazz = {

        constroi : function() {
            return Paciente(nome, idade, peso, altura);
        },
        comIdade : function(valor) {
            idade = valor;
            return this;
        },
        comPeso : function(valor) {
            peso = valor;
            return this;
        },
        comAltura : function(valor) {
            altura = valor;
            return this;
        }

    };

    return clazz;

}