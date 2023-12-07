export interface Solicitacao {
    id?: number;
    categoria: string;
    assunto: string;
    descricao: string;
    resposta?: string;
    responsavelAtendimento?: string;
    solicitanteAtendimento: string;
    dataCriacao?: Date; 
    dataResposta?: Date; 
    dataFinalizacao?: Date; 
    prioridade?: string;
    statusAndamentoOuFinalizado?: boolean; 
    responsavelFinalizador?: string;
}