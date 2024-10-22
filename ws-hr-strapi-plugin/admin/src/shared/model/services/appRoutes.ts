export class AppRoutes {
  public static getHomeUrl = () => "/";

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
