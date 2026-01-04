# Notas Rápidas (Fast Notes)

Aplicação simples de notas rápidas que salva localmente no navegador usando `localStorage`.

**Funcionalidade principal**
- Criar notas rápidas com cor/gradiente aleatório.
- Edição em tempo real com salvamento automático em `localStorage`.
- Remover notas.

**Como usar**
- Abra [index.html](index.html) no navegador.
- (Opcional) Para servir localmente e evitar restrições de arquivos, execute na raíz do projeto:

```bash
python3 -m http.server 8000
# e então abra http://localhost:8000
```

**Estrutura do projeto**
- [index.html](index.html) — marcação principal.
- [script.js](script.js) — lógica de criação/edição/remoção e persistência em `localStorage`.
- [style.css](style.css) — estilos das notas e layout básico.

**Observações de desenvolvimento**
- As notas são armazenadas na chave `dbItems` do `localStorage` como um array de objetos `{ text, color }`.
- O arquivo `script.js` contém as funções principais: `loadItems()`, `addHTML()`, `randomGradient()` e `verifyNulls()`.

**Problemas conhecidos / Sugestões**
- A propriedade `display: contents;` em `.content` pode ter comportamento diferente entre navegadores; trocar para um contêiner flex/grid pode melhorar compatibilidade.
- Considere adicionar limite máximo de caracteres e confirmação ao excluir notas.

**Contribuindo**
- Abra uma issue descrevendo a alteração proposta ou envie um pull request.

