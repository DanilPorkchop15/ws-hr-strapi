export class ApiRoutes {
  public static getBaseUrl = () => "/";

  public static getTaskLink = (withPrefix = false, uuid?: string) =>
    this._calculatePrefix(ApiRoutes.getBaseUrl(), withPrefix) + "task-links/" + (uuid ?? ":uuid");

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
