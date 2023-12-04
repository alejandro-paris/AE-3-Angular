
export class Usuario {

    private _user: string = ""
    private _pass: string = ""
   

    constructor(){}

    public get user(): string {
        return this._user
    }
    public set user(value: string) {
        this._user = value
    }
    public get pass(): string {
        return this._pass
    }
    public set pass(value: string) {
        this._pass = value
    }

    public toString() : string {
        return `user: ${this.user}, pass: ${this.pass}}`
    }
}