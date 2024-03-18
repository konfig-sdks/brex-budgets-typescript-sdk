/* tslint:disable */
/* eslint-disable */
/*
Budgets API


The budgets API lets you manage your Brex budgets.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Budget } from '../models';
// @ts-ignore
import { BudgetLimit } from '../models';
// @ts-ignore
import { BudgetLimitVisibilityType } from '../models';
// @ts-ignore
import { CreateBudgetRequest } from '../models';
// @ts-ignore
import { LimitType } from '../models';
// @ts-ignore
import { Money } from '../models';
// @ts-ignore
import { PageBudget } from '../models';
// @ts-ignore
import { PeriodType } from '../models';
// @ts-ignore
import { SpendType } from '../models';
// @ts-ignore
import { UpdateBudgetRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BudgetsApi - axios parameter creator
 * @export
 */
export const BudgetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  Archives a budget, making it unusable for future expenses and removing it from the UI 
         * @summary  Archive a budget 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        archiveBudgetById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('archiveBudgetById', 'id', id)
            const localVarPath = `/v1/budgets/{id}/archive`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["budgets"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/budgets/{id}/archive',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  Creates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
         * @summary  Create Budget 
         * @param {string} idempotencyKey 
         * @param {CreateBudgetRequest} createBudgetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (idempotencyKey: string, createBudgetRequest: CreateBudgetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idempotencyKey' is not null or undefined
            assertParamExists('create', 'idempotencyKey', idempotencyKey)
            // verify required parameter 'createBudgetRequest' is not null or undefined
            assertParamExists('create', 'createBudgetRequest', createBudgetRequest)
            const localVarPath = `/v1/budgets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["budgets"], configuration)
            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createBudgetRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/budgets',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createBudgetRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  Retrieves a Budget by ID 
         * @summary  Get Budget 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/v1/budgets/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["budgets.readonly", "budgets"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/budgets/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  Lists Budgets belonging to this account 
         * @summary  List Budgets 
         * @param {string} [cursor] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/budgets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["budgets.readonly", "budgets"], configuration)
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/budgets',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  Updates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
         * @summary  Update Budget 
         * @param {string} id 
         * @param {string} idempotencyKey 
         * @param {UpdateBudgetRequest} updateBudgetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBudget: async (id: string, idempotencyKey: string, updateBudgetRequest: UpdateBudgetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateBudget', 'id', id)
            // verify required parameter 'idempotencyKey' is not null or undefined
            assertParamExists('updateBudget', 'idempotencyKey', idempotencyKey)
            // verify required parameter 'updateBudgetRequest' is not null or undefined
            assertParamExists('updateBudget', 'updateBudgetRequest', updateBudgetRequest)
            const localVarPath = `/v1/budgets/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["budgets"], configuration)
            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateBudgetRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/budgets/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateBudgetRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BudgetsApi - functional programming interface
 * @export
 */
export const BudgetsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BudgetsApiAxiosParamCreator(configuration)
    return {
        /**
         *  Archives a budget, making it unusable for future expenses and removing it from the UI 
         * @summary  Archive a budget 
         * @param {BudgetsApiArchiveBudgetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async archiveBudgetById(requestParameters: BudgetsApiArchiveBudgetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.archiveBudgetById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  Creates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
         * @summary  Create Budget 
         * @param {BudgetsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: BudgetsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Budget>> {
            const createBudgetRequest: CreateBudgetRequest = {
                description: requestParameters.description,
                name: requestParameters.name,
                parent_budget_id: requestParameters.parent_budget_id,
                owner_user_ids: requestParameters.owner_user_ids,
                member_user_ids: requestParameters.member_user_ids,
                period_type: requestParameters.period_type,
                limit: requestParameters.limit,
                limit_type: requestParameters.limit_type,
                spend_type: requestParameters.spend_type,
                start_date: requestParameters.start_date,
                end_date: requestParameters.end_date,
                limit_visibility: requestParameters.limit_visibility
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters.idempotencyKey, createBudgetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  Retrieves a Budget by ID 
         * @summary  Get Budget 
         * @param {BudgetsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: BudgetsApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Budget>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  Lists Budgets belonging to this account 
         * @summary  List Budgets 
         * @param {BudgetsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: BudgetsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageBudget>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.cursor, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  Updates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
         * @summary  Update Budget 
         * @param {BudgetsApiUpdateBudgetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBudget(requestParameters: BudgetsApiUpdateBudgetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Budget>> {
            const updateBudgetRequest: UpdateBudgetRequest = {
                description: requestParameters.description,
                name: requestParameters.name,
                owner_user_ids: requestParameters.owner_user_ids,
                member_user_ids: requestParameters.member_user_ids,
                limit: requestParameters.limit,
                limit_type: requestParameters.limit_type,
                spend_type: requestParameters.spend_type,
                start_date: requestParameters.start_date,
                end_date: requestParameters.end_date,
                limit_visibility: requestParameters.limit_visibility
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBudget(requestParameters.id, requestParameters.idempotencyKey, updateBudgetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BudgetsApi - factory interface
 * @export
 */
export const BudgetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BudgetsApiFp(configuration)
    return {
        /**
         *  Archives a budget, making it unusable for future expenses and removing it from the UI 
         * @summary  Archive a budget 
         * @param {BudgetsApiArchiveBudgetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        archiveBudgetById(requestParameters: BudgetsApiArchiveBudgetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.archiveBudgetById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  Creates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
         * @summary  Create Budget 
         * @param {BudgetsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: BudgetsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<Budget> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  Retrieves a Budget by ID 
         * @summary  Get Budget 
         * @param {BudgetsApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: BudgetsApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Budget> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  Lists Budgets belonging to this account 
         * @summary  List Budgets 
         * @param {BudgetsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: BudgetsApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PageBudget> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  Updates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
         * @summary  Update Budget 
         * @param {BudgetsApiUpdateBudgetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBudget(requestParameters: BudgetsApiUpdateBudgetRequest, options?: AxiosRequestConfig): AxiosPromise<Budget> {
            return localVarFp.updateBudget(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for archiveBudgetById operation in BudgetsApi.
 * @export
 * @interface BudgetsApiArchiveBudgetByIdRequest
 */
export type BudgetsApiArchiveBudgetByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BudgetsApiArchiveBudgetById
    */
    readonly id: string
    
}

/**
 * Request parameters for create operation in BudgetsApi.
 * @export
 * @interface BudgetsApiCreateRequest
 */
export type BudgetsApiCreateRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BudgetsApiCreate
    */
    readonly idempotencyKey: string
    
} & CreateBudgetRequest

/**
 * Request parameters for getById operation in BudgetsApi.
 * @export
 * @interface BudgetsApiGetByIdRequest
 */
export type BudgetsApiGetByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BudgetsApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for list operation in BudgetsApi.
 * @export
 * @interface BudgetsApiListRequest
 */
export type BudgetsApiListRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BudgetsApiList
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {number}
    * @memberof BudgetsApiList
    */
    readonly limit?: number
    
}

