CREATE COLUMN TABLE ENTITY
(
	ENTITY_ID BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	ENTITY_NAME NVARCHAR(255) NOT NULL,
	SALES_ORG NVARCHAR(255) NOT NULL,
	COST_CENTER NVARCHAR(255) NOT NULL,
	ENTITY_POSITION INTEGER,
	NON_SAP_HELP_MESSAGE NVARCHAR(1000),
 	
	CREATED_DATE_TZ TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	MODIFIED_DATE_TZ TIMESTAMP,
	CREATED_USER_ID BIGINT NOT NULL,
	MODIFIED_USER_ID BIGINT,
	ENABLED TINYINT DEFAULT 1, 
	DELETED TINYINT DEFAULT 0
);