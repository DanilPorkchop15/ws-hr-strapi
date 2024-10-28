export class AppRoutes {
  public static getHomeUrl = () => "/";

  public static getTaskUrl = (withPrefix: boolean = false, uuid?: string) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}${uuid ?? ":uuid"}`;

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
