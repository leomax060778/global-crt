CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL"."CATALOG"
(
	 CATALOG_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	 NAME NVARCHAR(255) NOT NULL,
	 CATALOG_TYPE_ID BIGINT NOT NULL,
	 CATALOG_PARENT_ID BIGINT DEFAULT 0,
	 POP_UP NVARCHAR (512),
	 
	 CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	 MODIFIED_DATE_TZ TIMESTAMP,
	 CREATED_USER_ID BIGINT NOT NULL,
	 MODIFIED_USER_ID BIGINT,
	 ENABLED TINYINT DEFAULT 1,
	 DELETED TINYINT DEFAULT 0
) 
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CATALOG" ADD FOREIGN KEY ( "CATALOG_TYPE_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."CATALOG_TYPE" ("CATALOG_TYPE_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;