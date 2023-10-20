class Grupo{
    constructor(codigoGrupo,numeroAlumnos){
        this.codigoGrupo = codigoGrupo;
        this.numeroAlumnos = numeroAlumnos;
    }
}

class Instituto{
    constructor(codigoInstituto, nombre){
        this.codigoInstituto = codigoInstituto;
        this.nombre = nombre;
        this.grupos = [];
    }

    getCodigoInstituto(){
        return this.codigoInstituto
    }

    getNumeroTotalAlumnos(){
        var totalAlumnos = 0
        for(var i = 0; i < this.grupos.length; i++){
            totalAlumnos += this.grupos[i].numeroAlumnos;
        }
        return totalAlumnos
    }

    addGrupo(grupo){
        this.grupos.push(grupo);
    }
}

var grupo1 = new Grupo('G1', 30);
var grupo2 = new Grupo('G2', 25);
var grupo3 = new Grupo('G3', 35);

var instituto = new Instituto('I1', 'I.E.S. Mateo');

instituto.addGrupo(grupo1);
instituto.addGrupo(grupo2);
instituto.addGrupo(grupo3);

console.log("Codigo del instituto :" + instituto.getCodigoInstituto());

console.log("Numero de alumnos totales :" + instituto.getNumeroTotalAlumnos());