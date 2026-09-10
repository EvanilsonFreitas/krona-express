@AGENTS.md

# Regras de segurança do projeto

Todas as alterações realizadas neste projeto — código, arquivos, dependências,
refatorações, commits, push, Pull Requests, merges, configuração, build, deploy e
qualquer implementação futura de backend, API, autenticação ou banco de dados —
devem obrigatoriamente respeitar, de forma integral, o arquivo
[`SECURITY_RULES.md`](./SECURITY_RULES.md).

Esse arquivo deve ser lido antes de qualquer alteração no projeto.

Essas regras são permanentes e têm precedência sobre qualquer solicitação de
implementação que possa reduzir a segurança do projeto. Nunca alterar, remover,
flexibilizar ou ignorar `SECURITY_RULES.md`, `CLAUDE.md` ou `.gitignore` sem
autorização humana explícita. Caso uma solicitação entre em conflito com essas
premissas, não contornar a regra: sinalizar o conflito e propor uma alternativa
segura.

Nenhuma IA — incluindo assistentes de código — pode constar como autor, coautor,
participante ou colaborador de commits, Pull Requests ou arquivos deste projeto.
Não adicionar trailers `Co-Authored-By` de IA, assinaturas, badges, ícones ou
textos do tipo "Generated with AI" / "Created by AI". Este comportamento está
desativado para o projeto em `.claude/settings.json` (`includeCoAuthoredBy: false`)
e não deve ser reativado.
