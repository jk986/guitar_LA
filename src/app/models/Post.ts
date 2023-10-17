export class Post{
    titulo:string;
    contenido:string;
    imagen:any;
    url:string;
    publishedAt?:string
    constructor(){
        this.titulo = '';
        this.contenido = '',
        this.imagen = '';
        this.url = '';
    }
}