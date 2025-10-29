import { ResolveFn, Routes } from '@angular/router';
import { ListarCategorias } from './listar/listar-categorias';
import { CadastrarCategoria } from './cadastrar/cadastrar-categoria';
import { EditarCategoria } from './editar/editar-categoria';
import { ExcluirCategoria } from './excluir/excluir-categoria';
import { ListagemCategoriasModel } from './categoria.models';
import { CategoriaService } from './categoria.service';
import { inject } from '@angular/core';
import { delay } from 'rxjs';

const listagemCategoriasResolver: ResolveFn<ListagemCategoriasModel[]> = () => {
  const categoriaService = inject(CategoriaService);

  return categoriaService.selecionarTodas().pipe(delay(3000));
}

export const categoriaRoutes: Routes = [
  {path: '', component: ListarCategorias, resolve: {categorias: listagemCategoriasResolver} },
  {path: 'cadastrar', component: CadastrarCategoria},
  {path: 'editar/:id', component: EditarCategoria},
  {path: 'excluir/:id', component: ExcluirCategoria}
];
