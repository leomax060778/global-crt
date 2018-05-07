CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL".DATA_PROTECTION_QUESTION
(
	QUESTION_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	CONTENT NVARCHAR(512) NOT NULL,
	DESCRIPTION NVARCHAR(1000),
	CRT_TYPE_ID BIGINT NOT NULL,
	SHORT_DESCRIPTION NVARCHAR(255) NOT NULL,
	
	CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MODIFIED_DATE_TZ TIMESTAMP,
	CREATED_USER_ID BIGINT NOT NULL,
	MODIFIED_USER_ID BIGINT,
	ENABLED TINYINT DEFAULT 1,
	DELETED TINYINT DEFAULT 0
)

ALTER TABLE "MKTG_CART_REQUEST_TOOL"."DATA_PROTECTION_QUESTION" ADD FOREIGN KEY ( "CRT_TYPE_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."CRT_TYPE" ("CRT_TYPE_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;