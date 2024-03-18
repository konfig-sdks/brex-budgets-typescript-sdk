/*
Budgets API


The budgets API lets you manage your Brex budgets.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BudgetLimit } from './budget-limit';
import { LimitType } from './limit-type';
import { PeriodType } from './period-type';
import { SpendType } from './spend-type';

/**
 *  Blueprint for provisioning Budgets for a Budget Program. 
 * @export
 * @interface BudgetBlueprint
 */
export interface BudgetBlueprint {
    /**
     *  Description of what the Budget is used for. 
     * @type {string}
     * @memberof BudgetBlueprint
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BudgetBlueprint
     */
    'id': string;
    /**
     *  Name for the Budget. 
     * @type {string}
     * @memberof BudgetBlueprint
     */
    'name'?: string;
    /**
     *  ID of parent Budget. 
     * @type {string}
     * @memberof BudgetBlueprint
     */
    'parent_budget_id'?: string;
    /**
     *  User IDs of the owners of the Budget. 
     * @type {Array<string>}
     * @memberof BudgetBlueprint
     */
    'owner_user_ids'?: Array<string>;
    /**
     *  Period type of the Budget e.g. MONTHLY. 
     * @type {PeriodType}
     * @memberof BudgetBlueprint
     */
    'period_type': PeriodType;
    /**
     *  The UTC date when the Budget should start counting. 
     * @type {string}
     * @memberof BudgetBlueprint
     */
    'start_date'?: string | null;
    /**
     *  The UTC date when the Budget should stop counting. 
     * @type {string}
     * @memberof BudgetBlueprint
     */
    'end_date'?: string | null;
    /**
     * 
     * @type {BudgetLimit}
     * @memberof BudgetBlueprint
     */
    'limit'?: BudgetLimit;
    /**
     *  Whether the Budget limit blocks spend. 
     * @type {LimitType}
     * @memberof BudgetBlueprint
     */
    'limit_type': LimitType;
    /**
     *  Whether this Budget only can be spent from by cards provisioned by this Budget.  
     * @type {SpendType}
     * @memberof BudgetBlueprint
     */
    'spend_type': SpendType;
}

