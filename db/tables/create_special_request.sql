CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL"."SPECIAL_REQUEST" 
(
SPECIAL_REQUEST_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
REQUEST_ID BIGINT NOT NULL,
MATERIAL_DESCRIPTION NVARCHAR (500) NOT NULL,
MATERIAL_CODE NVARCHAR (255) NOT NULL,
ITEM INTEGER NOT NULL,
START_DATE TIMESTAMP NOT NULL,
END_DATE TIMESTAMP NOT NULL,
UNIT_PRICE DECIMAL (19,2),
CURRENCY_ID BIGINT NOT NULL,
AMOUNT DECIMAL (19,2) NOT NULL,
BUDGET DECIMAL (19,2) NOT NULL,
UNIT NVARCHAR (255),
VENDOR_TEXT NVARCHAR (1000),
QUANTITY INTEGER,

CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
MODIFIED_DATE_TZ TIMESTAMP,
CREATED_USER_ID BIGINT NOT NULL,
MODIFIED_USER_ID BIGINT,
ENABLED TINYINT DEFAULT 1, 
DELETED TINYINT DEFAULT 0
);

ALTER TABLE "MKTG_CART_REQUEST_TOOL"."SERVICE" ADD FOREIGN KEY ( "CURRENCY_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."CURRENCY" ("CURRENCY_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;
ALTER TABLE "MKTG_CART_REQUEST_TOOL"."SERVICE" ADD FOREIGN KEY ( "REQUEST_ID" ) REFERENCES "MKTG_CART_REQUEST_TOOL"."REQUEST" ("REQUEST_ID") ON UPDATE RESTRICT ON DELETE RESTRICT
;