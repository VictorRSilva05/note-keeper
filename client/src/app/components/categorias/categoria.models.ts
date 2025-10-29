export interface ListagemCategoriasApiResponse {
  registros: ListagemCategoriasModel[];
}

export interface ListagemCategoriasModel {
  id: string;
  titulo: string;
}

export interface CadastrarCategoriaModel {
  titulo?: string | null | undefined;
}

export interface CadastrarCategoriaResponseModel {
  id: string;
}
