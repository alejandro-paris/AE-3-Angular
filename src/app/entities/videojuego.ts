export class Videojuego {

    private _id: number = 0;

    private _titulo: string = "";

    private _compania: string = "";

    private _imagen: string = "";

    private _valoracion: number = 0;


    constructor (titulo:string, compania:string, imagen:string, valoracion:number) {
        this._titulo = titulo;
        this._compania = compania;
        this._imagen = imagen;
        this._valoracion = valoracion;
    }

    public get id(): number {
        return this._id;
    }
    public get titulo(): string {
        return this._titulo;
    }
    public get compania(): string {
        return this._compania;
    }
    public get imagen(): string {
        return this._imagen;
    }
    public get valoracion(): number {
        return this._valoracion;
    }

    public set id(value: number) {
        this._id = value;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    public set compania(value: string) {
        this._compania = value;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    public set valoracion(value: number) {
        this._valoracion = value;
    }

}
