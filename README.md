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
- Há um provável erro tipográfico em `style.css`: `padding-right: 1b0px;` — deve ser `10px`.
- A propriedade `display: contents;` em `.content` pode ter comportamento diferente entre navegadores; trocar para um contêiner flex/grid pode melhorar compatibilidade.
- Considere adicionar limite máximo de caracteres e confirmação ao excluir notas.

**Contribuindo**
- Abra uma issue descrevendo a alteração proposta ou envie um pull request.

**Licença**
- Sem licença especificada. Adicione um arquivo `LICENSE` se desejar publicar com termos específicos.

---

Se quiser, eu posso:
- Corrigir o `padding-right` do `style.css`.
- Adicionar um servidor de desenvolvimento com `package.json` e scripts.
- Implementar confirmação de exclusão ou exportação/importação das notas.

Diga qual dessas ações prefere que eu execute a seguir.
