/**
 * Creamos la clase Videojuego con sus atributos: identificador, título, compañía, imagen y valoración media.
 * El identificador será un atributo privado que podrá consultarse pero no modificarse y se autoincrementará
 * con cada nuevo objeto de la clase Videojuego gracias a contadorId.
 * El resto de atributos serán públicos y podrán ser modificados.
 */
export class Videojuego{

    private _id : number = 0;

    private static contadorId : number = 1;

    public titulo : string = "";
    public compania : string = "";
    public imagen : string = "";
    public valoracionMedia : number = 0;

    constructor (titulo:string, compania:string,imagen:string,valoracionMedia:number ){
        this._id = Videojuego.contadorId++;
        this.titulo = titulo;
        this.compania = compania;
        this.imagen = imagen;
        this.valoracionMedia = valoracionMedia;

    }

    public get id() : number{
        return this._id;
    }
}