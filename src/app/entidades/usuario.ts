export class Usuario {

    private _id : number = 0;

    private static contadorId : number = 1;

    public nombre : string = "";
    public password : string = "";


    constructor(nombre:string, password:string){
        this._id = Usuario.contadorId++;
        this.nombre = nombre;
        this.password = password;

    }

    public get id() : number{
        return this._id;
    }

}