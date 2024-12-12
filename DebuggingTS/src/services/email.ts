export async function getBaseEmail(senderName : string) {
    let base = `Olá ${senderName}, gostaria de me inscrever para uma vaga`;
    base += "estou deixando o meu curriculo"
    return base
}