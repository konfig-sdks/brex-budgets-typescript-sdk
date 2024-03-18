/*
Budgets API


The budgets API lets you manage your Brex budgets.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BudgetProgram } from './budget-program';

/**
 * 
 * @export
 * @interface PageBudgetProgram
 */
export interface PageBudgetProgram {
    /**
     * 
     * @type {string}
     * @memberof PageBudgetProgram
     */
    'next_cursor'?: string | null;
    /**
     * 
     * @type {Array<BudgetProgram>}
     * @memberof PageBudgetProgram
     */
    'items': Array<BudgetProgram>;
}

