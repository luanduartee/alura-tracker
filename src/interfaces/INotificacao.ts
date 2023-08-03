export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO,
  }

export default interface INotificacao {
    id: number,
    texto: string,
    titulo: string,
    tipo: TipoNotificacao
}