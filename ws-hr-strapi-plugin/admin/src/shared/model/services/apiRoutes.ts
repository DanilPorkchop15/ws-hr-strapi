import { BASE_API_URL } from 'shared/config';

export class ApiRoutes {
  public static getBaseUrl = () => "/";

  public static getSpecialities = (withPrefix = false) =>
    this._calculatePrefix(ApiRoutes.getBaseUrl(), withPrefix) + "specialities";

  public static getTasks = (withPrefix = false) =>
    this._calculatePrefix(ApiRoutes.getBaseUrl(), withPrefix) + "tasks";

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
