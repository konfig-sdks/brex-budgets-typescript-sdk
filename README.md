<div align="left">

[![Visit Brex](./header.png)](https://brex.com)

# [Brex](https://brex.com)<a id="brex"></a>


The budgets API lets you manage your Brex budgets.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`brexbudgets.budgetPrograms.create`](#brexbudgetsbudgetprogramscreate)
  * [`brexbudgets.budgetPrograms.getById`](#brexbudgetsbudgetprogramsgetbyid)
  * [`brexbudgets.budgetPrograms.list`](#brexbudgetsbudgetprogramslist)
  * [`brexbudgets.budgetPrograms.removeProgramById`](#brexbudgetsbudgetprogramsremoveprogrambyid)
  * [`brexbudgets.budgetPrograms.updateProgramById`](#brexbudgetsbudgetprogramsupdateprogrambyid)
  * [`brexbudgets.budgets.archiveBudgetById`](#brexbudgetsbudgetsarchivebudgetbyid)
  * [`brexbudgets.budgets.create`](#brexbudgetsbudgetscreate)
  * [`brexbudgets.budgets.getById`](#brexbudgetsbudgetsgetbyid)
  * [`brexbudgets.budgets.list`](#brexbudgetsbudgetslist)
  * [`brexbudgets.budgets.updateBudget`](#brexbudgetsbudgetsupdatebudget)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Brex&serviceName=Budgets&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BrexBudgets } from "brex-budgets-typescript-sdk";

const brexbudgets = new BrexBudgets({
  // Defining the base path is optional and defaults to https://platform.brexapis.com
  // basePath: "https://platform.brexapis.com",
});

const createResponse = await brexbudgets.budgetPrograms.create({
  IdempotencyKey: "IdempotencyKey_example",
  budget_blueprints: [
    {
      period_type: "WEEKLY",
      limit: {},
      limit_type: "HARD",
      spend_type: "BUDGET_PROVISIONED_CARDS_ONLY",
      limit_visibility: "SHARED",
    },
  ],
  name: "name_example",
});

console.log(createResponse);
```

## Reference<a id="reference"></a>


### `brexbudgets.budgetPrograms.create`<a id="brexbudgetsbudgetprogramscreate"></a>


Creates a Budget Program.
If your account does not have access to budget program features, a 403 response status will be returned.
If this is the case and you want to gain access to this endpoint, please contact Brex support.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await brexbudgets.budgetPrograms.create({
  IdempotencyKey: "IdempotencyKey_example",
  budget_blueprints: [
    {
      period_type: "WEEKLY",
      limit: {},
      limit_type: "HARD",
      spend_type: "BUDGET_PROVISIONED_CARDS_ONLY",
      limit_visibility: "SHARED",
    },
  ],
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### budget_blueprints: [`CreateBudgetBlueprintRequest`](./models/create-budget-blueprint-request.ts)[]<a id="budget_blueprints-createbudgetblueprintrequestmodelscreate-budget-blueprint-requestts"></a>

##### name: `string`<a id="name-string"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### description: `string`<a id="description-string"></a>

##### existing_budget_ids: `string`[]<a id="existing_budget_ids-string"></a>

 IDs for existing budgets associated with this Budget Program. 

##### employee_filter: [`CreateBudgetProgramRequestEmployeeFilter`](./models/create-budget-program-request-employee-filter.ts)<a id="employee_filter-createbudgetprogramrequestemployeefiltermodelscreate-budget-program-request-employee-filterts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BudgetProgram](./models/budget-program.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budget_programs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgetPrograms.getById`<a id="brexbudgetsbudgetprogramsgetbyid"></a>


Retrieves a Budget Program by ID


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexbudgets.budgetPrograms.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BudgetProgram](./models/budget-program.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budget_programs/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgetPrograms.list`<a id="brexbudgetsbudgetprogramslist"></a>


Lists Budget Programs belonging to this account


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await brexbudgets.budgetPrograms.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageBudgetProgram](./models/page-budget-program.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budget_programs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgetPrograms.removeProgramById`<a id="brexbudgetsbudgetprogramsremoveprogrambyid"></a>


Delete a Budget Program by ID.
This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned. 
If this is the case and you want to gain access to this endpoint, please contact Brex support.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeProgramByIdResponse =
  await brexbudgets.budgetPrograms.removeProgramById({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BudgetProgram](./models/budget-program.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budget_programs/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgetPrograms.updateProgramById`<a id="brexbudgetsbudgetprogramsupdateprogrambyid"></a>


Updates a Budget Program.
This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned. 
If this is the case and you want to gain access to this endpoint, please contact Brex support.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProgramByIdResponse =
  await brexbudgets.budgetPrograms.updateProgramById({
    id: "id_example",
    IdempotencyKey: "IdempotencyKey_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### description: `string`<a id="description-string"></a>

##### existing_budget_ids: `string`[]<a id="existing_budget_ids-string"></a>

 IDs for existing budgets associated with this Budget Program. 

##### budget_blueprints: [`UpdateBudgetBlueprintRequest`](./models/update-budget-blueprint-request.ts)[]<a id="budget_blueprints-updatebudgetblueprintrequestmodelsupdate-budget-blueprint-requestts"></a>

 The Blueprints to update the budget program with. Blueprints without an ID are treated as new blueprints to be created. Blueprints that exist currently on the Budget Program, but are missing from the input, will be deleted. 

##### employee_filter: [`CreateBudgetProgramRequestEmployeeFilter`](./models/create-budget-program-request-employee-filter.ts)<a id="employee_filter-createbudgetprogramrequestemployeefiltermodelscreate-budget-program-request-employee-filterts"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BudgetProgram](./models/budget-program.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budget_programs/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgets.archiveBudgetById`<a id="brexbudgetsbudgetsarchivebudgetbyid"></a>


Archives a budget, making it unusable for future expenses and removing it from the UI


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const archiveBudgetByIdResponse = await brexbudgets.budgets.archiveBudgetById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budgets/{id}/archive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgets.create`<a id="brexbudgetsbudgetscreate"></a>


Creates a Budget.
This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned. 
If this is the case and you want to gain access to this endpoint, please contact Brex support.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await brexbudgets.budgets.create({
  IdempotencyKey: "IdempotencyKey_example",
  parent_budget_id: "parent_budget_id_example",
  period_type: "WEEKLY",
  limit: {},
  limit_type: "HARD",
  spend_type: "BUDGET_PROVISIONED_CARDS_ONLY",
  limit_visibility: "SHARED",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent_budget_id: `string`<a id="parent_budget_id-string"></a>

 ID of parent Budget. 

##### period_type: [`PeriodType`](./models/period-type.ts)<a id="period_type-periodtypemodelsperiod-typets"></a>

 Period type of the Budget e.g. MONTHLY. 

##### limit: [`Money`](./models/money.ts)<a id="limit-moneymodelsmoneyts"></a>

##### limit_type: [`LimitType`](./models/limit-type.ts)<a id="limit_type-limittypemodelslimit-typets"></a>

 Whether the Budget limit blocks spend. 

##### spend_type: [`SpendType`](./models/spend-type.ts)<a id="spend_type-spendtypemodelsspend-typets"></a>

 Whether this Budget only can be spent from by cards provisioned by this Budget.  

##### limit_visibility: [`BudgetLimitVisibilityType`](./models/budget-limit-visibility-type.ts)<a id="limit_visibility-budgetlimitvisibilitytypemodelsbudget-limit-visibility-typets"></a>

 Determines if budget members are allowed to view the budget limit. 

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### description: `string`<a id="description-string"></a>

 Description of what the Budget is used for. 

##### name: `string`<a id="name-string"></a>

 Name for the Budget. 

##### owner_user_ids: `string`[]<a id="owner_user_ids-string"></a>

 User IDs of the owners of the Budget. 

##### member_user_ids: `string`[]<a id="member_user_ids-string"></a>

 User IDs of the members of the Budget. 

##### start_date: `string`<a id="start_date-string"></a>

 The UTC date when the Budget should start counting. 

##### end_date: `string`<a id="end_date-string"></a>

 The UTC date when the Budget should stop counting. 

#### 🔄 Return<a id="🔄-return"></a>

[Budget](./models/budget.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budgets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgets.getById`<a id="brexbudgetsbudgetsgetbyid"></a>


Retrieves a Budget by ID


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexbudgets.budgets.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Budget](./models/budget.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budgets/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgets.list`<a id="brexbudgetsbudgetslist"></a>


Lists Budgets belonging to this account


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await brexbudgets.budgets.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageBudget](./models/page-budget.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budgets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexbudgets.budgets.updateBudget`<a id="brexbudgetsbudgetsupdatebudget"></a>


Updates a Budget.
This endpoint requires budget management. If your account does not have access to budget management features, a 403 response status will be returned. 
If this is the case and you want to gain access to this endpoint, please contact Brex support.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBudgetResponse = await brexbudgets.budgets.updateBudget({
  id: "id_example",
  IdempotencyKey: "IdempotencyKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### description: `string`<a id="description-string"></a>

 Description of what the Budget is used for. 

##### name: `string`<a id="name-string"></a>

 Name for the Budget. 

##### owner_user_ids: `string`[]<a id="owner_user_ids-string"></a>

 User IDs of the owners of the Budget. 

##### member_user_ids: `string`[]<a id="member_user_ids-string"></a>

 User IDs of the members of the Budget. 

##### limit: [`BudgetLimit`](./models/budget-limit.ts)<a id="limit-budgetlimitmodelsbudget-limitts"></a>

##### limit_type: [`LimitType`](./models/limit-type.ts)<a id="limit_type-limittypemodelslimit-typets"></a>

##### spend_type: [`SpendType`](./models/spend-type.ts)<a id="spend_type-spendtypemodelsspend-typets"></a>

##### start_date: `string`<a id="start_date-string"></a>

 The UTC date when the Budget should start counting. 

##### end_date: `string`<a id="end_date-string"></a>

 The UTC date when the Budget should stop counting. 

##### limit_visibility: [`BudgetLimitVisibilityType`](./models/budget-limit-visibility-type.ts)<a id="limit_visibility-budgetlimitvisibilitytypemodelsbudget-limit-visibility-typets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Budget](./models/budget.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/budgets/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
