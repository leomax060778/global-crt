CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL".ORIGIN_PLAN
(
ORIGIN_PLAN_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
ORIGIN_PLAN_DESCRIPTION NVARCHAR (255) NOT NULL UNIQUE,

CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
MODIFIED_DATE_TZ TIMESTAMP,
CREATED_USER_ID BIGINT NOT NULL,
MODIFIED_USER_ID BIGINT,
ENABLED TINYINT DEFAULT 1,
DELETED TINYINT DEFAULT 0
)