/**
 * Request parameters for updateBudget operation in BudgetsApi.
 * @export
 * @interface BudgetsApiUpdateBudgetRequest
 */
export type BudgetsApiUpdateBudgetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof BudgetsApiUpdateBudget
    */
    readonly id: string
    
    /**
    * 
    * @type {string}
    * @memberof BudgetsApiUpdateBudget
    */
    readonly idempotencyKey: string
    
} & UpdateBudgetRequest

/**
 * BudgetsApiGenerated - object-oriented interface
 * @export
 * @class BudgetsApiGenerated
 * @extends {BaseAPI}
 */
export class BudgetsApiGenerated extends BaseAPI {
    /**
     *  Archives a budget, making it unusable for future expenses and removing it from the UI 
     * @summary  Archive a budget 
     * @param {BudgetsApiArchiveBudgetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public archiveBudgetById(requestParameters: BudgetsApiArchiveBudgetByIdRequest, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).archiveBudgetById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  Creates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
     * @summary  Create Budget 
     * @param {BudgetsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public create(requestParameters: BudgetsApiCreateRequest, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  Retrieves a Budget by ID 
     * @summary  Get Budget 
     * @param {BudgetsApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public getById(requestParameters: BudgetsApiGetByIdRequest, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  Lists Budgets belonging to this account 
     * @summary  List Budgets 
     * @param {BudgetsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public list(requestParameters: BudgetsApiListRequest = {}, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  Updates a Budget. This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned.  If this is the case and you want to gain access to this endpoint, please contact Brex support. 
     * @summary  Update Budget 
     * @param {BudgetsApiUpdateBudgetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BudgetsApiGenerated
     */
    public updateBudget(requestParameters: BudgetsApiUpdateBudgetRequest, options?: AxiosRequestConfig) {
        return BudgetsApiFp(this.configuration).updateBudget(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}