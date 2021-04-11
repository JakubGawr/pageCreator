export abstract class WidgetComponent {
  protected _css = '';
  protected _html = '';
  abstract setContent(content: string): void;
  abstract setStyles(styles: string): void;

  get css(): string {
    return this._css;
  }

  get html(): string {
    return this._html;
  }
}
