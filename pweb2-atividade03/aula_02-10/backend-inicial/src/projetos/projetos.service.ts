import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { Projeto } from './entities/projeto.entity';

@Injectable()
export class ProjetosService {
  private projetos: Projeto[] = [
    { id: 1, nome: 'Faculdade', descricao: 'Trabalhos e provas', cor: 'azul' },
    { id: 2, nome: 'Casa', cor: 'verde' },
  ];
  private proximoId = 3;

  create(createProjetoDto: CreateProjetoDto) {
    const novo: Projeto = { id: this.proximoId++, ...createProjetoDto };
    this.projetos.push(novo);
    return novo;
  }

  findAll() {
    return this.projetos;
  }

  findOne(id: number) {
    const projeto = this.projetos.find((p) => p.id === id);
    if (!projeto) {
      throw new NotFoundException(`Projeto ${id} não encontrado`);
    }
    return projeto;
  }

  update(id: number, updateProjetoDto: UpdateProjetoDto) {
    const projeto = this.findOne(id);
    Object.assign(projeto, updateProjetoDto);
    return projeto;
  }

  remove(id: number) {
    const projeto = this.findOne(id);
    this.projetos = this.projetos.filter((p) => p.id !== projeto.id);
  }
}