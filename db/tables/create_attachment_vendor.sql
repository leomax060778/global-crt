CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL".ATTACHMENT_VENDOR 
(
	VENDOR_TYPE_ID INTEGER NOT NULL,
	VENDOR_ID BIGINT NOT NULL,
	ATTACHMENT_ID BIGINT NOT NULL,

	CREATED_USER_ID BIGINT NOT NULL,
	MODIFIED_USER_ID BIGINT,
	CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MODIFIED_DATE_TZ TIMESTAMP,
	ENABLED TINYINT DEFAULT 1,
	DELETED TINYINT DEFAULT 0
);

ALTER TABLE "MKTG_CART_REQUEST_TOOL"."ATTACHMENT_VENDOR" ADD FOREIGN KEY ( "VENDOR_TYPE_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."VENDOR_TYPE" ("VENDOR_TYPE_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."ATTACHMENT_VENDOR" ADD FOREIGN KEY ( "ATTACHMENT_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."ATTACHMENT" ("ATTACHMENT_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;