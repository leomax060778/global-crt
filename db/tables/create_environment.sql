CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL"."ENVIRONMENT"
(
	 ENVIRONMENT_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	 NAME NVARCHAR(255),
	 PATH NVARCHAR(255),
	 SMTP NVARCHAR(255),
	 CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	 MODIFIED_DATE_TZ TIMESTAMP,
	 MODIFIED_USER_ID BIGINT,
	 ENABLED TINYINT DEFAULT 1,
	 DELETED TINYINT DEFAULT 0,
	 CREATED_USER_ID BIGINT NOT NULL
) 