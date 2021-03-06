CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL".CRT_SUBJECT
(
	CRT_TYPE_ID BIGINT NOT NULL,
	SUBJECT_ID BIGINT NOT NULL,
	
	CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MODIFIED_DATE_TZ TIMESTAMP,
	CREATED_USER_ID BIGINT NOT NULL,
	MODIFIED_USER_ID BIGINT,
	ENABLED TINYINT DEFAULT 1, 
	DELETED TINYINT DEFAULT 0
);
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CRT_SUBJECT" ADD FOREIGN KEY ( "CRT_TYPE_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."CRT_TYPE" ("CRT_TYPE_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CRT_SUBJECT" ADD FOREIGN KEY ( "SUBJECT_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."SUBJECT" ("SUBJECT_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;