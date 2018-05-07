CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL".MATERIAL 
(
MATERIAL_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
CATALOG_ID BIGINT NOT NULL,
DESCRIPTION  NVARCHAR (1000) NOT NULL,
POPUP NVARCHAR (2000),
CODE  NVARCHAR (255),

CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
MODIFIED_DATE_TZ TIMESTAMP,
CREATED_USER_ID BIGINT NOT NULL,
MODIFIED_USER_ID BIGINT,
ENABLED TINYINT DEFAULT 1,
DELETED TINYINT DEFAULT 0
)

ALTER TABLE "MKTG_CART_REQUEST_TOOL"."MATERIAL" ADD FOREIGN KEY ( "CATALOG_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."CATALOG" ("CATALOG_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;