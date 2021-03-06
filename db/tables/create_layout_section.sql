CREATE COLUMN TABLE "MKTG_CART_REQUEST_TOOL"."LAYOUT_SECTION"
(
	 LAYOUT_SECTION_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	 BLOCK_TYPE NVARCHAR(255) NOT NULL,
	 BLOCK_CONTENT NVARCHAR(1000) NOT NULL,
	 CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	 MODIFIED_DATE_TZ TIMESTAMP,
	 CREATED_USER_ID BIGINT NOT NULL ,
	 MODIFIED_USER_ID BIGINT,
	 ENABLED TINYINT DEFAULT 1,
	 DELETED TINYINT DEFAULT 0
)