CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL"."SPECIAL_REQUEST_CHANGED_COLUMN" (
			SPECIAL_REQUEST_CHANGED_COLUMN_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			REQUEST_ID BIGINT NOT NULL,
			SPECIAL_REQUEST_ID BIGINT NOT NULL,
			COLUMN_NAME NVARCHAR(255) NOT NULL,
			COLUMN_CHANGED TINYINT,
			DISPLAY_NAME NVARCHAR(255),

			CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		 	MODIFIED_DATE_TZ TIMESTAMP,
		 	CREATED_USER_ID BIGINT NOT NULL,
		 	MODIFIED_USER_ID BIGINT,
		 	ENABLED TINYINT DEFAULT 1,
		 	DELETED TINYINT DEFAULT 0
);

ALTER TABLE "MKTG_CART_REQUEST_TOOL"."SPECIAL_REQUEST_CHANGED_COLUMN" ADD FOREIGN KEY ( "REQUEST_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."REQUEST" ("REQUEST_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."SPECIAL_REQUEST_CHANGED_COLUMN" ADD FOREIGN KEY ( "SPECIAL_REQUEST_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."SPECIAL_REQUEST" ("SPECIAL_REQUEST_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;