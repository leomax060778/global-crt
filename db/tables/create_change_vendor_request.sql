CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST"
(
	CHANGE_VENDOR_REQUEST_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	USER_ID BIGINT NOT NULL,
	ENTITY_ID BIGINT NOT NULL,
	COMMODITY_ID BIGINT NOT NULL,
	VENDOR_TYPE_ID BIGINT,
	STATUS_ID BIGINT DEFAULT 1,
	PREVIOUS_STATUS_ID BIGINT, 
	USER_ID_STATUS BIGINT,
	UPDATE_STATUS_TZ TIMESTAMP,
	RECEIVER_USER_ID BIGINT,
	RECEIVER_DATE_COMPLETED_TZ TIMESTAMP,
	RECEIVER_YVC_REQUEST NVARCHAR(255),
	RECEIVER_MODIFIED_DATE_TZ TIMESTAMP,
	VENDOR_NAME NVARCHAR(255) NOT NULL,
	VENDOR_ACCOUNT NVARCHAR(255) NOT NULL,
	VENDOR_CONTACT_NAME NVARCHAR(255) NOT NULL,
	VENDOR_CONTACT_EMAIL NVARCHAR(255) NOT NULL,
	VENDOR_CONTACT_PHONE NVARCHAR(255)
	ADDITIONAL_INFORMATION TINYINT DEFAULT 0,
	
	CREATED_USER_ID BIGINT NOT NULL,
	MODIFIED_USER_ID BIGINT,
	CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MODIFIED_DATE_TZ TIMESTAMP,
	ENABLED TINYINT DEFAULT 1,
	DELETED TINYINT DEFAULT 0
);

ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "USER_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."USER" ("USER_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "USER_ID_STATUS" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."USER" ("USER_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "RECEIVER_USER_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."USER" ("USER_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "VENDOR_TYPE_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."VENDOR_TYPE" ("VENDOR_TYPE_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "STATUS_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST_STATUS" ("STATUS_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "PREVIOUS_STATUS_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST_STATUS" ("STATUS_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "ENTITY_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."ENTITY" ("ENTITY_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."CHANGE_VENDOR_REQUEST" ADD FOREIGN KEY ( "COMMODITY_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."COMMODITY" ("COMMODITY_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;