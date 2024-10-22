export class ApiRoutes {
  public static getBaseUrl = () => "/";

  public static getSpecialities = (withPrefix = false) =>
    this._calculatePrefix(ApiRoutes.getBaseUrl(), withPrefix) + "specialities";

  public static getTaskLinks = (withPrefix = false) =>
    this._calculatePrefix(ApiRoutes.getBaseUrl(), withPrefix) + "task-links";

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
