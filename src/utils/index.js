export function getSpriteInfo(data) {
  console.log(data);
}

export function SvgIcon(BrowserSpriteSymbol) {
  const iconPath = process.env.NODE_ENV === 'development'
    ? `#${BrowserSpriteSymbol.id}`
    : BrowserSpriteSymbol.url;

  return `
    <svg class="icon">
      <use xlink:href="${iconPath}"></use>
    </svg>
  `;
}

export function createIcon(BrowserSpriteSymbol) {
  const tmpl = document.createElement('template');
  tmpl.innerHTML = SvgIcon(BrowserSpriteSymbol);
  return document.importNode(tmpl.content, true);
}