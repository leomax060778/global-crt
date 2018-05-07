CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY"
(
	 VENDOR_INQUIRY_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	 USER_ID BIGINT NOT NULL,
	 VENDOR_NAME NVARCHAR(255) NOT NULL ,
	 RECEIVER_USER_ID BIGINT,
	 RECEIVER_DATE_COMPLETED_TZ TIMESTAMP,
	 STATUS_ID BIGINT DEFAULT 1 NOT NULL ,
	 PREVIOUS_STATUS_ID BIGINT,
	 USER_ID_STATUS BIGINT,
	 UPDATE_STATUS TIMESTAMP,
	 VENDOR_TYPE_ID BIGINT,
	 CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	 MODIFIED_DATE_TZ TIMESTAMP,
	 CREATED_USER_ID BIGINT NOT NULL,
	 MODIFIED_USER_ID BIGINT,
	 ENABLED TINYINT DEFAULT 1,
	 DELETED TINYINT DEFAULT 0
);

ALTER TABLE "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY" ADD FOREIGN KEY ( "USER_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."USER" ("USER_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY" ADD FOREIGN KEY ( "USER_ID_STATUS" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."USER" ("USER_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY" ADD FOREIGN KEY ( "RECEIVER_USER_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."USER" ("USER_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY" ADD FOREIGN KEY ( "STATUS_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY_STATUS" ("STATUS_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY" ADD FOREIGN KEY ( "VENDOR_TYPE_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."VENDOR_TYPE" ("VENDOR_TYPE_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY" ADD FOREIGN KEY ( "PREVIOUS_STATUS_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."VENDOR_INQUIRY_STATUS" ("STATUS_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;