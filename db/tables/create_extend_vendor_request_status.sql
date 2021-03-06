CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL".EXTEND_VENDOR_REQUEST_STATUS
(
STATUS_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
NAME NVARCHAR(255) NOT NULL,
ADMINISTRABLE tinyint default 0,
CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
MODIFIED_DATE_TZ TIMESTAMP,
CREATED_USER_ID BIGINT NOT NULL,
MODIFIED_USER_ID BIGINT,
ENABLED TINYINT DEFAULT 1,
DELETED TINYINT DEFAULT 0
);