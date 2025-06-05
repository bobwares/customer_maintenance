# Version History
## 2.0.40 - 2025-06-05
- Added SQL schema creation script for address and customer tables.
- Updated metadata version headers across all source files.
- Documented schema script in README.

## 2.0.39 - 2025-06-05
- Separated address into its own database table with one-to-one relation.
- Updated NestJS entities, service, and module configuration.
- Enhanced frontend page to safely handle optional address fields.
- Updated SQL test data for new schema.
- Bumped metadata version headers.

## 2.0.38 - 2025-06-05
- Added SQL file with insert statements for 10 customer records.
- Bumped metadata version headers.

## 2.0.37 - 2025-06-05
- Extracted AddressDto into its own file and updated imports.
- Bumped metadata version headers.
## 2.0.36 - 2025-06-05
- Added email and timestamp fields to customer schema and database entity.
- Updated DTOs, service, frontend, and test files.
- Bumped metadata version headers.
## 2.0.35 - 2025-06-05
- Removed Person module and schema; updated customer schema to match customer_schema.json.
- Bumped metadata version headers.
## 2.0.34 - 2025-06-05
- Added Person module and frontend page to manage people based on new JSON schema.
- Bumped metadata version headers.
## 2.0.33 - 2025-06-04
- Added PostgreSQL Dockerfile and .env configuration.
- Integrated TypeORM persistence in customer-api.
- Updated customer-app to use API for CRUD operations.
- Bumped metadata version headers.
## 2.0.32 - 2025-06-04
- Updated customer-api package.json with latest NestJS dependencies.
- Bumped metadata version headers.


## 2.0.31 - 2025-06-04
- Added .http e2e tests in `customer-api/e2e/`.
- Bumped metadata version headers.

## 2.0.30 - 2025-06-04
- Added backend NestJS CRUD API in `customer-api/`.
- Updated README with backend instructions.
