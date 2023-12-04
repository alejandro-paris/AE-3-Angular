/**
 * Creamos la clase Videojuego con sus atributos: identificador, título, compañía, imagen y valoración media.
 * El identificador será un atributo privado que podrá consultarse pero no modificarse y se autoincrementará
 * con cada nuevo objeto de la clase Videojuego gracias a contadorId.
 * El resto de atributos serán públicos y podrán ser modificados.
 */
export class Videojuego{

    private _id: number = 0;

    private static contadorId : number = 1;

    private _titulo: string = "";
    
    private _compania: string = "";
    
    private _imagen: string = "";
    
    private _valoracionMedia: number = 0;
    

    constructor (){}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    public get compania(): string {
        return this._compania;
    }
    public set compania(value: string) {
        this._compania = value;
    }
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    public get valoracionMedia(): number {
        return this._valoracionMedia;
    }
    public set valoracionMedia(value: number) {
        this._valoracionMedia = value;
    }
}