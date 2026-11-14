import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private client?: Resend;

  // Cliente criado sob demanda; sem a chave, apenas avisa.
  private get resend(): Resend | null {
    if (!this.client) {
      const key = process.env.RESEND_API_KEY;
      if (!key) return null;
      this.client = new Resend(key);
    }
    return this.client;
  }

  async tarefaCriada(para: string, titulo: string) {
    if (!this.resend) {
      this.logger.warn('RESEND_API_KEY não definida: e-mail não enviado.');
      return;
    }
    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM || 'Tarefas <onboarding@resend.dev>',
      to: para,
      subject: 'Nova tarefa criada',
      html: `<p>Sua tarefa <b>${escapeHtml(titulo)}</b> foi criada.</p>`,
    });
    if (error) throw new Error(error.message);
  }
}

// O título vem do usuário: escapamos antes de colocar no HTML do e-mail.
function escapeHtml(texto: string): string {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
