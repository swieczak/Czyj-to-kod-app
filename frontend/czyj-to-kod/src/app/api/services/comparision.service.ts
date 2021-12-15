/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ComparisionResult } from '../models/comparision-result';

@Injectable({
  providedIn: 'root',
})
export class ComparisionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation compareTwoStringsGet
   */
  static readonly CompareTwoStringsGetPath = '/compareTwoStrings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `compareTwoStringsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  compareTwoStringsGet$Plain$Response(params?: {
    string_a?: string;
    string_b?: string;
  }): Observable<StrictHttpResponse<ComparisionResult>> {

    const rb = new RequestBuilder(this.rootUrl, ComparisionService.CompareTwoStringsGetPath, 'get');
    if (params) {
      rb.query('string_a', params.string_a, {});
      rb.query('string_b', params.string_b, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComparisionResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `compareTwoStringsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  compareTwoStringsGet$Plain(params?: {
    string_a?: string;
    string_b?: string;
  }): Observable<ComparisionResult> {

    return this.compareTwoStringsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ComparisionResult>) => r.body as ComparisionResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `compareTwoStringsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  compareTwoStringsGet$Json$Response(params?: {
    string_a?: string;
    string_b?: string;
  }): Observable<StrictHttpResponse<ComparisionResult>> {

    const rb = new RequestBuilder(this.rootUrl, ComparisionService.CompareTwoStringsGetPath, 'get');
    if (params) {
      rb.query('string_a', params.string_a, {});
      rb.query('string_b', params.string_b, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComparisionResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `compareTwoStringsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  compareTwoStringsGet$Json(params?: {
    string_a?: string;
    string_b?: string;
  }): Observable<ComparisionResult> {

    return this.compareTwoStringsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ComparisionResult>) => r.body as ComparisionResult)
    );
  }

}
