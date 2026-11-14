import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';

@Injectable()
export class StorageService {
  private client?: SupabaseClient;

  private get bucket(): string {
    return process.env.SUPABASE_BUCKET || 'anexos';
  }

  // Cliente criado sob demanda: a API sobe mesmo sem as chaves do Supabase.
  private get supabase(): SupabaseClient {
    if (!this.client) {
      const url = process.env.SUPABASE_URL;
      const key = process.env.SUPABASE_SERVICE_KEY;
      if (!url || !key) {
        throw new InternalServerErrorException(
          'Supabase não configurado: defina SUPABASE_URL e SUPABASE_SERVICE_KEY no .env',
        );
      }
      this.client = createClient(url, key);
    }
    return this.client;
  }

  // Envia o arquivo (em memória, file.buffer) ao bucket e devolve a URL pública.
  async enviar(arquivo: Express.Multer.File): Promise<string> {
    // Nome aleatório: nunca confiamos no nome original (que pode ter
    // caracteres inválidos ou colidir com outro arquivo).
    const caminho = `tarefas/${randomUUID()}-${arquivo.originalname}`;

    const { error } = await this.supabase.storage
      .from(this.bucket)
      .upload(caminho, arquivo.buffer, { contentType: arquivo.mimetype });
    if (error) throw new InternalServerErrorException(error.message);

    const { data } = this.supabase.storage
      .from(this.bucket)
      .getPublicUrl(caminho);
    return data.publicUrl;
  }
}
