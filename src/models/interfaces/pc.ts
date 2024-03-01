export interface Pc{
    escuela:string;
    nombre:string;
    mac:string;
    isWol:boolean;
    //caracteristicas va a tener su tipo de procesador, memoria ram, disco duro, etc
    caracteristicas:string;
    
}
export interface componente{
    tipo:string;
    marca:string;
    modelo:string;
    nSerie:string;
}
export interface HDD extends componente{
    capacidad:string;

}
export interface clave {
    pass:string;
    tipo:string;
 

}
export interface claveUsuario extends clave{
    usuario:string;
    permisos:string;

}
export interface claveBios extends clave{
    
}
export interface anydesk extends clave{
    id:string;
    
}
export interface teamviewer extends clave{
    id:string;
      
}
export interface RAM extends componente{
    capacidad:string;

}
export interface Procesador extends componente{
    generacion?:string;
    nucleos?:string;
    frecuencias?:string;
    
}
export interface Monitor extends componente{

}
export interface IMotherboard extends componente{
}