export interface Responsavel {
    id?:number;
    nome:string;
    cpf:string;
    rg:string;
    'tipo-responsavel':string;
    cargo:string;
    email:string;
    telefone:string;
    created_at?;
    updated_at?;
}