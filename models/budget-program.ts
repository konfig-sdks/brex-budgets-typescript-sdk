/*
Budgets API


The budgets API lets you manage your Brex budgets.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BudgetBlueprint } from './budget-blueprint';
import { BudgetProgramStatus } from './budget-program-status';
import { EmployeeFilter } from './employee-filter';

/**
 *  Budget Program used to create budgets for eligible users. 
 * @export
 * @interface BudgetProgram
 */
export interface BudgetProgram {
    /**
     * 
     * @type {string}
     * @memberof BudgetProgram
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BudgetProgram
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof BudgetProgram
     */
    'name': string;
    /**
     * 
     * @type {Array<BudgetBlueprint>}
     * @memberof BudgetProgram
     */
    'budget_blueprints': Array<BudgetBlueprint>;
    /**
     *  IDs for existing budgets associated with this Budget Program. 
     * @type {Array<string>}
     * @memberof BudgetProgram
     */
    'existing_budget_ids'?: Array<string> | null;
    /**
     * 
     * @type {EmployeeFilter}
     * @memberof BudgetProgram
     */
    'employee_filter'?: EmployeeFilter;
    /**
     * 
     * @type {BudgetProgramStatus}
     * @memberof BudgetProgram
     */
    'budget_program_status': BudgetProgramStatus;
    /**
     * 
     * @type {string}
     * @memberof BudgetProgram
     */
    'creator_user_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BudgetProgram
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof BudgetProgram
     */
    'updated_at': string;
}

